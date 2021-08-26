<template>
    <div>
        <page-title-bar/>
        <app-section-loader :status="loader"></app-section-loader>
        <v-container fluid class="grid-list-xl pt-0 mt-n3">
            <v-row>
                <v-col cols="12" md="12" lg="12" sm="12" class="col-height-auto">
                    <div>
                        <v-row>
                            <v-col cols="12" md="5" class="col-height-auto">
                                <div class="profile-head app-card mb-30">
                                    <div class="profile-top">
                                        <!-- <img v-if="getInfoUser.port_image" :src="'/images/users/'+getInfoUser.port_image" alt="profile banner" width="482,66" height="165"/> -->
                                        <img src="/static/img/profile-banner.jpg" alt="profile banner" width="482,66" height="165"/>
                                        <div class="profileInput">
                                            <label for="input_image">
                                                <i class="fas fa-camera"></i>
                                            </label>
                                            <input type="file" accept="image/*" @change="getImagen" id="input_image" style="display: none">
                                        </div>
                                    </div>
                                    <div class="profile-bottom border-bottom-light-1">
                                        <div class="user-image text-center mb-4">
                                            <div class="imgProfile">
                                                <img v-if="getInfoUser.image" :src="'/images/users/'+getInfoUser.image" class="img-responsive rounded-circle" alt="user images" width="100" height="100"/>
                                                <img v-else src="/static/avatars/user-7.jpg" class="img-responsive rounded-circle" alt="user images">
                                            </div>
                                            <div class="imgInput">
                                                <label for="input_imagen">
                                                    <i class="fas fa-camera"></i>
                                                </label>
                                                <input type="file" accept="image/*" @change="getImage" id="input_imagen" style="display: none">
                                            </div>
                                        </div>
                                        <div class="user-list-content">
                                            <div class="text-center">
                                                <h3 class="fw-bold">{{ getInfoUser.name }}</h3>
                                                <p>{{ getInfoUser.last_name }}</p>
                                                <p>{{ getInfoUser.phone }}</p>
                                                <p>{{ getInfoUser.email }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="7" class="col-height-auto">
                                <v-tabs
                                    v-model="tab"
                                    fixed-tabs
                                    icons-and-text
                                >
                                    <v-tabs-slider></v-tabs-slider>

                                    <v-tab href="#tab-1">
                                        Datos personales
                                        <v-icon>mdi-account</v-icon>
                                    </v-tab>

                                    <v-tab href="#tab-2">
                                        Cambiar contraseña
                                        <v-icon>mdi-security</v-icon>
                                    </v-tab>
                                </v-tabs>

                                <v-tabs-items v-model="tab">
                                    <v-tab-item
                                        :key="'1'"
                                        :value="'tab-1'"
                                    >
                                        <v-card flat>
                                            <v-card-text>
                                                <user-info-form/>
                                            </v-card-text>
                                        </v-card>
                                    </v-tab-item>
                                    <v-tab-item
                                        :key="'2'"
                                        :value="'tab-2'"
                                    >
                                        <v-card flat>
                                            <v-card-text>
                                                <password-user-form/>
                                            </v-card-text>
                                        </v-card>
                                    </v-tab-item>
                                </v-tabs-items>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-snackbar v-model="notification_image" color="success" :timeout="5000" :top="true" :right="true">
                ¡Se ha cambiado exitosamente la imagen de perfil!
            <v-btn color="success" text @click="notification = false">
                Cerrar
            </v-btn>
        </v-snackbar>
    </div>
</template>
<script>
    import UserInfoForm from "./UserInfoForm";
    import PasswordUserForm from "./PasswordUserForm";
    import axios from 'axios'

    export default {
        name: "Profile",
        components: {
            UserInfoForm,
            PasswordUserForm,
        },
        data() {
            return {
                tab: null,
                user: {},
                image: '',
                imagen: '',
                notification_image: false,
                loader: false

            }
        },
        mounted() {
            let user = JSON.parse(localStorage.getItem('user'))
            this.user = user
            let data = {'id': this.user.id}
            this.$store.dispatch('profile/getUser', data)
        },
        methods: {
            getImage(e){
                console.log('adios')
                let image = e.target.files[0]
                let reader = new FileReader()
                reader.readAsDataURL(image)
                reader.onload = (img) => {}
                this.image = image
                this.saveImage()
            },
            getImagen(e){
                console.log('hola')
                let imagen = e.target.files[0]
                let reader = new FileReader()
                reader.readAsDataURL(imagen)
                reader.onload = (img) => {}
                this.imagen = imagen
                this.saveImage()
            },
            saveImage(){
                this.loader = true
                let formData = new FormData()
                formData.append('id', this.user.id)
                if(this.image != null){
                    formData.append('image', this.image)
                }else{
                    formData.append('image', 0)
                }
                formData.append('imagen', this.imagen)
                axios.post('/api/profile/saveImage', formData)
                .then(res => {
                    if(res.data.transaction.status == true){
                        this.notification_image = true
                        this.loader = false
                        let data = {'id': this.user.id}
                        this.$store.dispatch('profile/getUser', data)
                        this.image = ''
                        this.imagen = ''
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
        },
        computed: {
             getInfoUser(){
                 return this.$store.state.profile.userInfo[0]
             }
        },
    }
</script>
<style>
    .profile-top img {
  filter: blur(0);
  transition: all .45s ease;
}

.profile-top img:hover {
  filter: blur(5px);
}

.profile-top .profileInput {
  color: #fff;
  position: absolute;
  top: 8%;
  font-size: 50px;
  left: 44%;
  opacity: 0;
}

.profile-top:hover > .profileInput {
  opacity: 1
}

.user-image .imgProfile {
  filter: blur(0);
  transition: all .45s ease;
}

.user-image:hover > .imgProfile {
  filter: blur(5px);
}

.user-image .imgInput {
    color: #fff;
    position: absolute;
    top: 34%;
    font-size: 50px;
    left: 44%;
    opacity: 0;
}

.user-image:hover .imgInput {
  opacity: 1;
}

</style>
