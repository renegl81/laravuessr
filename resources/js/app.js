import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { Vue2Dragula } from 'vue2-dragula'
import VueQuillEditor from 'vue-quill-editor'
import wysiwyg from 'vue-wysiwyg'
import VueBreadcrumbs from 'vue2-breadcrumbs'
import VueResource from 'vue-resource'
import Notifications from 'vue-notification'
import velocity from 'velocity-animate'
import Nprogress from 'nprogress'
import VueI18n from 'vue-i18n'
import VueTour from 'vue-tour'
import fullscreen from 'vue-fullscreen'
import InstantSearch from 'vue-instantsearch'
import VueVideoPlayer from 'vue-video-player';
import Croppa from 'vue-croppa';
//import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import VueClipboard from 'vue-clipboard2';
import VueSweetalert2 from 'vue-sweetalert2';
//import 'sweetalert2/dist/sweetalert2.min.css';
//import '../sass/app.scss';


// global compon ents
import GlobalComponents from './globalComponents'

// router
import router from './router'

// store
import { store } from './store/store';

// firebase
import './firebase'

// messages
import messages from './lang';

// Mixin para Permisos de los Roles (Metodo $can)
import CanPermission from './mixins/CanPermission';

//Mixin para verificar Roles de un Usuario (Metodo $HasRole)
import HasRole from './mixins/HasRole';

Vue.config.productionTip = false

// navigation guards before each
router.beforeEach((to, from, next) => {
	Nprogress.start()
	if (to.matched.some(record => record.meta.requiresAuth) || to.path === '/app/horizontal' || to.path === '/horizontal' ) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		if (localStorage.getItem('user') === null) {
			next({
				path: '/app/session/login',
				query: { redirect: to.fullPath }
			})
		} else {
           if(to.path === '/horizontal'){
                next({
                    path: '/app/horizontal/home'
                })
            }
			next()
		}
	} else {
		next() // make sure to always call next()!
	}
})

	Vue.prototype.$isMobile = function() {
		let isMobile = {
			Android: function() {
			return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
			},
			any: function() {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows()
			);
			}
		}
		return !!isMobile.any();
	}

	Vue.prototype.$getTypeProject = function(language) {
	let type = null;
	if(this.$route.params.typeProject != null && this.$route.params.typeProject !== ''){
        const arrayTypeProjectEs = ['piscinas', 'terrazas', 'industrial-y-cocina']
        const arrayTypeProjectEn = ['industrial-and-kitchen','swimming-pools', 'terraces']
		const arrayTypeProjectFr = ['industriel-et-cuisine','terrasses','piscines']
		let typeProjectEs = arrayTypeProjectEs.find(typeProject => typeProject === this.$route.params.typeProject);
		if(typeProjectEs && language === 'es'){
			type = this.$route.params.typeProject;
		}
        let typeProjectEn = arrayTypeProjectEn.find(typeProject => typeProject === this.$route.params.typeProject);
        if(typeProjectEn && language === 'en'){
            type = this.$route.params.typeProject;
        }
        let typeProjectFr = arrayTypeProjectFr.find(typeProject => typeProject === this.$route.params.typeProject);
        if(typeProjectFr && language === 'fr'){
            type = this.$route.params.typeProject;
        }
	}
	return type;
	}

	Vue.prototype.$getTypeFilter = function() {
		let type = null;
		if(this.$route.params.typeFilter != null && this.$route.params.typeFilter !== ''){
            const arrayTypeFilterTags = ['por_etiqueta', 'par_ta', 'by_tag']
            const arrayTypeFilterTypes = ['por_tipo', 'by_type', 'par_type'];

            let typeFilter = arrayTypeFilterTags.find(typeFilter => typeFilter === this.$route.params.typeFilter);
            if(typeFilter){
                return 'by_tag';
            }
            typeFilter = arrayTypeFilterTypes.find(typeFilter => typeFilter === this.$route.params.typeFilter);
            if(typeFilter){
                return 'by_subtype';
            }
		}
		return type;
	}

	Vue.prototype.$getLanguage = function() {
		let language = 'es';
		if(this.$route.params.language != null && this.$route.params.language !== ''){
			const arrayLanguages = ['fr', 'es', 'en']
			let languageQuery = arrayLanguages.find(language => language === this.$route.params.language);
			if(languageQuery){
				language = this.$route.params.language;
			}
		}
		return language;
	}

// navigation guard after each
router.afterEach(() => {
	Nprogress.done()
	setTimeout(() => {
		const contentWrapper = document.querySelector(".v-content__wrap");
		if(contentWrapper !== null){
			contentWrapper.scrollTop = 0;
		}
		const boxedLayout = document.querySelector('.app-boxed-layout .app-content');
		if(boxedLayout !==  null){
			boxedLayout.scrollTop = 0;
		}
		const miniLayout = document.querySelector('.app-mini-layout .app-content');
		if(miniLayout !== null){
			miniLayout.scrollTop = 0;
		}
	}, 200);
})

Vue.use(VueSweetalert2);
Vue.use(InstantSearch);
Vue.use(VueI18n)
Vue.use(VueTour)
Vue.use(Vue2Dragula)
Vue.use(VueQuillEditor)
Vue.use(VueResource)
Vue.use(wysiwyg, {})
Vue.use(VueBreadcrumbs)
Vue.use(Notifications, { velocity })
Vue.use(fullscreen);
Vue.use(GlobalComponents);
Vue.use(VueVideoPlayer);
Vue.use(Croppa);
Vue.mixin(CanPermission);
Vue.mixin(HasRole);
Vue.use(Viewer);
Vue.use(VueClipboard);

const i18n = new VueI18n({
	locale: store.getters['settings/selectedLocale'].locale, // set locale
	messages, // set locale messages
})

export default new Vue({
	i18n,
    store,
	router,
    vuetify,
    render: h => h(App)
})
