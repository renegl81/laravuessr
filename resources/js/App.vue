<template>
  <v-app id="inspire" :class="[{'box-layout': boxLayout, 'collapse-sidebar': collapseSidebar, 'rtl-layout': rtlLayout}]">
      <router-view :auth="auth" :authenticated="authenticated"></router-view>
      <notifications group="loggedIn" position="top right" animation-type="velocity"/>
      <v-snackbar v-model="notificationData.activator" :color="notificationData.color" :timeout="10000" :top="true" :right="true">
          {{notificationData.message}}
          <v-icon class="ml-2" small @click="notificationData.activator = false">mdi-close</v-icon>
      </v-snackbar>
  </v-app>

</template>

<script>

import { mapGetters, } from "vuex";

import AuthService from "./auth/AuthService";


const auth = new AuthService();
// const { login, logout, authenticated, authNotifier } = auth;

const { authenticated, authNotifier } = auth;

export default {
  data() {
    authNotifier.on("authChange", authState => {
      this.authenticated = authState.authenticated;
    });
    return {
      auth,
      authenticated,
      animation: {
        enter: {
          opacity: [1, 0],
          translateX: [0, -300],
          scale: [1, 0.2]
        },
        leave: {
          opacity: 0,
          height: 0
        }
     },
     notificationData: { color: '', message: '',	activator: false, },
    };
  },

  created() {
     this.checkSideBarMenuType();

    if (localStorage.getItem("access_token") !== null) {  //Si existe un token definido, es porque un usuario se encuentra autenticado
      this.$store.dispatch("auth/authenticatedUser");
      //Refresco la información del usuario autenticado }
      this.$store.dispatch('settings/getParametersList'); //Consultando los Parámetros del Sistema
     }
  },

  mounted() {
    // This if block is for IE 11
    if (!Object.entries)
      Object.entries = function( obj ){
        let ownProps = Object.keys( obj ),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
        while (i--)
          resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
      };

    if (this.selectedLocale.locale === "he" || this.selectedLocale.locale === "ar") {
      this.$store.dispatch("settings/rtlLayout");
    }
  },

  computed: {
    ...mapGetters({
      collapseSidebar: 'settings/collapseSidebar',
      boxLayout: 'settings/boxLayout',
      rtlLayout: 'settings/rtlLayout',
      selectedLocale: 'settings/selectedLocale',
    }),
  },
  methods: {

    checkSideBarMenuType() {
      let route = this.$router.history.current.path;
      if (route === '/horizontal'){  //Ruta Home sin mayor detalle
       this.$router.push('/app/horizontal');//Me aseguro de que entre en el tipo de menú correcto
      }

      if (route.includes('default')) {
        route.replace('default', 'horizontal');
        this.$router.push(route);
      }
    },
  },
};
</script>

<style>
.v-navigation-drawer__content {
    padding-top: 200px!important;
}
</style>
