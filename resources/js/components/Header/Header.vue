<!-- Header Structure -->
<template>
	<div>
		<v-navigation-drawer
			v-if="!horizontal"
			app
			fixed
			v-model="drawer"
			:mini-variant.sync="sidebarState"
			mini-variant-width="70"
			:width="250"
			class="Vuely-sidebar"
			:style="{backgroundImage: 'url(' + selectedSidebarBgImage.url + ')'}"
			:class="{'background-none': !backgroundImage}"
			:right="rtlLayout"
		>
			<app-sidebar></app-sidebar>
		</v-navigation-drawer>
		<v-app-bar class="Vuely-toolbar" app color="#FFFFFF" fixed>
			<div class="d-custom-flex align-items-center navbar-left">
				<div v-if="!horizontal">
					<v-app-bar-nav-icon  @click.stop="drawer = !drawer" class="v-step-0"></v-app-bar-nav-icon>
				</div>
				<div class="site-logo-wrap d-custom-flex ml-0 align-items-center" v-else>
					<router-link :to="`/${getCurrentAppLayoutHandler() + '/home'}`" class="site-logo-img">
						<img :src="logo" alt="site logo" width="100" height="auto"> <span v-if="!logo">LARS</span>
					</router-link>
				</div>
			</div>
			<div class="navbar-right">
				<!--<v-btn icon large @click="toggleFullScreen" class="full-screen ma-0">
					<v-icon color="#333333">fullscreen</v-icon>
				</v-btn>-->
				<language-provider></language-provider>

				<user></user>
			</div>
		</v-app-bar>
		<mobile-search-form></mobile-search-form>
	</div>
</template>

<script>
import Sidebar from "../Sidebar/Sidebar.vue";
import ChatSidebar from "../ChatSidebar/ChatSidebar.vue";
import screenfull from "screenfull";
import LanguageProvider from "./LanguageProvider";
import Notifications from "./Notifications";
import User from "./User";
import Cart from "./Cart";
import QuickLinks from "./QuickLinks";
import MobileSearchForm from "./MobileSearchForm";
import {

    getCurrentAppLayout } from "Helpers/helpers";
import { mapGetters } from "vuex";

export default {
	props: {
		horizontal: {
			default: false,
			type: Boolean
		}
	},
	data() {
		return {
			collapsed: false, // collapse sidebar
			drawer: null, // sidebar drawer default true
			chatSidebar: false, // chat component right sidebar
			sidebarImages: "", // sidebar background images
			enableDefaultSidebar: false,
		};
	},
	created() {

	},
	computed: {
		...mapGetters({
			logo: 'settings/logo',
			collapseSidebar: 'settings/collapseSidebar',
			rtlLayout: 'settings/rtlLayout',
			backgroundImage: 'settings/backgroundImage',
			selectedSidebarBgImage: 'settings/selectedSidebarBgImage',
			activeHeaderFilter: 'settings/activeHeaderFilter',

		}),

		sidebarState: {
		get: function() {
		return this.collapseSidebar;
		},
		set: function() {
		return this.collapseSidebar;
		}
		}
	},
	methods: {
		getCurrentAppLayoutHandler() {
            return getCurrentAppLayout(this.$router);
		},

		getUserLogged(){
			if (this.$HasRole('Administrador')){
				var  data = {'userId': 'undefined','typeOfUser': 'Administrador'};
				return data;
		}
		},
		// toggle full screen method
		toggleFullScreen() {
			if (screenfull.enabled) {
			screenfull.toggle();
			}
		},
		sidebarath(link){
			this.$store.dispatch('sidebar/setActiveMenuGroup',{ pathURL: link });
			this.$router.push(this.getMenuLink(link));
		},
		getMenuLink(link) {
			return "/" + getCurrentAppLayout(this.$router) + link;
		},
		toggleSearchForm() {
			this.$store.dispatch('toggleSearchForm');
		},
	},
	components: {
		appSidebar: Sidebar,
		ChatSidebar,
		LanguageProvider,
		Notifications,
		Cart,
		QuickLinks,
		MobileSearchForm,
		User
	}
};
</script>
<style>
.search-bar {
	border: 1px solid #00455d !important;
	border-radius: 50px !important;
}
.site-logo-wrap .site-logo-img {
    padding: 0 3rem 0 3rem !important;
}
</style>
