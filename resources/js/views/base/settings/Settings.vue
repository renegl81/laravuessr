<template>
	<div>
        <page-title-bar></page-title-bar>
        <app-section-loader :status="loader"></app-section-loader>

        <v-container fluid class="grid-list-xl pt-0 mt-n3" v-if="$Can('Editar Configuraciones')">
            <v-tabs fixed-tabs icons-and-text>
                <!-- <v-tab>
                    {{$t('message.general')}}
                    <v-icon>mdi-airplay</v-icon>
                </v-tab> -->
                <v-tab>
                    {{$t('message.advanced')}}
                    <v-icon>mdi-application</v-icon>
                </v-tab>
                <!-- <v-tab-item>
                    <vue-perfect-scrollbar class="customizer-scroll-area" :settings="settings">
                        <div class="inner-toolbar">
                            <theme-provider></theme-provider>
                            <sidebar-filters-provider></sidebar-filters-provider>
                            <header-filters-provider v-if="isHeaderFilterAvaiable()"></header-filters-provider>

                            <v-list class="mb-5 theme-layouts">
                              <v-list-item >
                                <v-list-item-content class="py-0">
                                  <h5 class="text-sm-center mb-4">{{$t('message.routerAnimation')}}</h5>
                                  <v-select outlined :items="routerAnimations" label="Select " :value="selectedRouterAnimation" @change="changeRouterAnimation($event)"></v-select>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list>
                        </div>
                    </vue-perfect-scrollbar>
                </v-tab-item> -->
                <v-tab-item>
                    <vue-perfect-scrollbar class="customizer-scroll-area" :settings="settings">
                        <div class="inner-toolbar sidebar-overlay-color">

                          <v-list class="mb-5 theme-layouts">
                            <v-list-item >
                              <v-list-item-content class="py-0">
                                <h5 class="text-sm-center mb-4">{{$t('message.pagefavicon')}}</h5>
                                <v-row justify="center">
                                  <v-col v-if="faviconPreview" cols="3" class="text-center">
                                    <a href="javascript:void(0);">
                                        <div class="user-image text-center mb-4" @click="(faviconPreview=null); (faviconFile=null);">
                                            <img :src="faviconPreview" class="rounded-circle" width="60" height="50"/>
                                        </div>
                                    </a>
                                  </v-col>
                                  <v-col v-else cols="8" class="text-center">
                                    <v-file-input ref="faviconUpload" :label="$t('message.uploadfavico')" filled prepend-icon="mdi-camera" accept="image/png" show-size v-model="faviconFile" @change="uploadFaviconImage($event)"></v-file-input>
                                  </v-col>
                                  <v-col cols="2" align-self="center">
                                    <v-btn v-if="faviconFile != null" color="primary" @click="changeFavicon()">{{$t('message.save')}}</v-btn>
                                  </v-col>
                                </v-row>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>

                          <v-list class="mb-5 theme-layouts">
                            <v-list-item >
                              <v-list-item-content class="py-0">
                                <h5 class="text-sm-center mb-4">{{$t('message.pagelogo')}}</h5>
                                <v-row justify="center">
                                  <v-col v-if="logoPreview" cols="3" class="text-center">
                                    <a href="javascript:void(0);">
                                        <div class="user-image text-center mb-4" @click="(logoPreview=null); (logoFile=null);">
                                            <img :src="logoPreview" class="rounded-circle" width="100" height="100"/>
                                        </div>
                                    </a>
                                  </v-col>
                                  <v-col v-else cols="8" class="text-center">
                                    <v-file-input ref="logoUpload" :label="$t('message.uploadlogo')" filled prepend-icon="mdi-camera" accept="image/png" show-size v-model="logoFile" @change="uploadLogoImage($event)"></v-file-input>
                                  </v-col>
                                  <v-col cols="2" align-self="center">
                                    <v-btn v-if="logoFile != null" color="primary" @click="changeLogo()">{{$t('message.save')}}</v-btn>
                                  </v-col>
                                </v-row>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>

                          <v-list class="mb-5 theme-layouts">
                            <!-- <v-list-item >
                                <v-list-item-content class="py-0">
                                    <v-checkbox :label="$t('message.darkMode')" :input-value="darkTheme" color="primary" @change="emitDarkMode($event)"></v-checkbox>
                                </v-list-item-content>
                            </v-list-item> -->
                            <v-list-item v-if="isSidebarAvailable()">
                                <v-list-item-content class="py-0">
                                    <v-checkbox :label="$t('message.collapseSidebar')" color="primary" @change="emitCollapseSidebar" :input-value="collapseSidebar"></v-checkbox>
                                </v-list-item-content>
                            </v-list-item>
                            <!-- <v-list-item>
                                <v-list-item-content class="py-0">
                                    <v-checkbox :label="$t('message.rtlLayout')" color="primary" @change="emitRtlLayout($event)" :input-value="rtlLayout"></v-checkbox>
                                </v-list-item-content>
                            </v-list-item> -->
                            <v-list-item v-if="isSidebarAvailable()">
                                <v-list-item-content class="py-0">
                                    <v-checkbox :label="$t('message.backgroundImage')" color="primary" @change="emitEnableBackgroundImage" :input-value="backgroundImage"></v-checkbox>
                                </v-list-item-content>
                            </v-list-item>
                          </v-list>
                          <div class="sidebar-images" v-if="backgroundImage">
                              <div class="d-inline-block mx-1 mb-2" v-for="backgroundImage in sidebarBackgroundImages" :key="backgroundImage.id">
                                  <a href="javascript:void(0)" class="img-holder" :class="{'active' : selectedSidebarBgImage.id === backgroundImage.id}">
                                      <img :src="backgroundImage.url" height="200" width="75" @click="changeBackgroundImage(backgroundImage)" alt="dynamic sidebar images" class="img-responsive">
                                  </a>
                              </div>
                          </div>

                          <!-- <v-list class="mb-5 theme-layouts">
                            <v-list-item >
                                <v-list-item-content class="py-0">
                                  <h5 class="text-sm-center mb-4">Tipo de Menú</h5>
                                  <v-select outlined :items="sidebarTypes" label="Select " :value="selectedSidebarType" @change="changeMenuSidebarType($event)" disabled></v-select>
                                </v-list-item-content>
                            </v-list-item>
                          </v-list> -->
                        </div>
                    </vue-perfect-scrollbar>
                </v-tab-item>
            </v-tabs>
        </v-container>
        <v-container fluid class="grid-list-xl pt-0 mt-n3" v-else>
            <center><span>{{$t('message.Youdonothavethenecessarypermissionstoviewthislist')}}.</span></center>
        </v-container>
	</div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { getCurrentAppLayout } from "Helpers/helpers";
