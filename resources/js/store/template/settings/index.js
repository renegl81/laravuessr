/**
 * Settings Module
 */
import {
	languages,
	sidebarBackgroundImages,
	sidebarFilters,
	routerAnimations,
	themes,
	headerFilters,
	menus
} from "./data";
import axios from "axios";

import router from "../../../router";

const state = {                                       // dark mode
	collapseSidebar: false,                                // mini sidevar
	rtlLayout: false,                                    // rtl layout
	backgroundImage: false,                                // enable sidebar background image
	horizontalLayoutSidebar: false,                        // horizontal layout sidebar
	languages,                                             // languages
	selectedLocale: languages[1],                          // selected locale
	sidebarBackgroundImages,                               // sidebar backgorund images
	selectedSidebarBgImage: sidebarBackgroundImages[0],    // selected sidebar background image
	sidebarFilters,                                        // sidebar filters
	sidebarSelectedFilter: sidebarFilters[0],              // selected sidebar filter
	routerAnimations,                                      // router animations
	selectedRouterAnimation: routerAnimations[0],          // selected router animation
	themes,                                                // themes
	selectedTheme: themes[0],                              // selected theme
	headerFilters,                                         // header filters
	activeHeaderFilter: headerFilters[1],                  // selected header filter
	mobileSearchForm: false,
	boxLayout: false,
	logo: '',
	menus,
	menu: menus[0],		   // Is Mobile Search Form Open
}

// getters
const getters = {
	collapseSidebar: state => {
		return state.collapseSidebar;
	},
	menusList: state => {
		return state.menus;
	},
	selectMenu: state => {
		console.log(state.menu)
		return state.menu;
	},
	boxLayout: state => {
		return state.boxLayout;
	},
	rtlLayout: state => {
		return state.rtlLayout;
	},
	backgroundImage: state => {
		return state.backgroundImage;
	},
	selectedLocale: state => {
		return state.selectedLocale;
	},
	languages: state => {
		return state.languages;
	},
	sidebarBackgroundImages: state => {
		return state.sidebarBackgroundImages;
	},
	selectedSidebarBgImage: state => {
		return state.selectedSidebarBgImage;
	},
	sidebarFilters: state => {
		return state.sidebarFilters;
	},
	sidebarSelectedFilter: state => {
		return state.sidebarSelectedFilter;
	},
	selectedRouterAnimation: state => {
		return state.selectedRouterAnimation;
	},
	routerAnimations: state => {
		return state.routerAnimations;
	},
	themes: state => {
		return state.themes;
	},
	selectedTheme: state => {
		return state.selectedTheme;
	},
	headerFilters: state => {
		return state.headerFilters;
	},
	activeHeaderFilter: state => {
		return state.activeHeaderFilter;
	},
	horizontalLayoutSidebar: state => {
		return state.horizontalLayoutSidebar;
	},
	mobileSearchForm: state => {
		return state.mobileSearchForm;
	},
	logo: state => {
		return state.logo;
	}
}

