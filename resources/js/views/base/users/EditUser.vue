<template>
    <div>
        <page-title-bar></page-title-bar>

        <v-container fluid class="pa-9">
            <v-row>
                <v-col cols="12" class="pa-0">
                    <v-card class="pa-11">
                        <v-card-title class="headline px-0 pt-0"><h5>{{$t('message.edit')}} {{$t('message.user')}}</h5></v-card-title>

                        <ValidationObserver ref="userForm">
                            <form @submit.prevent="">
                                <v-row>
                                    <v-col cols="12">
                                        <ValidationProvider rules="required" v-slot="{ errors }">
                                            <v-text-field :label="$t('message.name')" v-model="data.name" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider rules="" v-slot="{ errors }">
                                            <v-text-field :label="$t('message.lastName')" v-model="data.last_name" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider rules="required" v-slot="{ errors }">
                                            <v-text-field :label="$t('message.phone')" v-model="data.phone" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider rules="required|email" v-slot="{ errors }">
                                            <v-text-field :label="$t('message.email')" v-model="data.email" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider rules="confirmed:confirmation" v-slot="{ errors }">
                                            <v-text-field :prepend-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'" :label="$t('message.password')" v-model="data.password" @click:prepend="showPassword = !showPassword" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider v-slot="{ errors }" vid="confirmation">
                                            <v-text-field :prepend-icon="showRepeatPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showRepeatPassword ? 'text' : 'password'" :label="$t('message.repeatPassword')" v-model="data.repeatPassword" @click:prepend="showRepeatPassword = !showRepeatPassword" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>

                                    <v-col cols="12">
                                        <h5><b>{{$t('message.Profiledata')}}</b></h5>
                                    </v-col>

                                    <v-col cols="12">
                                        <ValidationProvider rules="" v-slot="{ errors }">
                                            <v-text-field :label="$t('message.id')" v-model="data.dni" :error-messages="errors" required></v-text-field>
                                        </ValidationProvider>
                                    </v-col>

                                    <v-col cols="12">
                                        <ValidationProvider rules="" v-slot="{ errors }">
                                            <v-select :label="$t('message.gender')" v-model="data.gender" :items="[{value:'mujer', text:$t('message.woman')}, {value:'hombre', text:$t('message.man')}]" :error-messages="errors" required></v-select>
                                        </ValidationProvider>
                                    </v-col>

                                    <v-col cols="12">
                                        <ValidationProvider rules="" v-slot="{ errors }">
                                            <v-text-field :label="$t('message.address')" v-model="data.address" :error-messages="errors" required></v-text-field>
                                        </ValidationProvider>
                                    </v-col>

                                    <v-col cols="12" class="py-0">
                                        <v-row justify="center">
                                            <v-col cols="1" class="pl-6 text-center">
                                                <v-img v-if="countryFlag" :src="countryFlag.flag" width="70" height="50"></v-img>
                                            </v-col>

                                            <v-col cols="11" class="pl-0">
                                                <ValidationProvider rules="" v-slot="{ errors }">
                                                    <v-select :label="$t('message.country')" v-model="data.country" :items="countries" :error-messages="errors" @change="(fillStatesOfCountry()); (countryFlag = countriesList.find( country => country.id == data.country))"></v-select>
                                                </ValidationProvider>
                                            </v-col>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="12">
                                        <ValidationProvider rules="" v-slot="{ errors }">
                                            <v-select :label="$t('message.state')" v-model="data.state" :items="states" :loading="statesLoading" :error-messages="errors" @change="fillCitiesOfState()"></v-select>
                                        </ValidationProvider>
                                    </v-col>

                                    <v-col cols="12">
                                        <ValidationProvider rules="" v-slot="{ errors }">
                                            <v-select :label="$t('message.city')" v-model="data.city" :items="cities" :loading="citiesLoading" :error-messages="errors"></v-select>
                                        </ValidationProvider>
                                    </v-col>
                                </v-row>
                            </form>
                        </ValidationObserver>

                        <v-card-actions>
                            <v-row justify="start">
                                <v-btn type="submit" color="primary" class="ma-2" :disabled="loader" @click="updateUser()">{{$t('message.save')}}</v-btn>
                                <router-link :to="`/${getCurrentAppLayoutHandler() + '/users'}`">
                                    <v-btn color="white" class="ma-2" :disabled="loader">{{$t('message.back')}}</v-btn>
                                </router-link>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <app-section-loader :status="loader"></app-section-loader>

        <v-snackbar v-model="notificationData.activator" :color="notificationData.color" :timeout="4000" :top="true" :right="true">
            {{notificationData.message}}
            <v-icon class="ml-2" small @click="notificationData.activator = false">mdi-close</v-icon>
        </v-snackbar>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getCurrentAppLayout } from "Helpers/helpers";
import { required, numeric, email, confirmed } from 'vee-validate/dist/rules'
import { ValidationObserver, ValidationProvider, setInteractionMode, extend } from 'vee-validate'
setInteractionMode('eager');
extend('required', {...required, message: 'El campo es requerido'});
extend('numeric', {...numeric, message: 'El campo solo admite números'});
extend('email', {...email, message: 'Debe ser un email válido'});
extend('confirmed', {...confirmed, message: 'La confirmación de contraseña no coincide'});

