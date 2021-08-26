<template>
	<div class="theme-color">
		<h5 class="text-sm-center mb-4">{{$t('message.selectTheme')}}</h5>
		<v-list>
			<v-list-item :ripple="false" v-for="theme in themes" :key="theme.id" @click="changeTheme(theme)"
				:class="{'active-theme': selectedTheme.id === theme.id}">
				<span :class="theme.bgColor"></span>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		mounted() {
			//Actualizamos Si el Modo Oscuro esta activado o no
			this.$vuetify.theme.dark = this.darkTheme;
			//Actualizamos el Tema del sistema con el tema almacenado en los parámetros (Vuex settings.state.selectedTheme)
			this.$vuetify.theme.themes.light = this.selectedTheme.theme;
			this.$vuetify.theme.themes.dark = this.selectedTheme.theme;
		},
		computed: {
			...mapGetters({
				darkTheme: 'settings/darkTheme',
				themes: 'settings/themes',
				selectedTheme: 'settings/selectedTheme',
			}),
		},
		methods: {
			changeTheme(theme) {
				this.$store.dispatch("settings/changeTheme", theme);
				this.$vuetify.theme.themes.light = theme.theme;
				this.$vuetify.theme.themes.dark = theme.theme;						
			}
		}
	};
</script>