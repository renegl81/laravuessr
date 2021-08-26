<template>
  <div class="container">
    <v-app-bar color="white" app flat dense v-if="!isMobile">
      <div class="horizontal-menu">
          <wordpress-header></wordpress-header>
        <ul class="list-unstyled nav pl-0" v-if="typeProject != 'terrazas'"  style="padding-left: 100px;background-color: white;">
          <li class="nav-item" v-if="isMobile && subtypes">
            <template>
              <a href="javascript:void(0);" class="nav-link" ></a>
              <ul class="sub-menu list-unstyled">
                <template>
                    <ul class="list-unstyled sub-menu-child">
                      <li class="nav-item">
                        <a class="nav-link text-uppercase"  :href="`/app/${language}/${typeProject}`">
                            {{$t('message.all')}}
                        </a>
                      </li>
                      <template  v-for="(subtype, key) in subtypes" link>
                          <li class="nav-item" :key="key" >
                              <a class="nav-link text-uppercase"  :href="`/app/${language}/${typeProject}/${subTypeText}/${subtype.traduct}`">
                                  {{$t('message.'+subtype.traduct)}}
                              </a>
                          </li>
                      </template>
                    </ul>
                </template>
              </ul>
            </template>
          </li>
          <li class="nav-item" v-for="(category, key) in categories" :key="key">
            <template>
              <a href="javascript:void(0);" class="nav-link" >
                <span class="menu-title text-uppercase">{{$t('message.'+category.traduct)}}</span>
              </a>
              <ul class="sub-menu list-unstyled">
                <template v-if="category.subcategories.length == 1">
                    <template v-if="category.subcategories[0].tags !== null">
                        <ul class="list-unstyled sub-menu-child" >
                          <template v-for="tag in category.subcategories[0].tags">
                              <li class="nav-item" :key="tag.name">
                                <v-row>
                                  <v-col cols="4" v-if="tag.image">
                                    <img :src="'../../../'+tag.image" alt="" width="60" height="auto" class="ml-2">
                                  </v-col>
                                  <v-col :cols="tag.image ? '8' : '12'">
                                    <a :class="tag.name.length > 13 ? 'size-tag' : ''" class="nav-link text-uppercase" :href="`/app/${language}/${typeProject}/${tagText}/${tag.traduct}`">
                                        {{tag.name}}
                                    </a>
                                  </v-col>
                                </v-row>
                              </li>
                          </template>
                        </ul>
                    </template>
                </template>
                <template v-else>
                  <template v-for="subcategory in category.subcategories">
                    <li class="nav-item" :key="subcategory.name">
                      <template v-if="subcategory.tags !== null">
                          <a href="javascript:void(0);" class="nav-link text-uppercase">
                              {{ subcategory.name }}
                          </a>
                          <ul class="list-unstyled sub-menu-child">
                            <template v-for="tag in subcategory.tags">
                                <li class="nav-item" :key="tag.name">
                                  <v-row>
                                    <v-col cols="4" v-if="tag.image">
                                      <img :src="'../../../'+tag.image" alt="" width="60" height="auto" class="ml-2">
                                    </v-col>
                                    <v-col :cols="tag.image ? '8' : '12'">
                                      <a :class="tag.name.length > 13 ? 'size-tag' : ''" class="nav-link text-uppercase" :href="`/app/${language}/${typeProject}/${tagText}/${tag.traduct}`">
                                          {{tag.name}}
                                      </a>
                                    </v-col>
                                  </v-row>
                                </li>
                            </template>
                          </ul>
                      </template>
                    </li>
                  </template>
                </template>
              </ul>
            </template>
          </li>
        </ul>
        <ul class="list-unstyled nav pl-0" v-else style="padding-left: 100px;background-color: white;">
          <li class="nav-item" v-if="categories.length >= 1">
            <template>
              <a href="javascript:void(0);" class="nav-link" >
                <span class="menu-title text-uppercase">{{$t('message.'+categories[0].traduct)}}</span>
              </a>
              <ul class="sub-menu list-unstyled">
                <template v-if="categories[0].subcategories.length == 1">
                    <template v-if="categories[0].subcategories[0].tags !== null">
                        <ul class="list-unstyled sub-menu-child" >
                          <template v-for="tag in categories[0].subcategories[0].tags">
                              <li class="nav-item" :key="tag.name">
                                <v-row>
                                  <v-col cols="4" v-if="tag.image">
                                    <img :src="'../../../'+tag.image" alt="" width="60" height="auto" class="ml-2">
                                  </v-col>
                                  <v-col :cols="tag.image ? '8' : '12'">
                                    <a :class="tag.name.length > 13 ? 'size-tag' : ''" class="nav-link text-uppercase" :href="'/app/'+language+'/'+typeProject+'/'+'by-tag?idTag='+tag.id">
                                        {{tag.name}}
                                    </a>
                                  </v-col>
                                </v-row>
                              </li>
                          </template>
                        </ul>
                    </template>
                </template>
                <template v-else>
                  <template v-for="subcategory in categories[0].subcategories">
                    <li class="nav-item" :key="subcategory.name">
                      <template v-if="subcategory.tags !== null">
                          <a href="javascript:void(0);" class="nav-link text-uppercase">
                              {{ subcategory.name }}
                          </a>
                          <ul class="list-unstyled sub-menu-child">
                            <template v-for="tag in subcategory.tags">
                                <li class="nav-item" :key="tag.name">
                                  <v-row>
                                    <v-col cols="4" v-if="tag.image">
                                      <img :src="'../../../'+tag.image" alt="" width="60" height="auto" class="ml-2">
                                    </v-col>
                                    <v-col :cols="tag.image ? '8' : '12'">
                                      <a :class="tag.name.length > 13 ? 'size-tag' : ''" class="nav-link text-uppercase" :href="'/app/'+language+'/'+typeProject+'/'+'by-tag?idTag='+tag.id">
                                          {{tag.name}}
                                      </a>
                                    </v-col>
                                  </v-row>
                                </li>
                            </template>
                          </ul>
                      </template>
                    </li>
                  </template>
                </template>
              </ul>
            </template>
          </li>
        </ul>
      </div>
    </v-app-bar>
    <v-app-bar color="white" app flat dense v-else-if="isMobile">
      <div class="horizontal-menu">
        <ul class="list-unstyled nav pl-0" style="background-color: white;" v-if="typeProject != 'terrazas'">
            <wordpress-header-mobile></wordpress-header-mobile>
          <li class="nav-item" v-if="isMobile && subtypes">
            <template>
              <a href="javascript:void(0);" class="nav-link content-li" @click="toggleMenu()"></a>
              <ul class="sub-menu list-unstyled" v-if="showMenu">
                <template>
                    <ul class="list-unstyled sub-menu-child" >
                      <li class="nav-item">
                        <a class="nav-link text-uppercase" :href="`/app/${language}/${$t('message.routes_'+typeProject)}`">
                            {{$t('message.all')}}
                        </a>
                      </li>
                      <template  v-for="(subtype, key) in subtypes" link>
                          <li class="nav-item" :key="key" >
                              <a class="nav-link text-uppercase" :href="`/app/${language}/${$t('message.routes_'+typeProject)}/${subTypeText}/${$t('message.types_'+subtype.traduct)}`">
                                  {{$t('message.'+subtype.traduct)}}
                              </a>
                          </li>
                      </template>
                    </ul>
                </template>
              </ul>
            </template>
          </li>
          <li class="nav-item" v-for="(category, key) in categories" :key="key">
            <template>
              <a href="javascript:void(0);" class="nav-link content-none">
                <span class="menu-title text-uppercase">{{$t('message.'+category.traduct)}}</span>
              </a>
              <ul class="sub-menu list-unstyled"  :class="key>1 ? 'mobile-width':''">
                <template v-if="category.subcategories.length == 1">
                    <template v-if="category.subcategories[0].tags !== null">
                        <ul class="list-unstyled sub-menu-child" >
                          <template v-for="tag in category.subcategories[0].tags">
                              <li class="nav-item" :key="tag.name">
                                <v-row>
                                  <v-col cols="4" v-if="tag.image">
                                    <img :src="'../../../'+tag.image" alt="" width="60" height="auto" class="ml-2">
                                  </v-col>
                                  <v-col :cols="tag.image ? '8' : '12'">
                                    <a :class="tag.name.length > 13 ? 'size-tag' : ''" class="nav-link text-uppercase" :href="'/app/'+language+'/'+typeProject+'/'+'by-tag?idTag='+tag.id">
                                        {{tag.name}}
                                    </a>
                                  </v-col>
                                </v-row>
                              </li>
                          </template>
                        </ul>
                    </template>
                </template>
                <template v-else>
                  <template v-for="subcategory in category.subcategories">
                    <li class="nav-item" :key="subcategory.name">
                      <template v-if="subcategory.tags !== null">
                          <a href="javascript:void(0);" class="nav-link text-uppercase">
                              {{ subcategory.name }}
                          </a>
                          <ul class="list-unstyled sub-menu-child">
                            <template v-for="tag in subcategory.tags">
                                <li class="nav-item" :key="tag.name">
                                  <v-row>
                                    <v-col cols="4" v-if="tag.image">
                                      <img :src="'../../../'+tag.image" alt="" width="60" height="auto" class="ml-2">
                                    </v-col>
                                    <v-col :cols="tag.image ? '8' : '12'">
                                      <a :class="tag.name.length > 13 ? 'size-tag' : ''" class="nav-link text-uppercase" :href="'/app/'+language+'/'+typeProject+'/'+'by-tag?idTag='+tag.id">
                                          {{tag.name}}
                                      </a>
                                    </v-col>
                                  </v-row>
                                </li>
                            </template>
                          </ul>
                      </template>
                    </li>
                  </template>
                </template>
              </ul>
            </template>
          </li>
        </ul>
        <ul class="list-unstyled nav pl-0" style="background-color: white;" v-else>
            <wordpress-header-mobile></wordpress-header-mobile>
          <li class="nav-item" v-if="categories.length >= 1">
            <template>
              <a href="javascript:void(0);" class="nav-link" >
                <span class="menu-title text-uppercase">{{$t('message.'+categories[0].traduct)}}</span>
              </a>
              <ul class="sub-menu list-unstyled">
                <template v-if="categories[0].subcategories.length == 1">
                    <template v-if="categories[0].subcategories[0].tags !== null">
                        <ul class="list-unstyled sub-menu-child" >
                          <template v-for="tag in categories[0].subcategories[0].tags">
                              <li class="nav-item" :key="tag.name">
                                <v-row>
                                  <v-col cols="4" v-if="tag.image">
                                    <img :src="'../../../'+tag.image" alt="" width="60" height="auto" class="ml-2">
                                  </v-col>
                                  <v-col :cols="tag.image ? '8' : '12'">
                                    <a :class="tag.name.length > 13 ? 'size-tag' : ''" class="nav-link text-uppercase" :href="`/app/${language}/${typeProject}/${tagText}/${tag.traduct}`">
                                        {{tag.name}}
                                    </a>
                                  </v-col>
                                </v-row>
                              </li>
                          </template>
                        </ul>
                    </template>
                </template>
                <template v-else>
                  <template v-for="subcategory in categories[0].subcategories">
                    <li class="nav-item" :key="subcategory.name">
                      <template v-if="subcategory.tags !== null">
                          <a href="javascript:void(0);" class="nav-link text-uppercase">
                              {{ subcategory.name }}
                          </a>
                          <ul class="list-unstyled sub-menu-child" >
                            <template v-for="tag in subcategory.tags">
                                <li class="nav-item" :key="tag.name">
                                  <v-row>
                                    <v-col cols="4" v-if="tag.image">
                                      <img :src="'../../../'+tag.image" alt="" width="60" height="auto" class="ml-2">
                                    </v-col>
                                    <v-col :cols="tag.image ? '8' : '12'">
                                      <a :class="tag.name.length > 13 ? 'size-tag' : ''" class="nav-link text-uppercase" :href="`/app/${language}/${typeProject}/${tagText}/${tag.traduct}`">
                                          {{tag.name}}
                                      </a>
                                    </v-col>
                                  </v-row>
                                </li>
                            </template>
                          </ul>
                      </template>
                    </li>
                  </template>
                </template>
              </ul>
            </template>
          </li>
        </ul>
      </div>
    </v-app-bar>
    <v-navigation-drawer :width="drawerWidth" v-model="drawer" floating app v-if="!isMobile">
          <v-list v-if="typeText != 'terrazas'" dense class="d-flex flex-column mt-10 pt-10">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                      <a class="options-sidebar text-uppercase font-weight-bold" :href="`/app/${language}/${$t('message.routes_'+typeText)}`">
                        {{$t('message.all')}}
                      </a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item v-for="(subtype, key) in subtypes" :key="key" link>
                <v-list-item-content>
                    <v-list-item-title>
                      <a v-if="typeText === 'terrazas' && subtype.name === 'Terraza'" class="options-sidebar text-uppercase font-weight-bold" :href="`/${language}/${$t('message.routes_piscinas')}/${subTypeText}/${$t('message.types_'+subtype.traduct)}`">
                          {{$t('message.'+subtype.traduct)}}
                      </a>
                        <a v-else class="options-sidebar text-uppercase font-weight-bold" :href="`/app/${language}/${$t('message.routes_'+typeText)}/${subTypeText}/${$t('message.types_'+subtype.traduct)}`">
                            {{$t('message.'+subtype.traduct)}}
                        </a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import WordpressHeader from "../../../components/WordPressHeader/WordPressHeader";