export default {
    name: "EditUser",
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            loader: true,

            notificationData: { color: '', message: '',	activator: false, },

            countries: [], countryFlag: null, //Array de Paises
            statesLoading: false, states: [], //Array de los Estados de un País
            citiesLoading: false, cities: [], //Array de las Ciudades de un Estado

            showPassword: false,
            showRepeatPassword: false,
            data: {},
        }
    },

    created() {
        this.verifyUserData();
    },

    mounted() {
        this.$store.dispatch('locations/getCountriesList').then(response => { //Países
            this.fillCountriesList();
        });

        setTimeout(() => (this.loader = false), 500);
    },

    computed: {
        ...mapGetters({
            countriesList: "locations/countriesList",
        }),
    },

    methods: {
        getCurrentAppLayoutHandler() {
            return getCurrentAppLayout(this.$router);
        },

        verifyUserData() { //Verificar que haya sido enviada la información del Usuario
            if ( (this.$router.history.current.query.user) && (typeof this.$router.history.current.query.user != ('undefined' && 'string')) ) //Tomando información de usuario
            { this.syncUserData(this.$router.history.current.query.user); }
            else
            { this.$router.push(`/${this.getCurrentAppLayoutHandler() + '/users'}`); } //Sino re-direcciono a la lista de usuarios
        },

        syncUserData(userData) { //Sincronizar información que se recibe del usuario con los campos del formulario de editar
            this.data = {
                userId:         userData.id,
                name:           userData.name,
                last_name:      userData.last_name,
                email:          userData.email,
                phone:          userData.phone,
                password:       null,
                repeatPassword: null,
              //Datos para Tabla del Perfil
                dni:            userData.profile.dni,
                gender:         userData.profile.gender,
                address:        userData.profile.address,
                country:        userData.profile.country.id,
                state:          userData.profile.state.id,
                city:           userData.profile.city.id,
            };

            this.countryFlag = userData.profile.country;
            this.states.push({value: userData.profile.state.id, text: userData.profile.state.name})
            this.cities.push({value: userData.profile.city.id, text: userData.profile.city.name})
        },

        fillCountriesList() {  //Acondicionar array de Paises
            this.countries = this.countriesList.map( (country) => {
                return {value: country.id, text: country.name}
            });
        },

        fillStatesOfCountry() { //Acondicionar array de Estados de un País
            this.statesLoading = true; this.data.state = null;
            this.citiesLoading = true; this.data.city = null;

            this.$store.dispatch('locations/getStatesOfCountryList', this.data.country).then(response => { //Países
                this.states = response.data.map( (state) => {
                    return {value: state.id, text: state.name}
                })
            });

            setTimeout(() => {this.statesLoading = false; this.citiesLoading = false}, 500);
        },

        fillCitiesOfState() { //Acondicionar array de Ciudades de un Estado
            this.citiesLoading = true; this.data.city = null;

            this.$store.dispatch('locations/getCitiesOfStateList', this.data.state).then(response => { //Países
                this.cities = response.data.map( (city) => {
                    return {value: city.id, text: city.name}
                })
            });

            setTimeout(() => {this.citiesLoading = false}, 500);
        },

        updateUser() { //Editar Usuario
            try {
                this.loader = true; //Activar loader

                this.$refs.userForm.validate().then(success => {
                    if (success == true) {
                        this.$store.dispatch('users/updateUser', this.data).then(response => {
                            switch (response.data.status) {
                                case 'OK':
                                    this.notificationData = {color: response.data.color, message: response.data.message, activator: true}
                                break;
                                default:
                                    this.$swal({icon: 'error', title: 'Oops...', text: response.data.message,});
                                break;
                            }

                            setTimeout(() => {
                                this.loader = false;

                                if (response.data.status === 'OK')
                                { this.$router.push(`/${this.getCurrentAppLayoutHandler() + '/users'}`); }

                            }, 1000);
                        }).catch(response => { //Aqui se maneja el error del Front
                            setTimeout(() => (this.loader = false), 1000); //Tiempo de espera para desactivar Loader
                            console.log("Error en el Front", response);
                            this.$swal({icon: 'error', title: 'Oops...', text: 'Ha ocurrido un error previo al envio de información.',});
                            // this.notificationData = {color: 'error', message: 'Ha ocurrido un error durante el envio de información.', activator: true}
                        });
                    } else {
                        setTimeout(() => (this.loader = false), 500);
                        this.$swal({icon: 'info', title: 'Oops...', text: 'Suministre la información requerida.',});
                        // this.notificationData = {color: 'warning', message: 'Suministre la información requerida.', activator: true}
                    }
                });
            } catch (error) {
                setTimeout(() => (this.loader = false), 1000); //Tiempo de espera para desactivar Loader
                console.log("Error antes de llamar al Vuex Store", error);
                this.$swal({icon: 'error', title: 'Oops...', text: 'Ha ocurrido un error previo al envio de información.',});
                // this.notificationData = {color: 'error', message: 'Ha ocurrido un error previo al envio de información.', activator: true}
            }
        },
    },
}
</script>