// actions
const actions = {
	getHeaderTheme(context){
		let data = { id: 3 }
		return axios({
			method: 'post',
			url: "/api/configurations/getConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				context.commit('getHeaderTheme', response.data.data[0].value)
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	getTheme(context){
		let data = { id: 1 }
		return axios({
			method: 'post',
			url: "/api/configurations/getConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				context.commit('getTheme', response.data.data[0].value)
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	getRTLDesign(context){
		let data = { id: 7 }
		return axios({
			method: 'post',
			url: "/api/configurations/getConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				context.commit('getRTLDesign', response.data.data[0].value)
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	sidebarColor(context){
		let data = { id: 2 }
		return axios({
			method: 'post',
			url: "/api/configurations/getConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				context.commit('sidebarColor', response.data.data[0].value)
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	getRouteAnimation(context){
		let data = { id: 4 }
		return axios({
			method: 'post',
			url: "/api/configurations/getConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				context.commit('getRouteAnimation', response.data.data[0].value-1)
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	getSelectedSidebarBgImage(context){
		let data = { id: 9 }
		return axios({
			method: 'post',
			url: "/api/configurations/getConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				context.commit('getSelectedSidebarBgImage', response.data.data[0].value)
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	getSidebarBgImage(context){
		let data = { id: 8 }
		return axios({
			method: 'post',
			url: "/api/configurations/getConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				context.commit('getSidebarBgImage', response.data.data[0].value)
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	getCollapseSidebar(context){
		let data = { id: 6 }
		return axios({
			method: 'post',
			url: "/api/configurations/getConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				context.commit('getCollapseSidebar', response.data.data[0].value)
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	saveLogo(context, data){
		return axios({
			url: '/api/configurations/saveLogo',
			method: 'post',
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				console.log('hecho')
			}else{
				console.log('no')
			}
		}).catch(response => {
			console.log(response)
		})
	},
	getLogo(context){
		let data = { id: 10 }
		return axios({
			method: 'post',
			url: "/api/configurations/getConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				context.commit('getLogo', response.data.data[0].value)
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	saveMenu(context, data) {
        return axios({
            method: 'post',
            url: "/api/configurations/saveMenu",
            data,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        }).then(response => {
            context.commit('selectMenu',{ menu: data, id: 1})
        }).catch(response => {
            console.log(response);
        });
	},
	getMenus(context){
		let data = { id: 5 }
		return axios({
			method: 'post',
			url:'/api/configurations/getMenu',
			data,
			headers: {
				'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
			}
		}).then(response => {
			context.commit('selectMenu', { menu: response.data.data[0].value, id: 2})
		}).catch(response => {
			console.log(response);
		});

	},
	collapseSidebar(context) {
		context.commit('collapseSidebarHandler');
	},
	boxLayout(context) {
		context.commit('boxLayoutHandler');
	},
	rtlLayout(context) {
		context.commit('rtlLayoutHandler');
	},
	backgroundImage(context) {
		context.commit('sidebarBgImageHandler');
	},
	changeLanguage(context, payload) {
		context.commit('changeLanguageHandler', payload);
	},
	changeBackgroundImage(context, payload) {
		context.commit('changeBackgroundImageHandler', payload);
	},
	changeSidebarFilter(context, payload) {
		context.commit('changeSidebarFilterHandler', payload);
	},
	changeRouterAnimation(context, payload) {
		context.commit('changeRouterAnimationHandler', payload);
	},
	changeTheme(context, payload) {
		context.commit('changeThemeHandler', payload);
	},
	changeHeaderFilter(context, payload) {
		context.commit('changeHeaderFilterHandler', payload);
	},
	setMiniSidebarLayout(context, payload) {
		context.commit('setMiniSidebarLayoutHandler', payload);
	},
	toggleHorizontalLayoutSidebar(context, payload) {
		context.commit('toggleHorizontalLayoutSidebarHandler', payload);
	},
	toggleSearchForm(context) {
		context.commit('toggleSearchFormHandler');
	}
}

// mutations
const mutations = {
	collapseSidebarHandler(state) {
		state.collapseSidebar = !state.collapseSidebar;
		if(state.collapseSidebar == false){
			let data = { id: 6, collapseSidebar : 0 }
			return axios({
				method: 'post',
				url: "/api/configurations/saveConfigurations",
				data,
				headers: {
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest',
				},
			}).then(response => {
				if(response.data.transaction.status == true){
					state.message = response.data.data
					state.color = 'success'
				}else{
					state.message = response.data.data
					state.color = 'error'
				}
			}).catch(response => {
				state.message = response.data.data
				state.color = 'error'
			})
		}else{
			let data = { id: 6, collapseSidebar: 1 }
			return axios({
				method: 'post',
				url: "/api/configurations/saveConfigurations",
				data,
				headers: {
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest',
				},
			}).then(response => {
				if(response.data.transaction.status == true){
					state.message = response.data.data
					state.color = 'success'
				}else{
					state.message = response.data.data
					state.color = 'error'
				}
			}).catch(response => {
				state.message = response.data.data
				state.color = 'error'
			})
		}
	},
	boxLayoutHandler(state) {
		state.boxLayout = !state.boxLayout;
	},
	selectMenu(state, data){
		if(data.id == 1){
			let route = ''
			if(data.menu === 'default'){
				route = 0
			}else if(data.menu === 'mini'){
				route = 1
			}else if(data.menu === 'horizontal'){
				route = 2
			}
			console.log(data.menu.menu)
			state.menu = menus[route]
			router.push("/app/"+ data.menu.menu +"/configuration");
		}else{
			let route = ''
			if(data.menu === 'default'){
				route = 0
			}else if(data.menu === 'mini'){
				route = 1
			}else if(data.menu === 'horizontal'){
				route = 2
			}
			state.menu = menus[route]
			console.log(data.menu)

		}
	},
	rtlLayoutHandler(state) {
		state.rtlLayout = !state.rtlLayout;
		if(state.rtlLayout  == false){
			let data = { id: 7, rtlLayout: 0 }
			return axios({
				method: 'post',
				url: "/app/api/configurations/saveConfigurations",
				data,
				headers: {
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest',
				},
			}).then(response => {
				if(response.data.transaction.status == true){
					state.message = response.data.data
					state.color = 'success'
				}else{
					state.message = response.data.data
					state.color = 'error'
				}
			}).catch(response => {
				state.message = response.data.data
				state.color = 'error'
			})
		}else{
			let data = { id: 7, rtlLayout: 1 }
			return axios({
				method: 'post',
				url: "/app/api/configurations/saveConfigurations",
				data,
				headers: {
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest',
				},
			}).then(response => {
				if(response.data.transaction.status == true){
					state.message = response.data.data
					state.color = 'success'
				}else{
					state.message = response.data.data
					state.color = 'error'
				}
			}).catch(response => {
				state.message = response.data.data
				state.color = 'error'
			})
		}
	},
	sidebarBgImageHandler(state) {
		state.backgroundImage = !state.backgroundImage;
		if(state.backgroundImage  == false){
			let data = { id: 8, backgroundImage: 0 }
			return axios({
				method: 'post',
				url: "/app/api/configurations/saveConfigurations",
				data,
				headers: {
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest',
				},
			}).then(response => {
				if(response.data.transaction.status == true){
					state.message = response.data.data
					state.color = 'success'
				}else{
					state.message = response.data.data
					state.color = 'error'
				}
			}).catch(response => {
				state.message = response.data.data
				state.color = 'error'
			})
		}else{
			let data = { id: 8, backgroundImage: 1 }
			return axios({
				method: 'post',
				url: "/app/api/configurations/saveConfigurations",
				data,
				headers: {
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest',
				},
			}).then(response => {
				if(response.data.transaction.status == true){
					state.message = response.data.data
					state.color = 'success'
				}else{
					state.message = response.data.data
					state.color = 'error'
				}
			}).catch(response => {
				state.message = response.data.data
				state.color = 'error'
			})
		}
	},
	getTheme(state, data){
		let id = 0
		if(data == '#5D92F4'){
			id = 1
		}else if(data == '#FFB70F'){
			id = 2
		}else if(data === '#00D014'){
			id = 3
		}else if(data === '#FF3739'){
			id = 4
		}else if(data === '#00D0BD'){
			id = 5
		}else if(data === '#80daed'){
			id = 6
		}
		state.selectedTheme = themes[id - 1];
	},

	getHeaderTheme(state, data){
		var link = 0
		if(data === 'primary'){
			link = 1
		}else if(data === 'light'){
			link = 2
		}else if(data === 'warning'){
			link = 3
		}else if(data === 'success'){
			link = 4
		}else if(data === 'error'){
			link = 5
		}else if(data === 'info'){
			link = 6
		}
		state.activeHeaderFilter = headerFilters[link - 1];
	},

	getBoxLayout(state, data){
		if(data == 0){
			state.boxLayout = false;
		}else{
			state.boxLayout = true;
		}
	},

	getRTLDesign(state, data){
		if(data == 0){
			state.rtlLayout = false;
		}else{
			state.rtlLayout = true;
		}
	},

	getCollapseSidebar(state,data){
		if(data == 0){
			state.collapseSidebar = false;
		}else{
			state.collapseSidebar = true;
		}
	},

	getSelectedSidebarBgImage(state,data){
		let id = 0
		if(data === '/static/img/sidebar-1.jpg'){
			id = 1
		}else if(data === '/static/img/sidebar-2.jpg'){
			id = 2
		}else if(data === '/static/img/sidebar-3.jpg'){
			id = 3
		}else if(data === '/static/img/sidebar-4.jpg'){
			id = 4
		}
		state.selectedSidebarBgImage = sidebarBackgroundImages[id - 1]
	},

	getSidebarBgImage(state,data){
		if(data != 0){
			state.backgroundImage = true;
		}else{
			state.backgroundImage = false;
		}
	},

	getRouteAnimation(state, data){
		state.selectedRouterAnimation = routerAnimations[data];
		console.log(state.selectedRouterAnimation)
	},

	sidebarColor(state, data){
		let id = 0
		if(data === 'sidebar-overlay-dark'){
			id = 1
		}else if (data === 'sidebar-overlay-light'){
			id = 2
		}else if (data === 'sidebar-overlay-pink'){
			id = 3
		}else if (data === 'sidebar-overlay-primary'){
			id = 4
		}else if (data === 'sidebar-overlay-warning'){
			id = 5
		}else if (data === 'sidebar-overlay-success'){
			id = 6
		}else if (data === 'sidebar-overlay-purple'){
			id = 7
		}
		state.sidebarSelectedFilter = sidebarFilters[id - 1];
	},
	changeLanguageHandler(state, language) {
		state.selectedLocale = language;
		if (language.locale === 'he' || language.locale === 'ar') {
			state.rtlLayout = true;
		} else {
			state.rtlLayout = false;
		}
	},
	changeBackgroundImageHandler(state, image) {
		state.selectedSidebarBgImage = image;
		let data = { id: 9, selectedSidebarBgImage: image.url }
		return axios({
			method: 'post',
			url: "/app/api/configurations/saveConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				state.message = response.data.data
				state.color = 'success'
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	changeSidebarFilterHandler(state, filter) {
		state.sidebarSelectedFilter = filter;
		let data = { id: 2, sidebarSelectedFilter: filter.class }
		return axios({
			method: 'post',
			url: "/app/api/configurations/saveConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				state.message = response.data.data
				state.color = 'success'
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	changeRouterAnimationHandler(state, animation) {
		state.selectedRouterAnimation = animation;
		let finalanimation = 0
		if(animation === 'slideInUp'){
             finalanimation = 1;
		}else if(animation === 'fadeIn'){
             finalanimation = 2;
		}else if(animation === 'slideInRight'){
             finalanimation = 3;
		}else if(animation === 'bounce'){
             finalanimation = 4;
		}else if(animation === 'lightSpeedIn'){
             finalanimation = 5;
		}else if(animation === 'pulse'){
             finalanimation = 6;
		}
		let data = { id: 4,  selectedRouterAnimation: finalanimation -1}
		return axios({
			method: 'post',
			url: "/app/api/configurations/saveConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				state.message = response.data.data
				state.color = 'success'
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	changeThemeHandler(state, theme) {
		state.selectedTheme = theme;
		var thema = theme.id
		console.log(thema)
		let data = {}
		if(thema == 1){
			data = { id: 1, selectedTheme: '#5D92F4' }
		}else if(thema == 2 ){
			data = { id: 1, selectedTheme: '#FFB70F' }
		}else if(thema == 3){
			data = { id: 1, selectedTheme: '#00D014' }
		}else if(thema == 4){
			data = { id: 1, selectedTheme: '#FF3739' }
		}else if(thema == 5){
			data = { id: 1, selectedTheme: '#00D0BD' }
		}else if(thema == 6){
			data = { id: 1, selectedTheme: '#80daed' }
		}
		return axios({
			method: 'post',
			url: "/app/api/configurations/saveConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				state.message = response.data.data
				state.color = 'success'
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	changeHeaderFilterHandler(state, filter) {
		state.activeHeaderFilter = filter;
		let data = { id: 3, activeHeaderFilter: filter.class }
		return axios({
			method: 'post',
			url: "/app/api/configurations/saveConfigurations",
			data,
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(response => {
			if(response.data.transaction.status == true){
				state.message = response.data.data
				state.color = 'success'
			}else{
				state.message = response.data.data
				state.color = 'error'
			}
		}).catch(response => {
			state.message = response.data.data
			state.color = 'error'
		})
	},
	setMiniSidebarLayoutHandler(state, isSet) {
		state.collapseSidebar = isSet;
	},
	toggleHorizontalLayoutSidebarHandler(state, value) {
		state.horizontalLayoutSidebar = value;
	},
	toggleSearchFormHandler(state) {
		state.mobileSearchForm = !state.mobileSearchForm;
	},

	getLogo(state,data){
		state.logo = data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
