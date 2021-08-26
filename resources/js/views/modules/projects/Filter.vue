<template>
  <v-app>
    <OptionsFilter></OptionsFilter>
      <div style="overflow: hidden;">
    <v-content class="" :class="!isMobile ? '' : ''">
      <v-row align="center p-content">
        <v-col style="margin-bottom: 50px" xl="4" lg="4" md="4" sm="12" cols="xs-12" v-for="(project, key) in projects" :key="key">
          <template>
           <v-hover>
            <template v-slot:default="{ hover }">
                <v-card width="100%" max-height="300px" flat tile style="z-index: 1;">
                <v-img class="white--text align-end" :src="project.images[0].url_image"></v-img>
                    <v-card-subtitle class="pb-0 info-image ml-0 pl-0 pt-2">
                      <h1 class="mb-0">{{project.name}}</h1>
                      <template v-if="project.country || project.city"><template v-if="project.city">{{project.city}},</template>
                          <template v-if="project.country"> {{project.country}}</template>
                      </template>
                   </v-card-subtitle>
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="#FFFFFF80"
                    >
                      <a @click="show(project.slug)"><v-img src="/thumb_arrow.png"></v-img></a>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
            </template>
          </v-hover>
          </template>
        </v-col>
      </v-row>
      <infinite-loading @infinite="infiniteHandler">
        <div slot="no-results">
          <p class="message">{{$t('message.noProjects')}}</p>
        </div>
        <div slot="no-more">
          <p class="message"></p>
        </div>
      </infinite-loading>
    </v-content>
      </div>
    <app-section-loader :status="loader"></app-section-loader>
  </v-app>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import OptionsFilter from "./OptionsFilter";
import axios from 'axios';
export default {
    name: "Filter",
    components: {
      OptionsFilter,
      InfiniteLoading,
    },
    data() {
        return {
          page: 1,
          loader: true,
          language: 'es',
          drawer: true,
          projects:  [],
          typeProject: null,
          overlay: false,
          isMobile: false,
          idSubtype: null,
          idTag: null,
          typeFilter: null
        }
    },

    created() {
        this.language = this.$getLanguage();
        this.typeProject = this.$getTypeProject(this.language);
        this.typeFilter = this.$getTypeFilter();
        if( this.typeFilter && this.typeFilter === 'by_tag'){
          let segments = this.$route.fullPath.split('/');
          this.idTag = segments[segments.length-1];
        }
        if(this.typeFilter && this.typeFilter === 'by_subtype'){
            let segments = this.$route.fullPath.split('/');
            this.idSubtype = segments[segments.length-1];
        }
        this.language = this.$getLanguage();
        this.changeLanguage(this.language);
        this.isMobile = this.$isMobile();
    },

    mounted() {
        setTimeout(() => (this.loader = false), 1200);
    },
    computed: {
        typeFilterTrans(){
            if(this.typeFilter === 'by_subtype' || this.typeFilter === 'par_subtype' || this.typeFilter === 'por_subtipo'){
                return 'by_subtype';
            }

            if(this.typeFilter === 'by_tag' || this.typeFilter === 'par_ta' || this.typeFilter === 'por_etiqueta'){
                return 'by_tag';
            }
            return 'all';
        }
    },
    methods: {
      show(slugProject){
        this.$router.push({ name: 'ViewProject', params: { slugProject: slugProject, typeProject: this.typeProject, language: this.language }});
      },

      changeLanguage(language) {
        this.$i18n.locale = language;
      },

      infiniteHandler($state) {
        switch (this.typeFilterTrans) {
          case 'all':
            let url = '/app/api/projects/get-info-to-filter/'+this.typeProject+'?page='+this.page;
            axios.get(url).then(response => {
                if (response.data.projects && response.data.projects.data.length > 0) {
                this.page++;
                this.projects = this.projects.concat(response.data.projects.data);
                $state.loaded();
              } else {
                this.projects = this.projects.concat([]);
                $state.complete();

              }
            }).catch(() => {
                this.projects = [];
            });
            break;
          case 'by_subtype':
            let urlBySubtype = '/app/api/projects/get-projects-by-subtype/'+this.idSubtype+'?page='+this.page;
            axios.get(urlBySubtype).then(response => {
                if (response.data.projects && response.data.projects.data.length > 0) {
                this.page++;
                this.projects = this.projects.concat(response.data.projects.data);
                $state.loaded();
              } else {
                this.projects = this.projects.concat([]);
                $state.complete();
              }
            }).catch(() => {
                this.projects = [];
            });
            break;
          case 'by_tag':
            let urlByTag = '/app/api/projects/projects-by-tag/'+this.idTag+'/'+this.typeProject+'?page='+this.page;
            axios.get(urlByTag).then(response => {
                if (response.data.projects && response.data.projects.data.length > 0) {
                this.page++;
                this.projects = this.projects.concat(response.data.projects.data);
                $state.loaded();
              } else {
                this.projects = this.projects.concat([]);
                $state.complete();
              }
            }).catch(() => {
                this.projects = [];
            });
            break;
        }
      }
    },
}
</script>
<style scoped>
  .info-image{
    color:#000000 !important;
    position: absolute;
    left: 0px;
    text-transform: none;
    letter-spacing: 0;
    font-size: 13.6px;
    font-weight: 400;
    font-family: Dosis-Light;
  }
  .margin-class {
    margin-right: 150px !important;
  }
  h1, .h1 {
    color: #000000 !important;
    font-size: 13.6px;
    font-weight: 400;
    font-family: Dosis-Light;
  }
  .p-content {
      padding-top: 200px;
      overflow: hidden;
      max-width: 1070px;
      margin-left: auto;
      margin-right: auto;
  }
  @media(max-width: 996px){
      .p-content {
          padding-top: 100px;
          overflow: hidden;
      }
  }
</style>
