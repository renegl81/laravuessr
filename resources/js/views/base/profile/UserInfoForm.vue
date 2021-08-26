<template>
    <ValidationObserver ref="observer" v-slot="{ validate, reset }">
        <app-section-loader :status="loader"/>

        <form>
            <ValidationProvider v-slot="{ errors }" name="name" rules="required|max:25">
                <v-text-field
                    v-model="getInfoUser.name"
                    :counter="25"
                    :error-messages="errors"
                    :label="$t('message.name')"
                    required
                />
                
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="last-name" rules="required|max:25">
                <v-text-field
                    v-model="getInfoUser.last_name"
                    :counter="25"
                    :error-messages="errors"
                    :label="$t('message.lastName')"
                    required
                />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                <v-text-field
                    v-model="getInfoUser.email"
                    :error-messages="errors"
                    :label="$t('message.email')"
                    required
                />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="phone" rules="required|numeric">
                <v-text-field
                    v-model="getInfoUser.phone"
                    :error-messages="phone"
                    :label="$t('message.phone')"
                    required
                    type='number'
                />
            </ValidationProvider>
                <!-- notification -->
                <v-snackbar v-model="notification" color="success" :timeout="5000" :top="true" :right="true">
                        ¡Datos guardado exitosamente!
                    <v-btn color="gray" text @click="notification = false">
                        Cerrar
                    </v-btn>
                </v-snackbar>
                <!-- notificacion editar datos -->
                <v-snackbar v-model="name_error" :color="color" :timeout="5000" :top="true" :right="true">
                        {{ message }}
                    <v-btn color="error" text @click="notification = false">
                        Cerrar
                    </v-btn>
                </v-snackbar>
                <v-snackbar v-model="last_name_error" color="error" :timeout="5000" :top="true" :right="true">
                        ¡No has introducido el admin!
                    <v-btn color="error" text @click="notification = false">
                        Cerrar
                    </v-btn>
                </v-snackbar>
                <v-snackbar v-model="phone_error" color="error" :timeout="5000" :top="true" :right="true" validanumericos>
                        ¡No has introducido el telefono!
                    <v-btn color="error" text @click="notification = false">
                        Cerrar
                    </v-btn>
                </v-snackbar>
                 <v-snackbar v-model="email_error" color="error" :timeout="5000" :top="true" :right="true">
                        ¡No has introducido el email!
                    <v-btn color="error" text @click="notification = false">
                        Cerrar
                    </v-btn>
                </v-snackbar>
            <v-btn class="mr-4 primary" style="margin-bottom: 15px;" @click="saveData">{{$t('message.save')}}</v-btn>
        </form>
    </ValidationObserver>
</template>
<script>
    import { required, email, max, numeric } from 'vee-validate/dist/rules'
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

    setInteractionMode('eager')

    extend('required', {
        ...required,
        message: '{_field_} can not be empty',
    })

    extend('max', {
        ...max,
        message: '{_field_} may not be greater than {length} characters',
    })

    extend('email', {
        ...email,
        message: 'Email must be valid',
    })
    extend('numeric', {
        ...numeric,
        message: 'Solo numérico'
    })

    export default {
        name: "UserInfoForm",
        components: {
            ValidationProvider,
            ValidationObserver,
        },
        data(){
            return {
                user: {},
                UserInfo: {},
                notification: false,
                name_error: false,
                last_name_error: false,
                phone_error: false,
                email_error: false,
                loader: false,
                message: '',
                color: ''
            }
        },
        mounted() {

            // aqui convertimos el item user almacenado en el localStorage en un JSON 
            let user = JSON.parse(localStorage.getItem('user'))
            // asignamos la conversión al objeto user
            this.user = user
            let data = {'id': this.user.id}
            this.$store.dispatch('profile/getUser', data)
            
        },
        methods: {
            
            submit () {
                this.$refs.observer.validate()
            },
            clear () {
                this.name = '';
                this.lastName = null;
                this.email = '';
                this.phone = null;
                this.$refs.observer.reset()
            },

            validatePhone(phone){
                var a = /^[0-9]$/;
                return a.test(phone)
            },
            /**
             * esta funcion sirve para enviarle los parametros a la api para que vaya y guarde los datos actualizados del usuario
             */
            saveData(){
                if(!this.getInfoUser.name){
                    this.name_error = true
                }else if(!this.getInfoUser.last_name){
                    this.last_name_error = true
                }else if(!this.getInfoUser.phone){
                    this.message = 'El numero de telefono deben ser solo numeros'
                    this.color = 'error'
                    this.name_error = true
                }else if(!this.getInfoUser.email){
                    this.email_error = true
                }else{
                this.$refs.observer.validate().then((res) =>{
                        if(res){
                            this.loader = true;
                            console.log(this.user.id)
                            let data = {"id": this.getInfoUser.id, "name": this.getInfoUser.name, "last_name": this.getInfoUser.last_name, "phone": this.getInfoUser.phone, "email": this.getInfoUser.email};
                            this.$store.dispatch('profile/saveData', data).then(()=>{
                                this.notification = true;
                                this.loader = false;
                                location.reload()
                            });
                        }
                    });
                }
            },
        },
        computed: {
             getInfoUser(){
                 return this.$store.state.profile.userInfo[0]
             }
        },
    }
</script>
<style scoped>

</style>
