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
					<img :src="logo" class="img-responsive mb-4" width="120" height="auto"/>

					<h2 class="mb-4">{{$t('message.signUp')}}</h2>

					<p class="fs-14">{{$t('message.havingAnAccount')}}
						<router-link to="/session/login">{{$t('message.login')}}</router-link>
					</p>

					<ValidationObserver ref="signUpForm">
                        <v-form class="mb-5" @submit.prevent="">
							<ValidationProvider rules="required" v-slot="{ errors }">
                                <v-text-field label="Nombre" v-model="data.name" :counter="15" :error-messages="errors"></v-text-field>
                            </ValidationProvider>
							<ValidationProvider rules="required" v-slot="{ errors }">
                                <v-text-field label="Apellidos" v-model="data.last_name" :counter="15" :error-messages="errors"></v-text-field>
                            </ValidationProvider>

                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <v-text-field :label="$t('message.phone')" v-model="data.phone" :error-messages="errors"></v-text-field>
                            </ValidationProvider>

							<ValidationProvider rules="required|email" v-slot="{ errors }">
                                <v-text-field label="Correo electrónico" v-model="data.email" :error-messages="errors"></v-text-field>
                            </ValidationProvider>



							<ValidationProvider rules="required|confirmed:confirmation" v-slot="{ errors }">
                                <v-text-field :prepend-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'" label="Contraseña" v-model="data.password" @click:prepend="showPassword = !showPassword" :error-messages="errors"></v-text-field>
                            </ValidationProvider>

							<ValidationProvider v-slot="{ errors }" vid="confirmation">
                                <v-text-field :prepend-icon="showRepeatPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showRepeatPassword ? 'text' : 'password'" label="Repetir contraseña" v-model="data.password_confirmation" @click:prepend="showRepeatPassword = !showRepeatPassword" :error-messages="errors"></v-text-field>
                            </ValidationProvider>

							<v-btn type="submit" large block color="primary" class="mb-4" :disable="loader" @click="signupUserWithLaravelPassport()">{{$t('message.signUp')}}</v-btn>

							<p><a href="#" target="_blank">{{$t('message.bySigningUpYouAgreeTo')}} BikeU</a></p>
						</v-form>
                    </ValidationObserver>
				</div>
			</div>
		</div>

		<app-section-loader :status="loader"></app-section-loader>

		<v-snackbar v-model="notificationData.activator" :color="notificationData.color" :timeout="4000" :top="true" :right="true">
			{{notificationData.message}}
			<v-icon class="ml-2" small @click="notificationData.activator = false">mdi-close</v-icon>
		</v-snackbar>
	</div>
</template>

<script>
	import Slick from "vue-slick";
	import { mapGetters } from "vuex";

	import { required, alpha, max, email, confirmed } from 'vee-validate/dist/rules'
    import { ValidationObserver, ValidationProvider, setInteractionMode, extend } from 'vee-validate'
    setInteractionMode('eager');
    extend('required', {...required, message: 'El campo es requerido.'});
	extend('alpha', {...alpha, message: 'Debe contener únicamente letras'});
	extend('max', {...max, message: 'Debe tener menos de {length} caracteres '});
	extend('email', {...email, message: 'Debe ser un email válido'});
	extend('confirmed', {...confirmed, message: 'La confirmación de contraseña no coincide'});

	export default {
        name: "SignUp",
		components: {
            Slick,
            ValidationProvider,
            ValidationObserver,
        },
		data() {
			return {
				loader: true,

				notificationData: { color: '', message: '', activator: false, },

				showPassword: false,
            	showRepeatPassword: false,

				data: {
					name: null,
					last_name: null,
					email: null,
					phone: null,
					password: null,
					password_confirmation: null,
				},

				sliderData: [
					{id: 1, name:"Mia Mabanta",    subtitle: "Lorem ipsum dolor sit amet", image: "https://reactify.theironnetwork.org/data/images/user-1.jpg", body: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},
					{id: 2, name:"Emmy Loren",     subtitle: "Lorem ipsum dolor sit amet", image: "https://reactify.theironnetwork.org/data/images/user-2.jpg", body: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},
					{id: 3, name:"Astell Mercell", subtitle: "Lorem ipsum dolor sit amet", image: "https://reactify.theironnetwork.org/data/images/user-3.jpg", body: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},
					{id: 4, name:"Alena Harper",   subtitle: "Lorem ipsum dolor sit amet", image: "https://reactify.theironnetwork.org/data/images/user-4.jpg", body: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},
					],
			};
		},

		mounted() {
			setTimeout(() => (this.loader = false), 500);
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
			signupUserWithLaravelPassport() { //Registro de Usuario mediante Laravel Passport
                try {
					this.loader = true;
                    this.$refs.signUpForm.validate().then(success => {
                        if (success == true) {

							setTimeout(() => (this.loader = false), 500);

                            this.$store.dispatch('auth/signupUserWithLaravelPassport', JSON.stringify(this.data)).then(response => {
                                // console.log("Registro de Usuario =", response)
                                if (response.data.status === 'OK') {
									this.data = {name : null, email : null, password : null, password_confirmation : null,};

									this.$router.push('/app/horizontal');
								}
                            }).catch(response => {
                                // console.log("Registro de Usuario Error =", response)
                            });

                        } else {
							this.$swal({icon: 'info', title: 'Oops...', text: 'Suministre la información requerida',});
                            // this.notificationData = {color: 'warning', message: 'Suministre la información requerida.', activator: true}
                        }
                    });
                } catch (error) {
					console.log("Error previo al intento de inicio de sesión", error);
					this.$swal({icon: 'error', title: 'Oops...', text: 'Ha ocurrido un error previo al envio de información.',});
					// this.notificationData = {color: 'error', message: 'Ha ocurrido un error previo al envio de información.', activator: true}
					setTimeout(() => (this.loader = false), 500);
				}
				setTimeout(() => (this.loader = false), 500);
			},

			signInWithGoogle() {  //Registro de Usuario mediante Google
				this.$store.dispatch('auth/signInWithGoogle', {router: this.$router}).then(response => {
					console.log("Registro de Usuario Google =", response)
				}).catch(response => {
					console.log("Registro de Usuario Google Error =", response)
				});
			},

			signInWithFacebook() { //Registro de Usuario mediante Facebook
				this.$store.dispatch('auth/signInWithFacebook', {router: this.$router}).then(response => {
					console.log("Registro de Usuario Facebook =", response)
				}).catch(response => {
					console.log("Registro de Usuario Facebook Error =", response)
				});
			}

		}
	};
</script>
