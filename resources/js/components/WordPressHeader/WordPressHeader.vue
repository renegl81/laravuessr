<template>
    <div class="WordPressHeader" id="headerx">
            <div class="" style="border-bottom: 1px solid #eee;padding-left: 15px;padding-top: 25px;">
                <div class="row">
                    <div id="logo" class="logo-left has-img pl-md-2" style="padding-bottom: 20px;" data-anim="">
                        <a href="https://rosagres.com">
                            <img class="standard" src="/images/rosa-gres-logo.png" alt="Rosa Gres" width="300" height="110">
                            <div class="text-logo">
                            </div>
                        </a>
                    </div>
                    <div class="header-right lang-sel">
                        <div class="lang_sel_list_horizontal wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-legacy-list-horizontal" id="lang_sel_list">
                            <ul>
                                <li class="icl-es wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-es wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-list-horizontal icl-es d-inline-block">
                                    <a href="https://rosagres.com" class="wpml-ls-link">
                                        <span class="wpml-ls-native icl_lang_sel_native">ES/</span>
                                    </a>
                                </li>
                                <li class="icl-es wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-es wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-list-horizontal icl-en  d-inline-block">
                                    <a href="https://rosagres.com/en/" class="wpml-ls-link">
                                        <span class="wpml-ls-native icl_lang_sel_native" lang="en">EN /</span>
                                    </a>
                                </li>
                                <li class="icl-es wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-es wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-list-horizontal icl-fr  d-inline-block">
                                    <a href="https://rosagres.com/fr/" class="wpml-ls-link">
                                        <span class="wpml-ls-native icl_lang_sel_native" lang="fr">FR/</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-0 pl-lg-3 pr-lg-3">
               <div class="row sticky-header clearfix" style="background-color: rgb(255, 255, 255);">
                    <div class="header-left col-sm-1 col-md-1 col-lg-2">
                        <div class="row">
                            <div class="aux-item col-4 pt-0">
                                <a href="https://rosagres.com/" class="contact-menu-link icon-link">
                                    <i class="fa fa-map-marker"></i>
                                </a>
                            </div>
                            <div class="aux-item aux-search col-4 pt-0 pl-0">
                                <a href="https://rosagres.com/" class="header-search-link header-search-link-alt icon-link">
                                    <i class="sf-icon-search"></i>
                                </a>
                            </div>
                            <div class="aux-item aux-account col-4 pt-0 pl-0">
                                <a  class="header-search-link header-search-link-alt icon-link" href="https://rosagres.com/">
                                    <i class="sf-icon-account"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div class="float-menu col-sm-8 col-md-8 col-lg-8">
                        <nav id="main-navigation" class="std-menu clearfix" style="padding-top: 5px;">
                            <div class="menu-mega-menu-rg-container">
                                <ul id="menu-mega-menu-rg" class="menu">
                                       <li  @mouseenter="setActiveM('products')" @click="setActiveM('products')" class="menu-item-20622 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sf-mega-menu sf-mega-menu-fw sf-mega-menu-alt parent" data-megamenucols="5">
                                            <a href="#"><span class="menu-item-text">{{ $t('message.producto') }}</span></a>
                                       </li>
                                       <li  @mouseenter="setActiveM('projects')" @mouseleave="setActiveM('projects')" @click="setActiveM('projects')" class="menu-item-21987 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sf-std-menu parent">
                                           <a href="#"><span class="menu-item-text">{{ $t('message.proyectos') }}</span></a>
                                           <ul class="sub-menu list-unstyled" style="top: 140px;position: absolute;z-index: 99999;" v-if="activeM === 'projects'">
                                               <li class="menu-item-21986 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu submenu-title">
                                                   <a href="https://rosagres.com/proyectos-piscinas-y-terrazas-en-gres-porcelanico/">{{ $t('message.piscinasTerrazas') }}</a>
                                               </li>
                                               <li class="menu-item-21985 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu submenu-title">
                                                   <a href="https://rosagres.com/proyectos-industrial-y-cocina-en-gres-porcelanico/">{{ $t('message.industrialCocina') }}</a>
                                               </li>
                                           </ul>
                                       </li>
                                    <li class="menu-item-20645 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                        <a href="https://rosagres.com/zona-profesionales/"><span class="menu-item-text">{{ $t('message.zonasProfesionales') }}</span></a>
                                    </li>
                                    <li class="menu-item-20643 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                       <a href="https://rosagres.com/descargas/"><span class="menu-item-text">{{ $t('message.downloads') }}</span></a>
                                    </li>
                                    <li class="menu-item-20641 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                       <a href="https://rosagres.com/blog/"><span class="menu-item-text">{{ $t('message.blog') }}</span></a>
                                    </li>
                                    <li  @mouseenter="setActiveM('about')" @mouseleave="setActiveM('about')" @click="setActiveM('about')" class="menu-item-20777 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sf-std-menu parent">
                                           <a href="#"><span class="menu-item-text">{{ $t('message.acerca') }}</span></a>
                                           <ul class="sub-menu list-unstyled" style="top: 140px;position: absolute;z-index: 99999;" v-if="activeM === 'about'">
                                                <li class="menu-item-20776 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu submenu-title">
                                                    <a href="https://rosagres.com/historia/">{{ $t('message.historia') }}</a>
                                                </li>
                                                <li class="menu-item-20644 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu submenu-title">
                                                    <a href="https://rosagres.com/nosotros/">{{ $t('message.nosotros') }}</a>
                                                </li>
                                                <li class="menu-item-20774 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu submenu-title">
                                                    <a href="https://rosagres.com/prensa/">{{ $t('message.prensa') }}</a>
                                                </li>
                                                <li class="menu-item-20775 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu submenu-title">
                                                    <a href="https://rosagres.com/sostenibilidad/">{{ $t('message.sostenibilidad') }}</a>
                                                </li>
                                            </ul>
                                        </li>
                                    <li class="menu-item-20642 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                        <a href="https://rosagres.com/contacto/"><span class="menu-item-text">{{ $t('message.contact') }}</span></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="header-right col-sm-3 col-md-3 col-lg-2 pt-2 pl-0 text-right">
                            <div class="aux-item aux-item-social">
                                <ul class="social-icons standard pl-0">
                                   <li class="facebook">
                                       <a class="s-link" href="https://www.facebook.com/RosaGresCompany/" target="_blank"><i class="fab fa-facebook"></i></a>
                                   </li>
                                   <li class="linkedin">
                                       <a class="s-link" href="https://www.linkedin.com/company/421693?trk=tyah&amp;trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A421693%2Cidx%3A2-1-2%2CtarId%3A1465244354299%2Ctas%3Arosa%20gres" target="_blank"><i class="fa fa-linkedin"></i></a>
                                   </li>
                                   <li class="instagram"><a href="http://instagram.com/rosagres" target="_blank"><i class="fab fa-instagram"></i></a>
                                   </li>
                                   <li class="houzz">
                                       <a  class="s-link" href="http://www.houzz.es/projects/users/rosagres" target="_blank"><i class="fab fa-houzz"></i></a>
                                   </li>
                                   <li class="dribbble">
                                       <a href="https://www.homify.es/expertos/7426918/rosa-gres" target="_blank" class="homify">
                                          <img src="/images/rosa-gres-homify-icon.png" alt="" class="alignnone size-full wp-image-22300 ancho-30">
                                       </a>
                                   </li>
                               </ul>
                            </div>
                    </div>
                </div>
                <!--- Menu Productos -->
                <div class="row" v-if="activeM === 'products'" @mouseenter="setActiveMProducts(true)"  @mouseleave="setActiveMProducts(false)">
                    <ul class="sub-menu product-menu">
                        <div class="row">
                            <div class="menu-item-20629 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sf-std-menu parent col">
                                <a href="#" class="list-title">{{ $t('message.productos') }}</a>
                                <ul class="sub-menu list-unstyled text-left" style="top: 0px;" v-if="activeM === 'products'">
                                    <li class="menu-item-20628 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu text-left">
                                        <a class="text-left" href="https://rosagres.com/productos/">{{ $t('message.buscarProductos') }}</a>
                                    </li>
                                    <li class="menu-item-20630 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                        <a href="https://rosagres.com/colecciones/">{{ $t('message.colecciones') }}</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="menu-item-20631 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sf-std-menu parent col">
                                <a href="#" class="list-title">{{ $t('message.pavimento') }}</a>
                                <ul class="sub-menu list-unstyled" style="top: 0px;">
                                <li class="menu-item-20624 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                    <a href="https://rosagres.com/terrazas-y-exteriores/">{{ $t('message.terrazasExteriores') }}</a>
                                </li>
                            </ul>
                            </div>
                            <div class="menu-item-20632 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sf-std-menu parent col">
                                <a href="#" class="list-title">{{ $t('message.piscina') }}</a>
                                <ul class="sub-menu list-unstyled" style="top: 0px;">
                                     <li class="menu-item-20934 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                         <a href="https://rosagres.com/piscina-privada/">{{ $t('message.piscinaPrivada') }}</a></li>
                                     <li class="menu-item-20634 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                         <a href="https://rosagres.com/piscina-hotel-wellness/">{{ $t('message.piscinaHotelWellness') }}</a>
                                     </li>
                                     <li class="menu-item-20633 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                         <a href="https://rosagres.com/piscina-deportiva/">{{ $t('message.piscinaDeportiva') }}</a>
                                     </li>
                                     <li class="menu-item-20640 menu-item menu-item-type-custom menu-item-object-custom sf-std-menu">
                                         <a href="https://www.rosagres.com/app/pool/">{{ $t('message.personaliza') }}</a>
                                     </li>
                                 </ul>
                            </div>
                            <div class="menu-item-20636 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sf-std-menu parent col">
                                <a href="#" class="list-title">{{ $t('message.sistemasConstructivos') }}</a>
                                <ul class="sub-menu list-unstyled" style="top: 0px;">
                                     <li class="menu-item-20637 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu ">
                                         <a href="https://rosagres.com/sistemas-constructivos-s9/">{{ $t('message.sistema9') }}</a>
                                     </li>
                                     <li class="menu-item-20638 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                         <a href="https://rosagres.com/sistemas-constructivos-s10/">{{ $t('message.sistema10') }}</a></li>
                                 </ul>
                            </div>
                            <div class="menu-item-20639 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sf-std-menu parent col">
                                <a href="#" class="list-title">{{ $t('message.industrial') }}</a>
                                  <ul class="sub-menu list-unstyled" style="top: 0px;">
                                     <li class="menu-item-21472 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                         <a href="https://rosagres.com/biostop-la-ceramica-que-elimina-las-bacterias/">{{ $t('message.biostop') }}</a></li><li class="menu-item-20623 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                     <a href="https://rosagres.com/pavimento-industrial/">{{ $t('message.pavimentoIndustrial') }}</a>
                                 </li>
                                     <li class="menu-item-20625 menu-item menu-item-type-post_type menu-item-object-page sf-std-menu">
                                         <a href="https://rosagres.com/cocina-industrial/">{{ $t('message.cocinaIndustrial') }}</a>
                                     </li>
                                 </ul>
                            </div>
                        </div>
                    </ul>
                </div>

                <!--Menu Proyectos -->

            </div>
       </div>
      </template>

      <script>
          export default {
              name: 'WordpressHeader',
              data(){
                  return{
                      activeM: null
                  }
              },
              methods:{
                  setActiveM(value){
                      if(this.activeM === value){
                          this.activeM = null;
                      }else{
                          this.activeM =value;
                      }
                  },
                  setActiveMProducts(val){
                      if (val){
                          this.activeM = 'products';
                      }else{
                          this.activeM = null;
                      }
                  }
              }
          };
      </script>
      <style scoped>
      #headerx {
          width: 100%;
          background-color: white;
          z-index: 99999;
      }
      .s-link {
          height: 36px;

      }
      .icon-link {
          font-size: 24px;
      }
      .icon-link:hover{
          color: #7eced4 !important;
      }
      .sf-icon-account::before {
          content: "\e61a";
      }
      #headerx .lang-sel{
          margin-left: auto;
          margin-top: 25px;
          padding-right: 25px;
      }
      .wpml-ls-legacy-list-horizontal a {
          margin-top: 5px!important;
          padding-right: 5px!important;
          padding-left: 5px!important;
          color: #222!important;
      }
      i[class^=sf-icon-]{
          font-family:'atelier';
          speak:none;
          font-style:normal;
          font-weight:400;
          font-variant:normal;
          text-transform:none;
          line-height:1;
          -webkit-font-smoothing:antialiased;
          -moz-osx-font-smoothing:grayscale
      }
      .sf-icon-quotation-mark-start:before{
          content:"\e60b"
      }
      .sf-icon-quotation-mark-end:before{
          content:"\e614"
      }
      .sf-icon-loader:before{
          content:"\e60f"
      }
      .sf-icon-wishlist:before{
          content:"\e604"
      }
      .sf-icon-account:before{
          content:"\e61a"
      }
      #logo a>img {
          max-height: 45px;
          padding: 0;
          max-width: 120px;
          line-height: 90px;
      }
      .product-menu{
          position: absolute;
          z-index: 9999;
          top: 160px;
          max-width: 1200px;
          width: 100%;
          background-color: white;
      }
      .list-title{
          padding-left: 20px;
          font-size: 17px;
          font-weight: 400;
          color: #000;
      }
      .list-title:hover, .menu-item a:hover{
          color: #7eced4!important;
      }
      ul.sub-menu li {
          border-top-color: #f0f0f0;
          border-top-style: dotted;
          padding: 8px!important;
      }
      #logo .text-logo {
          display: table-cell;
          vertical-align: middle;
      }
      #headerx .std-menu ul.menu>li {
          display: inline-block;
      }
      nav.std-menu ul.menu>li.menu-item.sf-mega-menu {
          position: inherit;
      }
      ul.social-icons li a i {
          display: block;
          height: 100%;
          position: relative;
          top: 0;
          transition: top .35s;
          width: 100%;
          margin-bottom: 31px;
          margin-left: 7px;
          font-size: 18px;
          color: #333333!important;
      }
      ul.social-icons li a i {
          position: static;
      }
      .social-icons li{
          display: inline-block;
      }
      img.ancho-30 {
          width: 20px;
      }
      img.size-full {
          max-width: 100%;
          height: auto;
      }
      a.homify img {
          margin-top: 5px;
          margin-left: 5px;
          height: 20px;
      }
      a.homify {
          padding-left: 5px!important;
          padding-right: 5px!important;
      }
      .aux-item {
          vertical-align: middle;
          margin-top: 0;
      }
      ul.menu>li>a, .header-right ul.menu>li>a {
         /* height: 90px!important;
          line-height: 90px!important;*/
          text-transform: uppercase;
      }
      .search-link i:before {
          height: 24px;
      }
      .sf-icon-search:before {
          content: "\e605";
      }
      nav .menu ul.sub-menu li.menu-item>a, nav .menu ul.sub-menu li>span, nav.std-menu ul.sub-menu {
          color: #666;
      }
      .v-application a {
          color: #333333;
      }
      #headerx nav.std-menu ul.menu>li>a {
          font-size: 12px;
          padding: 0 10px;
      }
      .aux-item-social, .social-icons{
          overflow: hidden;
      }
      .std-menu ul.sub-menu {
          color: #000;
          background-color: #fff;
      }
      .menu ul.sub-menu li {
          border-top-color: #f0f0f0;
          border-top-style: dotted;
          padding: 8px!important;
      }
      .wpml-ls-statics-shortcode_actions .wpml-ls-current-language>a {
          color: #444;
          background-color: #fff;
      }
      .icl_lang_sel_native {
          font-family: Dosis,serif;
          font-weight: bold;
          font-style: normal;
          font-size: 16px;
          color: #222;
      }
      menu>ul.sub-menu>div>li ul {
          position: relative!important;
          top: 0!important;
          left: 0;
          display: block!important;
          opacity: 1!important;
          width: 100%;
          -moz-box-shadow: none!important;
          -webkit-box-shadow: none!important;
          box-shadow: none!important;
          max-width: none;
          padding: 0 20px;
      }
      nav .menu ul.sub-menu li {
          border-top-color: #f0f0f0;
          border-top-style: dotted;
          padding: 8px;
      }
      .menu-item-has-children>a:first-child {
          margin-bottom: 20px;
      }
      .std-menu ul.sub-menu>li {
          border-top: 1px solid #e3e3e3;
          line-height: 150%;
          text-align: left;
          position: relative;
      }
     .menu-item {
          border-top-width: 1px!important;
      }

     ul.sub-menu>li>a {
          padding: 10px 15px!important;
          font-weight: 400!important;
          font-size: 14px!important;
          max-width: 100%!important;
          text-overflow: ellipsis!important;
          white-space: nowrap!important;
          overflow-x: hidden!important;
          display: block!important;
          color: #666;
      }
      nav.std-menu ul.sub-menu> {
          border-top: 1px solid #e3e3e3;
          line-height: 150%;
          text-align: left;
          position: relative;
      }
      .wpml-ls-link{
          font-weight: bold;
      }
      .wpml-ls-legacy-list-horizontal .wpml-ls-item {
          padding: 0;
          margin: 0;
          list-style-type: none;
          display: inline-block;
      }
      .submenu-title, .submenu-title a{
          font-weight: 400!important;
          font-size: 14px!important;
      }
      .menu-item-text{
          letter-spacing: 1px;
          font-weight: 600;
          font-size: 12px;
      }
      @media (max-width: 1500px){
          #headerx nav.std-menu ul.menu>li>a {
              font-size: 12px;
          }
      }
      @media (max-width: 1400px){
          #headerx nav.std-menu ul.menu>li>a {
              font-size: 12px;
              padding: 0 8px;
          }
      }
      </style>