import ThemeProvider from "../../../components/Customizer/ThemeProvider";
import HeaderFiltersProvider from "../../../components/Customizer/HeaderFiltersProvider";
import SidebarFiltersProvider from "../../../components/Customizer/SidebarFiltersProvider";

export default {
  components: {
    ThemeProvider,
    HeaderFiltersProvider,
    SidebarFiltersProvider,
  },
  data() {
    return {
        loader: true,

        settings: {
            maxScrollbarLength: 160
        },

        logoPreview: null,
        logoFile: null,

        faviconPreview: null,
        faviconFile: null,
    };
  },
  mounted() {
      this.loader = false;
  },
  methods: {
    // dark mode handlerleft="ifRtlLayout" :right="!ifRtlLayout"
    emitDarkMode(e) {
      this.$vuetify.theme.dark = e;
      this.$store.dispatch("settings/darkThemeMode");
    },
    // collapse sidebar handler
    emitCollapseSidebar() {
      this.$store.dispatch("settings/collapseSidebar");
    },
    // enable background image handler
    emitEnableBackgroundImage() {
      this.$store.dispatch("settings/backgroundImage");
    },
    // change BackgroundImage customizer
    changeBackgroundImage(sidebarImage) {
      this.$store.dispatch("settings/changeBackgroundImage", sidebarImage);
    },
    // RTL handler
    emitRtlLayout(e) {
      this.$vuetify.rtl = e;
      this.$store.dispatch("settings/rtlLayout");
    },
    // router animation handler
    changeRouterAnimation(value) {
      this.$store.dispatch("settings/changeRouterAnimation", value);
    },
    changeMenuSidebarType(value) {
      this.$store.dispatch("settings/changeMenuSidebar", value);
    },
    uploadFaviconImage(event) {
      if (event == null)
      { this.faviconPreview=null; this.faviconFile=null; return; }

      let reader = new FileReader();

      reader.onload = () => {
        this.faviconPreview = reader.result
      }
      reader.readAsDataURL(this.faviconFile)
    },
    changeFavicon() {
      let formData = new FormData();
      formData.append('key', 2);
      formData.append('payload', this.faviconFile);

      this.$store.dispatch("settings/changeFavicon", formData).then(response => {
          // this.$nextTick(function() { this.$router.go(0); });
      });
    },
    uploadLogoImage(event) {
      if (event == null)
      { this.logoPreview=null; this.logoFile=null; return; }

      let reader = new FileReader();

      reader.onload = () => {
        this.logoPreview = reader.result
      }
      reader.readAsDataURL(this.logoFile)
    },
    changeLogo() {
      let formData = new FormData();
      formData.append('key', 3);
      formData.append('payload', this.logoFile);

      this.$store.dispatch("settings/changeLogo", formData).then(response => {
          // this.$nextTick(function() { this.$router.go(0); });
      });
    },
    isHeaderFilterAvaiable() {
      let layout = getCurrentAppLayout(this.$router);
      if (layout === "boxed" || layout === "boxed-v2") {
        return false;
      }
      return true;
    },
    isSidebarAvailable() {
      let layout = getCurrentAppLayout(this.$router);
      if (layout === "boxed" || layout === "horizontal" || layout === "boxed-v2") {
        return false;
      }
      return true;
    },
  },
  computed: {
    ...mapGetters({
      selectedSidebarType: 'settings/selectedSidebarType',
      darkTheme: 'settings/darkTheme',
      collapseSidebar: 'settings/collapseSidebar',
      boxLayout: 'settings/boxLayout',
      rtlLayout: 'settings/rtlLayout',
      backgroundImage: 'settings/backgroundImage',
      sidebarBackgroundImages: 'settings/sidebarBackgroundImages',
      selectedSidebarBgImage: 'settings/selectedSidebarBgImage',
      sidebarFilters: 'settings/sidebarFilters',
      sidebarSelectedFilter: 'settings/sidebarSelectedFilter',
      selectedRouterAnimation: 'settings/selectedRouterAnimation',
      routerAnimations: 'settings/routerAnimations',
      sidebarTypes: 'settings/sidebarTypes',
    }),
  }
};
</script>

<style scoped>
  .customizer-scroll-area {
      position: relative;
      height: 80vh;
  }
</style>
