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
					<img :src="logo"	class="img-responsive mb-4" width="78" height="78"/>

					<template v-if="tokenValidationStatus=='pending'">
						<h2 class="mb-4">Verificar Validez del Token</h2>

						<ValidationObserver ref="tokenValidationForm">
							<v-form class="5">
								<ValidationProvider rules="required|email" v-slot="{ errors }">
									<v-text-field label="E-mail" v-model="passwordReset.email" :error-messages="errors"></v-text-field>
								</ValidationProvider>
								<ValidationProvider rules="required"  v-slot="{ errors }">
									<v-text-field label="Token" v-model="passwordReset.token" :error-messages="errors"></v-text-field>
								</ValidationProvider>
								<v-btn large @click="verifyToken()" block color="primary" :loading="buttonLoading" :disabled="buttonLoading">{{$t('message.verifyToken')}}</v-btn>
							</v-form>
						</ValidationObserver>
					</template>

					<template v-else-if="tokenValidationStatus=='valid'">
						<h2 class="mb-4">Restablecer Contraseña</h2>

						<ValidationObserver ref="resetPasswordForm">
							<v-form class="5">
								<v-text-field label="E-mail" v-model="passwordReset.email" required disabled></v-text-field>
								<ValidationProvider rules="required|confirmed:confirmation" v-slot="{ errors }">
									<v-text-field label="New Password" v-model="passwordReset.password" type="password" required :error-messages="errors"></v-text-field>
								</ValidationProvider>
								<ValidationProvider v-slot="{ errors }" vid="confirmation">
									<v-text-field label="Confirm Password" v-model="passwordReset.password_confirmation" type="password" required :error-messages="errors"></v-text-field>
								</ValidationProvider>
								<v-btn large @click="resetPassword()" block color="primary" :loading="buttonLoading" :disabled="buttonLoading">{{$t('message.resetPassword')}}</v-btn>
							</v-form>
						</ValidationObserver>
					</template>

					<template v-else-if="tokenValidationStatus=='invalid'">
						<div class="pa-0">
							<p class="fs-14">Puede que el token generado para restablecer su contraseña haya expirado o sea invalido.</p>
							<router-link :to="'/session/forgot-password'">
								<p class="fs-14">intente generando un nuevo token.</p>
							</router-link>
						</div>
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
import SessionSliderWidget from "Components/Widgets/SessionSlider";
import AppConfig from "Constants/AppConfig";
import { required, email, confirmed } from 'vee-validate/dist/rules'
import { ValidationObserver, ValidationProvider, setInteractionMode, extend } from 'vee-validate'
setInteractionMode('eager');
extend('required', {...required, message: 'El email es requerido.'});
extend('email', {...email, message: 'Debe ser un email válido'});
extend('confirmed', {...confirmed, message: 'La confirmación de contraseña no coincide'});
import { mapGetters } from "vuex";

export default {
    name: "ResetPassword",
	components: {
		Slick,
		SessionSliderWidget,
		ValidationProvider,
		ValidationObserver,
	},
	data() {
		return {
			tokenValidation: { token: '', email: '', },

			tokenValidationStatus: 'pending',

			passwordReset: {
				token:			 '',
				email: 			 '',
				password: null,
				password_confirmation: null,
			},

			buttonLoading: false,

			notificationData: {	color: '', message: '', activator: false,},

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
	},

	mounted() {
		// this.infoFromUserEmailManagement();
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
		// infoFromUserEmailManagement() {
		// 	if ( !(Object.keys(this.$router.history.current.query).length === 0) ) {//Si el objeto no esta vacio
		// 	// if ( ( (this.$router.history.current.query.token) && (typeof this.$router.history.current.query.token != ('undefined' && 'string')) ) && ( (this.$router.history.current.query.email) && (typeof this.$router.history.current.query.email != ('undefined' && 'string')) ) ) { //Validar información enviada desde Correo Recuperar Contraseña
        //         this.passwordReset = {
		// 			token: this.$router.history.current.query.token,
		// 			email: this.$router.history.current.query.email,
		// 			newPassword: 	 '',
		// 			confirmPassword: '',
		// 			activateForm: true,
		// 		}
        //     }
		// },

		verifyToken() {
			this.$refs.tokenValidationForm.validate().then(success => {
                if (success == true) {
					this.buttonLoading = !this.buttonLoading;

                    this.$store.dispatch('users/validateRestorePasswordToken', JSON.stringify(this.passwordReset)).then(response => {

						if (response.data.status === 'OK') {
							this.notificationData = {color: 'success', message: response.data.message, activator: true};
							this.tokenValidationStatus = 'valid';
						} else if (response.data.status === 'invalid') {
							this.$swal({icon: 'info', title: 'Oops...', text: response.data.message,});
							this.tokenValidationStatus = 'invalid';
						} else {
							this.$swal({icon: 'info', title: 'Oops...', text: response.data.message,});
						}

					}).then( () => {
						setTimeout(() => (this.buttonLoading = !this.buttonLoading), 1000);
					}).catch(response => {
						this.$swal({icon: 'error', title: 'Oops...', text: response.data.message,});
						setTimeout(() => (this.buttonLoading = !this.buttonLoading), 1000);
					});
				} else
				{  this.$swal({icon: 'info', title: 'Oops...', text: 'Verifique los campos del formulario',});  }
				// {  this.notificationData = {color: 'warning', message: 'Verifique los campos del formulario.', activator: true}  }
            });
		},

		resetPassword(){
			this.$refs.resetPasswordForm.validate().then(success => {
                if (success == true) {
					this.buttonLoading = !this.buttonLoading;

                    this.$store.dispatch('users/restoreForgottenPassword', JSON.stringify(this.passwordReset)).then(response => {

						if (response.data.status == 'OK') {
							this.notificationData = {color: 'success', message: response.data.message, activator: true};
							setTimeout(() => {
								this.buttonLoading = !this.buttonLoading

								this.$router.push('/app/session/login');
							}, 2000);
						} else if (response.data.status === 'expired') {
							this.$swal({icon: 'info', title: 'Oops...', text: response.data.message,});
							this.tokenValidationStatus = 'invalid';
						} else {
							this.$swal({icon: 'info', title: 'Oops...', text: response.data.message,});
						}

					}).then( () => {
						setTimeout(() => (this.buttonLoading = !this.buttonLoading), 1000);
					}).catch(response => {
						this.$swal({icon: 'error', title: 'Oops...', text: response.data.message,});
						setTimeout(() => (this.buttonLoading = !this.buttonLoading), 1000);
					});
				} else
				{  this.$swal({icon: 'info', title: 'Oops...', text: 'Verifique los campos del formulario',});  }
				// {  this.notificationData = {color: 'warning', message: 'Verifique los campos del formulario.', activator: true}  }
            });
		}
	}
};
</script>
