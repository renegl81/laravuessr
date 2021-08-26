export default {
  //Favicon
    favicon: state => {
      return state.favicon;
    },

  //Logo
    logo: state => {
      return state.logo;
    },

  //Lenguaje
    languages: state => {
        return state.languages;
    },
    selectedLocale: state => {
        return state.selectedLocale;
    },

  //Tema Modo Oscuro
    darkTheme: state => {
        return state.darkTheme;
    },

  //Animación al Cambiar de Ruta
    routerAnimations: state => {
        return state.routerAnimations;
    },
    selectedRouterAnimation: state => {
        return state.selectedRouterAnimation;
    },

  //Color del Header
    headerFilters: state => {
        return state.headerFilters;
    },
    activeHeaderFilter: state => {
        return state.activeHeaderFilter;
    },

  //Tema del Sistema
    themes: state => {
        return state.themes;
    },
    selectedTheme: state => {
        return state.selectedTheme;
    },

  //Color del Sidebar  
    sidebarFilters: state => {
        return state.sidebarFilters;
    },
    sidebarSelectedFilter: state => {
        return state.sidebarSelectedFilter;
    },

  //Invertir de Derecha-Para-Izquierda Vista de la Pagina 
    rtlLayout: state => {
        return state.rtlLayout;
    },

  //Mantener Contraído el Sidebar  
    collapseSidebar: state => {
        return state.collapseSidebar;
    },

  //Activar/Desactivar Imagen de Fondo en el Sidebar  
    backgroundImage: state => {
        return state.backgroundImage;
    },

  //Imagen del Sidebar
    sidebarBackgroundImages: state => {
        return state.sidebarBackgroundImages;
    },
    selectedSidebarBgImage: state => {
        return state.selectedSidebarBgImage;
    },

  //Tipo de Barra Lateral
    sidebarTypes: state => {
        return state.sidebarTypes;
    },
    selectedSidebarType: state => {
        return state.selectedSidebarType;
    },


    boxLayout: state => {
        return state.boxLayout;
    },
    horizontalLayoutSidebar: state => {
        return state.horizontalLayoutSidebar;
    },
    mobileSearchForm: state => {
        return state.mobileSearchForm;
    }
}
