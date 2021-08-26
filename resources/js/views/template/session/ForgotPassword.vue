<template>
	<div class="session-wrapper">
		<div class="session-left">
            <Slick v-if="sliderData" :options="slickOptions">
                <template v-for="item in sliderData">
                    <div class="session-slider" :key="item.id">
                        <div class="slider-content">
                            <img :src="item.image" class="rounded-circle img-responsive" width="170" height="170"/>
                            <div class="slider-meta mb-4">
                                  <span class="d-block client-name fw-bold">
                                    <i>{{item.name}}</i>
                                  </span>
                                  <span class="d-block client-digg">{{item.subtitle}}</span>
                            </div>
                            <p class="px-4">{{item.body}}</p>
                        </div>
                    </div>
                </template>
            </Slick>
		</div>
		
		<div class="session-right text-center">
			<div class="session-table-cell">
				<div class="session-content">
					<img :src="logo" class="img-responsive mb-4" width="100" height="100"/>

					<h2 class="mb-4">{{$t('message.forgotPassword')}}</h2>
					<template v-if="!checkEmail">
						<p class="fs-14">{{$t('message.enterYourEmailToSendYouAResetLink')}}.</p>

						<ValidationObserver ref="forgotPasswordForm">
							<v-form class="mb-6">
								<ValidationProvider rules="required|email" v-slot="{ errors }">
									<v-text-field label="E-mail ID" v-model="email" :error-messages="errors"></v-text-field>
								</ValidationProvider>
								<v-btn color="primary" :loading="buttonLoading" :disabled="buttonLoading" @click="sendEmail()">Enviar Correo</v-btn>
							</v-form>
						</ValidationObserver>
					</template>

					<template v-else>
						<p class="fs-14">Ha sido enviado un correo a la dirección de email.</p>
						<p class="fs-14">{{email}}</p>
					</template>

					<div>
						<router-link to="/session/login">{{$t('message.backToSignIn')}}</router-link>
					</div>
				</div>
			</div>
		</div>

		<v-snackbar v-model="notificationData.activator" :color="notificationData.color" :timeout="4000" :top="true" :right="true">
			{{notificationData.message}}
			<v-icon class="ml-2" small @click="notificationData.activator = false">mdi-close</v-icon>
		</v-snackbar>
	</div>
</template>


<script>
import Slick from "vue-slick";
import { mapGetters } from "vuex";
import SessionSliderWidget from "Components/Widgets/SessionSlider";
import { required, email, confirmed } from 'vee-validate/dist/rules'
import { ValidationObserver, ValidationProvider, setInteractionMode, extend } from 'vee-validate'
setInteractionMode('eager');
extend('required', {...required, message: 'El email es requerido.'});
extend('email', {...email, message: 'Debe ser un email válido'});
extend('confirmed', {...confirmed, message: 'La confirmación de contraseña no coincide'});

export default {
	components: {
		Slick,
		SessionSliderWidget,
		ValidationProvider,
        ValidationObserver,
	},
	data() {
		return {
			checkEmail: false, //Verificar si el correo ha sido enviado o no

			email: '',
			buttonLoading: false,

			notificationData: { color: '', message: '', activator: false, },

			sliderData: [
				{id: 1, name:"Mia Mabanta",    subtitle: "Lorem ipsum dolor sit amet", image: "https://reactify.theironnetwork.org/data/images/user-1.jpg", body: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},
				{id: 2, name:"Emmy Loren",     subtitle: "Lorem ipsum dolor sit amet", image: "https://reactify.theironnetwork.org/data/images/user-2.jpg", body: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},
				{id: 3, name:"Astell Mercell", subtitle: "Lorem ipsum dolor sit amet", image: "https://reactify.theironnetwork.org/data/images/user-3.jpg", body: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},
				{id: 4, name:"Alena Harper",   subtitle: "Lorem ipsum dolor sit amet", image: "https://reactify.theironnetwork.org/data/images/user-4.jpg", body: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},
			],
		}
	},

	computed: {
		...mapGetters({
			logo: 'settings/logo',
		}),

		slickOptions() {
			return {
				dots: true,
				speed: 800,
				arrows: false,
				autoplay: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			};
		}
	},

	methods: {
		sendEmail(){
			this.$refs.forgotPasswordForm.validate().then(success => {
                if (success == true) {
					this.buttonLoading = !this.buttonLoading;
					let formData = new FormData();
					formData.append('email', this.email);

                    this.$store.dispatch('users/sendForgottenPasswordEmail', formData).then(response => {
						console.log("Response Data", response)
						switch (response.data.message) {
							case 'invalid':
								this.notificationData = {color: 'error', message: 'El email es inválido.', activator: true}
							break;
							case 'error':
								this.notificationData = {color: 'warning', message: 'Ha ocurrido un error durante el envio del correo.', activator: true}
							break;
							case 'success':
								this.notificationData = {color: 'success', message: 'Ha sido enviado un correo a su dirección de email.', activator: true}
								this.checkEmail = true;
							break;

							default:
								this.notificationData = {color: 'danger', message: 'Ha ocurrido un error durante el envio del correo.', activator: true}
							break;
						}
					}).then( () => {
						setTimeout(() => (this.buttonLoading = !this.buttonLoading), 1000);
					});
				} else
				{  this.notificationData = {color: 'warning', message: 'Debe ingresar un email válido.', activator: true}  }
            });
        }
	},
}
</script>
