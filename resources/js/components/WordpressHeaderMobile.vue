<template xmlns="http://www.w3.org/1999/html">
    <div>
    <div class="container-mine logo-wmobile">
        <div class="row">
            <div id="logo" class="logo-left has-img" data-anim="">
                <a href="https://rosagres.com">
                    <img class="standard" src="/images/rosa-gres-logo.png" alt="Rosa Gres">
                    <div class="text-logo">
                    </div>
                </a>
                <div class="menu-icon">
                    <v-icon
                        large
                        @click="toggleMenu()"
                    >
                        mdi-menu
                    </v-icon>
                </div>
            </div>
        </div>
    </div>
    <div class="menu-m" v-if="showMenu">
        <div class="text-right pull-right" style="padding-top: 15px;padding-right: 15px;">
            <v-icon
                large
                @click="toggleMenu()">
                mdi-close
            </v-icon>
        </div>
       <div class="row first-row">
           <div class="col-12 text-center mt-4" style="padding: 25px;">
               <div class="d-inline-block mr-5">
                   <a href="https://rosagres.com/fr/"><img width="20" src="/static/flag-icons/fr.png"></a>
               </div>
               <div class="d-inline-block mr-5">
                   <a href="https://rosagres.com/es/"><img width="20" src="/static/flag-icons/es.png"></a>
               </div>
               <div class="d-inline-block mr-5">
                   <a href="https://rosagres.com/en/"><img width="20"  src="/static/flag-icons/uk.png"></a>
               </div>
           </div>
           <div class="col-12 text-center">
               <a href="https://rosagres.com" class="text-white"> <p class="d-inline-block text-white" style="font-size: 16px;color: white;">{{ $t('message.search')}}</p></a>
               <a href="https://rosagres.com" class="text-white"> <i class="fa fa-search s-icon"></i></a>
           </div>
       </div>
        <div class="row row-item" style="border-top: 1px solid #444;">
            <a href="#" class="list-title drop" :class="subMenu=== 'products' ? 'selected' : ''" @click="showSubMenu('products')">
                {{ $t('message.productos') }} <span><i id="chevron-products" class="fa fa-chevron-down chevron"></i> </span></a>
        </div>
        <ul class="list-unstyled sub-menu-m" v-if="subMenu=== 'products'">
            <li class="list-subtitle">
                <a class="text-left" href="https://rosagres.com/productos/">{{ $t('message.buscarProductos') }}</a>
            </li>
            <li class="list-subtitle">
                <a href="https://rosagres.com/colecciones/">{{ $t('message.colecciones') }}</a>
            </li>
            <li class="list-subtitle">
                <a href="https://rosagres.com/terrazas-y-exteriores/">{{ $t('message.terrazasExteriores') }}</a>
            </li>
            <li class="list-subtitle">
                <a href="#" class="list-title" @click="showSubMenu2('piscina')">{{ $t('message.piscina')}}</a>
            </li>
            <ul class="list-unstyled sub-menu-m" style="top: 0px;" v-if="subMenu2 === 'piscina'">
                <li class="list-subtitle lsub">
                    <a href="https://rosagres.com/piscina-privada/">{{ $t('message.piscinaPrivada')}}</a></li>
                <li class="list-subtitle lsub">
                    <a href="https://rosagres.com/piscina-hotel-wellness/"> {{ $t('message.piscinaHotelWellness')}}</a>
                </li>
                <li class="list-subtitle lsub">
                    <a href="https://rosagres.com/piscina-deportiva/">{{$t('message.piscinaDeportiva')}}</a>
                </li>
                <li class="list-subtitle lsub">
                    <a href="https://www.rosagres.com/app/pool/">{{ $t('message.personaliza')}}</a>
                </li>
            </ul>
            <li class="list-subtitle">
                <a href="#" class="list-title" @click="showSubMenu2('sistema')">{{$t('message.sistemasConstructivos')}}</a>
            </li>
            <ul class="list-unstyled sub-menu-m" style="top: 0px;" v-if="subMenu2 === 'sistema'">
                <li class="list-subtitle lsub">
                    <a href="https://rosagres.com/sistemas-constructivos-s9/">{{$t('message.sistema9') }}</a>
                </li>
                <li class="list-subtitle lsub">
                    <a href="https://rosagres.com/sistemas-constructivos-s10/">{{$t('message.sistema10') }}</a></li>
            </ul>
            <li class="list-subtitle">
                <a href="#" class="list-title" @click="showSubMenu2('industrial')">{{$t('message.industrial')}}</a>
            </li>
            <ul class="sub-menu-m list-unstyled sub-menu-m" style="top: 0px;" v-if="subMenu2 === 'industrial'">
                <li class="list-subtitle lsub">
                    <a href="https://rosagres.com/biostop-la-ceramica-que-elimina-las-bacterias/">{{$t('message.biostop')}}</a></li>
                <li class="list-subtitle lsub">
                    <a href="https://rosagres.com/pavimento-industrial/">{{$t('message.pavimentoIndustrial')}}</a>
                </li>
                <li class="list-subtitle lsub">
                    <a href="https://rosagres.com/cocina-industrial/">{{$t('message.cocinaIndustrial')}}</a>
                </li>
            </ul>
        </ul>
        <div class="row row-item">
            <a href="#" class="list-title drop" :class="subMenu=== 'proyectos' ? 'selected' : ''" @click="showSubMenu('proyectos')">
               {{$t('message.proyectos')}} <span><i id="chevron-proyectos" class="fa fa-chevron-down chevron"></i> </span></a>
        </div>
        <ul class="list-unstyled sub-menu-m" v-if="subMenu=== 'proyectos'">
            <li class="list-subtitle">
                <a href="https://rosagres.com/proyectos-piscinas-y-terrazas-en-gres-porcelanico/">{{$t('message.piscinasTerrazas')}}</a>
            </li>
            <li class="list-subtitle">
                <a href="https://rosagres.com/proyectos-industrial-y-cocina-en-gres-porcelanico/">{{$t('message.industrialCocina')}}</a>
            </li>
        </ul>
        <div class="row row-item">
            <a href="https://rosagres.com/zona-profesionales/" class="list-title">{{$t('message.zonasProfesionales')}}</a>
        </div>
        <div class="row row-item">
            <a href="https://rosagres.com/descargas/" class="list-title">{{$t('message.downloads')}}</a>
        </div>
        <div class="row row-item">
            <a href="https://rosagres.com/blog/" class="list-title">{{ $t('message.blog') }}</a>
        </div>
        <div class="row row-item">
            <a href="#" class="list-title drop" :class="subMenu=== 'acerca' ? 'selected' : ''" @click="showSubMenu('acerca')">
               {{$t('message.acerca')}} <span><i id="chevron-acerca" class="fa fa-chevron-down chevron"></i> </span></a>
        </div>
        <ul class="sub-menu list-unstyled" v-if="subMenu === 'acerca'">
            <li class="list-subtitle">
                <a href="https://rosagres.com/historia/">Historia</a>
            </li>
            <li class="list-subtitle">
                <a href="https://rosagres.com/nosotros/">Nosotros</a>
            </li>
            <li class="list-subtitle">
                <a href="https://rosagres.com/prensa/">Prensa</a>
            </li>
            <li class="list-subtitle">
                <a href="https://rosagres.com/sostenibilidad/">Sostenibilidad</a>
            </li>
        </ul>
        <div class="row row-item">
        <a href="#" class="list-title">{{ $t('message.contact') }}</a>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "WordpressHeaderMobile",
    data(){
        return {
            showMenu: false,
            subMenu: null,
            subMenu2: null
        }
    },
    methods: {
        toggleMenu(){
            this.showMenu = !this.showMenu;
        },
        showSubMenu(value){
            this.subMenu = this.subMenu === value ? null : value;
            let chevron = document.getElementById('chevron-'+value);
            if(this.subMenu){
                chevron.classList.remove('fa-chevron-down');
                chevron.classList.add('fa-chevron-up');
            }else{
                chevron.classList.remove('fa-chevron-up');
                chevron.classList.add('fa-chevron-down');
            }

        },
        showSubMenu2(value){
            this.subMenu2 = this.subMenu2 === value ? null : value;
        }
    }
}
</script>

