import {sidebarTypes, languages, routerAnimations, headerFilters, themes, sidebarFilters, sidebarBackgroundImages} from "./data";

export default {

  //Favicon
    favicon: null,                                         // Favicon de la Pagina 

  //Logo
    logo: null,                                            // Logo de la Pagina

  //Lenguaje 
    languages,                                             // Languajes
    selectedLocale: languages[1],                          // Languaje Selected

  //Animación al Cambiar de Ruta  
    routerAnimations,                                      // Router Animations
    selectedRouterAnimation: routerAnimations[0],          // Selected Router Animation

  //Tema Modo Oscuro
    darkTheme: false,                                      // Dark Mode Theme  

  //Color del Header  
    headerFilters,                                         // Header Filters
    activeHeaderFilter: headerFilters[1],                  // Selected Header Filter

  //Tema del Sistema
    themes,                                                // Themes
    selectedTheme: themes[0],                              // Selected Theme

  //Color del Sidebar  
    sidebarFilters,                                        // Sidebar Filters
    sidebarSelectedFilter: sidebarFilters[0],              // Selected Sidebar Filter

  //Invertir de Derecha-Para-Izquierda Vista de la Pagina  
    rtlLayout: false,                                      // Right-To-Left Layout Sidebar

  //Mantener Contraído el Sidebar  
    collapseSidebar: false,                                // Collapse Sidebar

  //Activar/Desactivar Imagen de Fondo en el Sidebar  
    backgroundImage: false,                                // Sidebar with background image

  //Imagen del Sidebar  
    sidebarBackgroundImages,                               // Sidebar Background Images
    selectedSidebarBgImage: sidebarBackgroundImages[0],    // Selected Image To Sidebar Background

  //Tipo de Barra Lateral
    sidebarTypes,                                          // Sidebar Types
    selectedSidebarType: sidebarTypes[2],                  // Sidebar Selected 


    horizontalLayoutSidebar: false,                        // horizontal layout sidebar
    
    mobileSearchForm: false,							   // Is Mobile Search Form Open
}
