<template>
   <v-list-item class="sidebar-profile">

		<v-list-item-avatar>
			<img :src="userData.profileImg" alt="avatar" height="40" width="40" class="img-responsive" />
		</v-list-item-avatar>

		<v-list-item-content class="ml-3">
			<v-list-item-title><span>{{ userData.username }}</span></v-list-item-title>
		</v-list-item-content>

		<v-menu bottom offset-y	left content-class="userblock-dropdown" nudge-top="-10"	nudge-right="0" transition="slide-y-transition">
			<template v-slot:activator="{ on }">
				<v-btn dark icon v-on="on" class="ma-0">
					<v-icon>more_vert</v-icon>
				</v-btn>
			</template>

			<div class="dropdown-content">
				<div class="dropdown-top white--text primary">
					<span class="white--text fs-14 fw-bold d-block">{{ userData.username }}</span>
					<span class="d-block fs-12 fw-normal">{{ userData.email }}</span>
				</div>

				<v-list class="dropdown-list">
					<template v-for="userLink in userLinks">
						<template v-if="userLink.id === 4">
							<v-list-item @click="logoutUser" :key="userLink.id">
								<i :class="userLink.icon"></i>
								<span>{{$t(userLink.title)}}</span>
							</v-list-item>
						</template>
					</template>
				</v-list>
			</div>
		</v-menu>

   </v-list-item>
</template>

<script>
	import { mapGetters } from "vuex";
	import { getCurrentAppLayout } from "Helpers/helpers";

	export default {
		data() {
			return {
				userData: {
				email: '',
				username: '',
				profileImg: '',
				},

				userLinks: [
					{
						id: 1,
						title: 'message.userProfile',
						icon: 'ti-user mr-3 primary--text',
						path: '/profile'
					},
					{
						id: 4,
						title: 'message.logOut',
						icon: 'ti-power-off mr-3 error--text'
					},

				]
			}
		},

		mounted() {
			this.managingProfileInformation();
		},

		computed: {
			...mapGetters({
				user: 'auth/user',
			}),
		},

		methods: {
			getMenuLink(path) {
				return admingetCurrentAppLayout(this.$router) +  path;
			},

			getCurrentLinkLayout: function (path) { //Devuelve una ruta basada en el tipo de menu usado (default, horizontal, mini) O rutas publicas (session)
				return admingetCurrentAppLayout(this.$router) + path;
			},

			managingProfileInformation() { //Administración de Datos de la información del perfill (Ya sea un Usuario o una Empresa)
				let lastname = (this.user.last_name != ('' || null)) ? (' ' + this.user.last_name) : ('');

				this.userData = {
				email:      this.user.email,

				username:   this.user.name + lastname,

				profileImg: ( this.$HasRole('Empresa') ) ? (this.user.images[0].source+this.user.images[0].name) : ('/images/users/'+this.user.image),
				};
			},

			logoutUser() { //Cerrar Sesión del Usuario
				var currentToken = localStorage.getItem('device_token');
				var user = JSON.parse(localStorage.getItem('user'));
				var userId = user.id;
				var data = {
					userId:  userId,
					token: currentToken
				};

				this.$store.dispatch('notifications/deleteToken', data).then(response => {
				if (response.data.message == 'success'){
					localStorage.removeItem('device_token');
					localStorage.setItem('sentToServer', 0);
					console.log('Token Eliminado correctamente');
				}
				else{
					console.log('Error al borrar el Token',response.data.message);
				}
				});
				this.$store.dispatch('auth/logoutUser').then(response => {
				// console.log("Cierre de Sesión Success =", response)
				}).catch(response => {
				// console.log("Cierre de Sesión Error =", response)
				});
			},

		},
	};
</script>