<style scoped>
#headerx {
    max-width: 95%;
    margin-right: auto;
    width: 100%;
    padding-left: 100px;
    background-color: white;
    z-index: 99999;
}
.s-icon {
    margin-left: auto;
    position: absolute;
    right: 25px;
    font-size: 20px;
    margin-top: -15px;
}
.drop {
    padding-top: 20px;
    padding-bottom: 10px;
    text-transform: uppercase;
}
#headerx .lang-sel{
    margin-left: auto;
    margin-top: 25px;
}
#logo a>img {
    max-height: 45px;
    padding: 0;
    max-width: 120px;;
    line-height: 90px;
}
.logo-wmobile{
    border-bottom: 1px solid #eee;
}
.menu-icon{
    position: absolute;
    right: 50px;
    font-size: 25px;
    display: inline-block;
}
.menu-m {
    background-color: #222;
    color: white;
    height: 100vh;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 99999;
}
.row-item {
    padding-left: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #444;
    margin-left: 15px;
    margin-right: 15px;
}
.sub-menu-m{
   padding-left: 30px!important;
    font-size: 13px;

}
.container-mine{
    max-width: 1070px;
    margin-left: auto;
    margin-right: auto;
    padding: 25px;
}
.list-subtitle {
    border-bottom: 1px solid #444;
    padding-left: 25px!important;
    padding-bottom: 15px;
    padding-top: 15px;
    color: white;
    text-transform: uppercase;
}
.list-subtitle a {
    color: white;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 13px;
    padding: 15px 20px;
}
.list-title {
    color: white;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 600;
    padding: 15px 20px;
}
.chevron {
    float: right;
    position: absolute;
    right: 25px;
    font-size: 24px;
    color: #e4e4e4;
}
.selected {
    color: #7eced4!important;
}
.text-white{
    color: white!important;
}
.lsub{
    padding-left: 45px!important;
}
@media(min-width: 766px){
    .first-row{
        margin-top: 100px;
    }
}
</style>
