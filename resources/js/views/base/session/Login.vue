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
                    <img :src="logo" class="img-responsive my-4" width="120" height="auto"/>

                    <h2 class="mb-4">{{$t('message.loginToAdmin')}}</h2>

                    <ValidationObserver ref="loginForm">
                        <v-form class="mb-5" @submit.prevent="">
                            <ValidationProvider rules="required|email" v-slot="{ errors }">
                                <v-text-field label="Correo electrónico" v-model="data.email" :error-messages="errors"></v-text-field>
                            </ValidationProvider>

                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <v-text-field label="Contraseña" v-model="data.password" type="password" :error-messages="errors"></v-text-field>
                            </ValidationProvider>

                            <v-checkbox color="primary" label="Recordar" v-model="data.remember_me"></v-checkbox>

                            <router-link class="mb-2" to="/session/forgot-password">
                                {{$t('message.forgotPassword')}}?
                            </router-link>

                            <div>
                                <v-btn type="submit" tile block color="primary" class="mb-2" @click="signInWithLaravelPassport()">{{$t('message.loginNow')}}</v-btn>
                             </div>
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
    import { mapGetters } from "vuex";
    import { getCurrentAppLayout } from "Helpers/helpers";

    import { required, email } from 'vee-validate/dist/rules'
    import { ValidationObserver, ValidationProvider, setInteractionMode, extend } from 'vee-validate'
    setInteractionMode('eager');
    extend('required', {...required, message: 'El email es requerido.'});
    extend('email', {...email, message: 'Debe ser un email válido'});

    export default {
        name: "Login",
        components: {
            Slick,
            ValidationProvider,
            ValidationObserver,
        },
        data() {
            return {
                notificationData: { color: '', message: '', activator: false, },

                data: {
                    email:       null,
                    password:    null,
                    remember_me: null,
                },

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
            getCurrentLinkLayout: function (path) { //Devuelve una ruta basada en el tipo de menu usado (default, horizontal, mini) O rutas publicas (session)
                return '/' + getCurrentAppLayout(this.$router) + path;
            },

            signUpWithLaravelPassport() { //Registrar Usuario mediante Laravel Passport
                this.$router.push(this.getCurrentLinkLayout('/sign-up'));
            },

            signUpWithLaravelPassportCompany() { //Registrar Usuario mediante Laravel Passport
                this.$router.push(this.getCurrentLinkLayout('/sign-up-company'));
            },

            signInWithLaravelPassport() { //Iniciar Sesión mediante Laravel Passport
                try {
                    this.$refs.loginForm.validate().then(success => {
                        if (success == true) {

                            this.$store.dispatch('auth/signInWithLaravelPassport', JSON.stringify(this.data)).then(response => {
                                // console.log("Inicio de Sesión Success =", response)
                                if (response.data.status === 'OK') {
                                    this.$nextTick(function () {
                                        window.location.href = "/app/horizontal";
                                    });
                                }
                            }).catch(response => {
                                // console.log("Inicio de Sesión Error =", response)
                            });

                        } else {
                            this.$swal({icon: 'info', title: 'Oops...', text: 'Suministre la información requerida',});
                        }
                    });
                } catch (error) {
                    this.$swal({icon: 'error', title: 'Oops...', text: 'Ha ocurrido un error previo al envio de información.',});
                }
            },
        },
    };
</script>
