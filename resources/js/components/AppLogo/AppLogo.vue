<template>
    <div class="site-logo text-center">
        <router-link to="/">
            <img :src="logo" class="app-logo-text" v-if="logo" alt="" width="165px" height="50px">
            <span class="app-logo-text" v-if="!logo">LARS-BASE</span>
            <!--<img :src="darkLogo" alt="site logo" width="100" height="30" v-if="sidebarSelectedFilter.class == 'sidebar-overlay-light'">
            <img :src="appLogo" alt="site logo" width="100" height="30" v-else> -->
        </router-link>
    </div>
</template>

<script>
import AppConfig from "Constants/AppConfig";
import { mapGetters } from "vuex";

export default {
   computed: {
        ...mapGetters({
            logo: 'settings/logo',
            sidebarSelectedFilter: 'settings/sidebarSelectedFilter',
        }),
   },
   data() {
      return {
          appLogo: AppConfig.appLogo,
          darkLogo: AppConfig.darkLogo
      }
   },
}
</script>

<style>
    .app-logo-text{
        font-weight: 700;
        margin-left: 25px;
        font-size: 25px;
    }
</style>