import WordpressHeaderMobile from "../../../components/WordpressHeaderMobile";
export default {
    name: "OptionsFilter",
    components: {WordpressHeaderMobile, WordpressHeader},
    data() {
        return {
          drawer: true,
          subtypes: [],
          categories:  [],
          typeProject: null,
          language: null,
          isMobile: false,
          showMenu: false,
        }
    },

    created() {
        this.language = this.$getLanguage();
        this.typeProject = this.$getTypeProject(this.language);
        this.getInfoToOptionsFilter(this.typeProject, this.language);
        this.isMobile = this.$isMobile();
    },

    mounted() {
        setTimeout(() => (this.loader = false), 1200);
    },
    computed: {
        drawerWidth(){
            let width = window.screen.width;
            if (width > 1365){
                return width *11/100;
            }

            return width *9/100;
        },
        subTypeText(){
            if (this.language === 'fr'){
                return 'par_type';
            }
            if (this.language === 'en'){
                return 'by_type';
            }

            return 'por_tipo';
        },
        tagText(){
            if (this.language === 'fr'){
                return 'par_ta';
            }
            if (this.language === 'en'){
                return 'by_tag';
            }

            return 'por_etiqueta';
        },
        typeText(){
            if (this.typeProject === 'terraces' || this.typeProject === 'terrasses' || this.typeProject === 'terrazas'){
                return 'terrazas';
            }
            if (this.typeProject === 'swimming-pools' || this.typeProject === 'piscines' || this.typeProject === 'piscinas'){
                return 'piscinas';
            }
            if (this.typeProject === 'industrial-and-kitchen' || this.typeProject === 'industrial-et-cuisine' || this.typeProject === 'industrial-y-cocina'){
                return 'industriel';
            }

            return null;
        }
    },
    methods: {
        getInfoToOptionsFilter(typeProject){
          this.$store.dispatch('projects/getInfoToOptionsFilter', typeProject).then(response => {
            this.subtypes = response.data.subtypes;
            this.categories = response.data.categories;
          });
        },
        toggleMenu(){
            this.showMenu = !this.showMenu;
        }
    },
}
</script>
<style scoped>
  .horizontal-menu{
    box-shadow: none !important;
    font-family: Dosis-SemiBold;
    display: block;
    max-width: 1070px;
    margin-left: auto;
    margin-right: auto;
    height: 90px;
    margin-top: 40px!important
  }

  .options-sidebar{
    font-size: 13px !important;
    color: #000000 !important;
    text-align: left !important;
    font-family: Dosis-SemiBold;
  }

  .v-navigation-drawer{
    box-shadow: none !important
  }

  .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
     background-color: #ffffff !important;
  }

  .horizontal-menu > ul > li > a {
      color: #000000 !important;
      font-size: 13px !important;
      font-weight: unset !important;
      font-family: Dosis-SemiBold;
  }

  .horizontal-menu > ul > li .sub-menu li a:hover {
    color: #80daed!important
  }

  .sub-menu a{
    font-family: Dosis-SemiBold;
  }

  .content-none::after {
    content: none !important;
    margin-left: 0 !important;
  }

  .content-none > li {
    padding-left: 0px !important;
  }

  @media (max-width: 1460px){
    .content-none > li {
        padding-left: 0px !important;
    }
  }
  .content-none {
      padding: 0.9375rem 0.9375rem 0.9375rem 0rem !important;
  }
  .content-li::after {
    margin-left: 0 !important;
  }

  .content-none span {
    font-size: 11px !important
  }

 /* .size-tag{
    font-size: 13px !important
  }*/

  @media (max-width: 766px) {
    .size-tag {
      font-size: 10px !important
    }
      .mobile-width{
          left: -120px!important;
      }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .size-tag {
      font-size: 10px !important
    }
  }
</style>
