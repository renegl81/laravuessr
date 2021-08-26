<template>
    <ValidationObserver ref="observer" v-slot="{ validate, reset }">
         <app-section-loader :status="loader"/>
        <form>
            <ValidationProvider v-slot="{ errors }" name="old-password" rules="required|min:6|max:25">
                <v-text-field
                    v-model="oldPassword"
                    :counter="25"
                    :error-messages="errors"
                    :label="$t('message.currentPassword')"
                    required
                    :type="'password'"
                />    
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="new-password" rules="required|min:6|max:25">
                <v-text-field
                    v-model="newPassword"
                    :counter="25"
                    :error-messages="errors"
                    :label="$t('message.newPassword')"
                    required
                    :type="'password'"
                />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="repeat-new-password" rules="required|min:6|max:25">
                <v-text-field
                    v-model="repeatNewPassword"
                    :error-messages="errors"
                    :label="$t('message.repeatNewPassword')"
                    required
                    :type="'password'"
                />
            </ValidationProvider>
            <v-btn class="mr-4 primary" @click="savePassword">{{$t('message.save')}}</v-btn>
        </form>
        <!-- notificacion de guardado exitoso -->
        <v-snackbar v-model="notification" :color="getColor" :timeout="5000" :top="true" :right="true">
            {{getMessage}}
            <v-btn color="gray" text @click="notification = false">
                Cerrar
            </v-btn>
        </v-snackbar>
        <!-- Notificacion de contraseñas -->
        <v-snackbar v-model="old_password_error" color="error" :timeout="5000" :top="true" :right="true">
            ¡No has introducido la contraseña!
            <v-btn color="error" text @click="notification = false">
                Cerrar
            </v-btn>
        </v-snackbar>
        <v-snackbar v-model="newPassword_error" color="error" :timeout="5000" :top="true" :right="true">
            ¡Introducir una contraseña nueva!
            <v-btn color="error" text @click="notification = false">
                Cerrar
            </v-btn>
        </v-snackbar>
        <v-snackbar v-model="repeatNewPassword_error" color="error" :timeout="5000" :top="true" :right="true">
            ¡Repita tu  contraseña nueva!
            <v-btn color="error" text @click="notification = false">
                Cerrar
            </v-btn>
        </v-snackbar>
        <v-snackbar v-model="noNewPassword_error" color="error" :timeout="5000" :top="true" :right="true">
            ¡Sus contraseñas no coinciden!
            <v-btn color="error" text @click="notification = false">
                Cerrar
            </v-btn>
        </v-snackbar>
    </ValidationObserver>
</template>

<script>
    import { required, max, min } from 'vee-validate/dist/rules'
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
    import axios from 'axios'

    setInteractionMode('eager')

    extend('required', {
        ...required,
        message: '{_field_} can not be empty',
    })

    extend('max', {
        ...max,
        message: '{_field_} may not be greater than {length} characters',
    })

    extend('min', {
        ...min,
        message: '{_field_} may not be less than {length} characters',
    })

    export default {
        name: "PasswordUserForm",
        components: {
            ValidationProvider,
            ValidationObserver,
        },
        data: () => ({
            oldPassword: '',
            newPassword: '',
            repeatNewPassword: '',
            user: {},
            notification: false,
            old_password_error: false,
            newPassword_error: false,
            repeatNewPassword_error: false,
            noNewPassword_error: false,
            loader: false


        }),
        mounted() {
            // aqui convertimos el item user almacenado en el localStorage en un JSON 
            let user = JSON.parse(localStorage.getItem('user'))
            // asignamos la conversión al objeto user
            this.user = user
        },
        methods: {
            submit () {
                this.$refs.observer.validate()
            },
            clear () {
                this.oldPassword = '';
                this.newPassword = '';
                this.repeatNewPassword = '';
                this.$refs.observer.reset()
            },

            /**esta funicon sirve para actualizar la contraseña existente por una nueva */
            savePassword(){
                if(!this.oldPassword){
                    this.old_password_error = true
                }else if(!this.newPassword){
                    this.newPassword_error = true
                }else if(!this.repeatNewPassword){
                    this.repeatNewPassword_error = true
                }else if(this.newPassword != this.repeatNewPassword){
                    this.noNewPassword_error = true
                }else{
                    this.$refs.observer.validate().then((res) =>{
                        if(res){
                            this.loader = true;
                            let data = {"id": this.user.id, "old_password": this.oldPassword, "new_password": this.newPassword, "repeat_password": this.repeatNewPassword};
                            this.$store.dispatch('profile/savePassword', data).then(()=>{
                                this.notification = true;
                                this.loader = false;
                                this.clear()
                            });
                        }
                    });
                }
            }
        },

        computed: {
            getMessage(){
                return this.$store.state.profile.message
            },

            getColor(){
                return this.$store.state.profile.color
            },

        },
    }
</script>
<style scoped>

</style>
