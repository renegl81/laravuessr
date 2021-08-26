import router from "../../../router";

export default {
  //Favicon
    changeFaviconHandler(state, favicon) {
      state.favicon = favicon;
    },

  //Logo
    changeLogoHandler(state, logo) {
      state.logo = logo;
    },

  //Lenguaje
    changeLanguageHandler(state, language) {
        state.selectedLocale = language;
        if (language.locale === 'he' || language.locale === 'ar') {
            state.rtlLayout = true;
        } else {
            state.rtlLayout = false;
        }
    },

  //Animación al Cambiar de Ruta
    changeRouterAnimationHandler(state, animation) {
        state.selectedRouterAnimation = animation;
    },

  //Tema Modo Oscuro
    darkThemeModeHandler(state, value) {
      if (value === undefined) {
        state.darkTheme = !state.darkTheme;
      } else {
        state.darkTheme = value;
      }
    },

  //Color del Header
    changeHeaderFilterHandler(state, filter) {
      state.activeHeaderFilter = filter;
    },

  //Tema del Sistema
    changeThemeHandler(state, theme) {
      state.selectedTheme = theme;
    },

  //Color del Sidebar
    changeSidebarFilterHandler(state, filter) {
        state.sidebarSelectedFilter = filter;
    },

  //Invertir de Derecha-Para-Izquierda Vista de la Pagina
    rtlLayoutHandler(state, value) {
      if (value === undefined) {
        state.rtlLayout = !state.rtlLayout;
      } else {
        state.rtlLayout = value;
      }
    },

  //Mantener Contraído el Sidebar
    collapseSidebarHandler(state, value) {
      if (value === undefined) {
        state.collapseSidebar = !state.collapseSidebar;
      } else {
        state.collapseSidebar = value;
      }
    },

  //Activar/Desactivar Imagen de Fondo en el Sidebar
    sidebarBgImageHandler(state, value) {
      if (value === undefined) {
        state.backgroundImage = !state.backgroundImage;
      } else {
        state.backgroundImage = value;
      }
    },

  //Imagen del Sidebar
    changeBackgroundImageHandler(state, image) {
        state.selectedSidebarBgImage = image;
    },


  //Tipo de Sidebar
    changeMenuSidebarHandler(state, type) {
      // console.log('Router', router)
      if (type === 'mini' || type === 'default' || type === 'horizontal') {
        state.selectedSidebarType = type;

       // const UserAuthRoles = JSON.parse( localStorage.getItem('roles') );

        let route = router.history.current.path;
        let routeSplit = route.replace(/\//g, ' ').split(" ");
        // console.log("Route var", route);

        // if (route.includes('mini')) {
        //   route.replace('mini', 'horizontal');
        //   router.push(route);
        // }

        // if (route.includes('default')) {
        //   route.replace('default', 'horizontal');
        //   router.push(route);
        // }

        // console.log("RouteSplit var", routeSplit);

        /*if (routeSplit[1] != 'session') {
          if ( ( UserAuthRoles.some(roleName => ['Operador', 'Cliente'].indexOf(roleName) >= 0) ) && ( !(UserAuthRoles.some(roleName => ['Administrador', 'Empresa', 'Propietario', 'Gerente'].indexOf(roleName) >= 0)) !== undefined) )
          {  router.push('/horizontal/services/request-service'); return;  }
        }
*/
        if (route === '/app/') //Ruta Home sin mayor detalle
        {  router.push('/app/'+type+'/home'); return;  } //Me aseguro de que entre en el tipo de menú correcto

        if (routeSplit[2] === 'home') { //Ruta Home con detalle Dashboard/Home
          if (routeSplit[1] !== type) //Si el tipo de menu ha cambiado
          {  router.push('/app/'+type+'/home');   }
        }
        else if (routeSplit[1] !== 'session') { //Si la ruta no es de session (Rutas session no tienen tipo mini/default/horizontal)
          if (routeSplit[1] !== type) { //Si el tipo de menu ha cambiado
            routeSplit[1] = type;
            routeSplit = routeSplit.join('/');
            router.push(routeSplit);

          }
        }
      }
    },

    toggleSearchFormHandler(state) {
        state.mobileSearchForm = !state.mobileSearchForm;
    },

    toggleHorizontalLayoutSidebarHandler(state, value) {
        state.horizontalLayoutSidebar = value;
    },

    boxLayoutHandler(state) {
        state.boxLayout = !state.boxLayout;
    },

    setMiniSidebarLayoutHandler(state, isSet) {
        state.collapseSidebar = isSet;
    },


}
