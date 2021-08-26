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
					<img :src="appLogo"	class="img-responsive mb-4" width="78" height="78"/>

					<h2 class="mb-4">Restablecer Contraseña</h2>

					<p v-if="passwordReset.activateForm" class="fs-14">Ingrese su nueva contraseña.</p>
					<div v-else class="pa-0">
						<p class="fs-14">Puede que el token generado para restablecer su contraseña haya expirado.</p>
						<router-link :to="'/session/forgot-password'">
							<p class="fs-14">intente generando un nuevo token.</p>
						</router-link>
					</div>
					
					<ValidationObserver ref="resetPasswordForm">
						<v-form class="5">
							<v-text-field label="E-mail" v-model="passwordReset.email" required disabled></v-text-field>
							<ValidationProvider rules="required|confirmed:confirmation" v-slot="{ errors }">
								<v-text-field label="New Password" v-model="passwordReset.newPassword" type="password" required :disabled="!passwordReset.activateForm" :error-messages="errors"></v-text-field>
							</ValidationProvider>
							<ValidationProvider v-slot="{ errors }" vid="confirmation">
								<v-text-field label="Confirm Password" v-model="passwordReset.confirmPassword" type="password" required :disabled="!passwordReset.activateForm" :error-messages="errors"></v-text-field>
							</ValidationProvider>
							<v-btn large @click="resetPassword()" block color="primary" :loading="buttonLoading" :disabled="!passwordReset.activateForm || buttonLoading">{{$t('message.resetPassword')}}</v-btn>
						</v-form>
					</ValidationObserver>
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
import SessionSliderWidget from "Components/Widgets/SessionSlider";
import AppConfig from "Constants/AppConfig";
import { required, confirmed } from 'vee-validate/dist/rules'
import { ValidationObserver, ValidationProvider, setInteractionMode, extend } from 'vee-validate'
setInteractionMode('eager');
extend('required', {...required, message: 'El email es requerido.'});
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
			passwordReset: {
				token:			 '',
				email: 			 '',
				newPassword: 	 '',
				confirmPassword: '',
				activateForm: false,
			},

			buttonLoading: false,

			notificationData: {
				color: '',
				message: '',
				activator: false,
			},

			appLogo: AppConfig.appLogo2,

			sliderData: [
			{id: 1, name:"Mia Mabanta",    subtitle: "Lorem ipsum dolor sit amet", image: "https://reactify.theironnetwork.org/data/images/user-1.jpg", body: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},
			{id: 2, name:"Emmy Loren",     subtitle: "Lorem ipsum dolor sit amet", image: "https://reactify.theironnetwork.org/data/images/user-2.jpg", body: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},
			{id: 3, name:"Astell Mercell", subtitle: "Lorem ipsum dolor sit amet", image: "https://reactify.theironnetwork.org/data/images/user-3.jpg", body: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},
			{id: 4, name:"Alena Harper",   subtitle: "Lorem ipsum dolor sit amet", image: "https://reactify.theironnetwork.org/data/images/user-4.jpg", body: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},
			],
		};
	},

	created() {
		this.infoFromUserEmailManagement();
	},

	mounted() {
	},

	computed: {
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
		infoFromUserEmailManagement() {
			if ( ( (this.$router.history.current.query.token) && (typeof this.$router.history.current.query.token != ('undefined' && 'string')) ) && ( (this.$router.history.current.query.email) && (typeof this.$router.history.current.query.email != ('undefined' && 'string')) ) ) { //Validar información enviada desde Correo Recuperar Contraseña
                this.passwordReset = {
					token: this.$router.history.current.query.token,
					email: this.$router.history.current.query.email,
					newPassword: 	 '',
					confirmPassword: '',
					activateForm: true,
				}
            }			
		},
		resetPassword(){
			this.$refs.resetPasswordForm.validate().then(success => {
                if (success == true) {
					this.buttonLoading = !this.buttonLoading;
					let formData = new FormData();
					formData.append('passwordReset', JSON.stringify(this.passwordReset));

                    this.$store.dispatch('users/restoreForgottenPassword', formData).then(response => {
						console.log("Response Data", response)

						switch (response.data.message) {
							case 'expired':
								this.notificationData = {color: 'error', message: 'Su token para cambio de contraseña ha expirado.', activator: true}
								this.passwordReset = {
									token: this.$router.history.current.query.token,
									email: this.$router.history.current.query.email,
									newPassword: 	 '',
									confirmPassword: '',
									activateForm: false,
								}
							break;
							case 'error':
								this.notificationData = {color: 'warning', message: 'Ha ocurrido un error durante el proceso.', activator: true}
							break;
							case 'success':
								this.notificationData = {color: 'success', message: 'Contraseña restablecida exitosamente.', activator: true}

								setTimeout(() => (this.buttonLoading = !this.buttonLoading), 2000);
								this.$router.push('/session/login');
							break;

							default:
								this.notificationData = {color: 'danger', message: 'Ha ocurrido un error durante el proceso.', activator: true}
							break;
						}
					}).then( () => {
						setTimeout(() => (this.buttonLoading = !this.buttonLoading), 1000);
					});
				} else
				{  this.notificationData = {color: 'warning', message: 'Verifique los campos del formulario.', activator: true}  }
            });
		}
	}
};
</script>
