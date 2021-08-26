import primaryTheme from "Themes/primaryTheme";
import dangerTheme from "Themes/dangerTheme";
import warningTheme from "Themes/warningTheme";
import infoTheme from "Themes/infoTheme";
import accentTheme from "Themes/accentTheme";
import successTheme from "Themes/successTheme";

//Sidebar Type - Tipo de Barra Lateral
export const sidebarTypes = [
   'mini',
   'default',
   'horizontal',
]

//Languajes - Lenguajes
export const languages = [
   {
      name: "English",
      icon: "en",
      locale: "en"
   },
   {
      name: "Spanish",
      icon: "es",
      locale: "es"
   },
   {
      name: "French",
      icon: "fr",
      locale: "fr"
   },
]

//Router Animations - Animación al Cambiar de Ruta
export const routerAnimations = [
   'slideInUp',
   'fadeIn',
   'slideInRight',
   'bounce',
   'lightSpeedIn',
   'pulse'
]

//Header Filter - //Color del Header
export const headerFilters = [
   {
      id: 1,
      class: "primary"
   },
   {
      id: 2,
      class: "light"
   },
   {
      id: 3,
      class: "warning"
   },
   {
      id: 4,
      class: "success"
   },
   {
      id: 5,
      class: "error"
   },
   {
      id: 6,
      class: "info"
   }
]

//Themes - Tema del Sistema
export const themes = [
   {
      id: 1,
      bgColor: "bg-primary",
      theme: primaryTheme
   },
   {
      id: 2,
      bgColor: "bg-warning",
      theme: warningTheme
   },
   {
      id: 3,
      bgColor: "bg-success",
      theme: successTheme
   },
   {
      id: 4,
      bgColor: "bg-danger",
      theme: dangerTheme
   },
   {
      id: 5,
      bgColor: "bg-info",
      theme: infoTheme
   },
   {
      id: 6,
      bgColor: "bg-secondary",
      theme: accentTheme
   }
]

//Sidebar Filters - Color del Sidebar
export const sidebarFilters = [
   {
      id: 1,
      class: 'sidebar-overlay-dark',
      name: 'message.dark'
   },
   {
      id: 2,
      class: 'sidebar-overlay-light',
      name: 'message.light'
   },
   {
      id: 3,
      class: 'sidebar-overlay-pink',
      name: 'message.danger'
   },
   {
      id: 4,
      class: 'sidebar-overlay-primary',
      name: 'message.primary'
   },
   {
      id: 5,
      class: 'sidebar-overlay-warning',
      name: 'message.warning'
   },
   {
      id: 6,
      class: 'sidebar-overlay-success',
      name: 'message.success'
   },
   {
      id: 7,
      class: 'sidebar-overlay-purple',
      name: 'message.info'
   }
]

//Sidebar Background Images - Imagen del Sidebar
export const sidebarBackgroundImages = [
   {
      id: 1,
      url: '/static/img/sidebar-1.jpg'
   },
   {
      id: 2,
      url: '/static/img/sidebar-2.jpg'
   },
   {
      id: 3,
      url: '/static/img/sidebar-3.jpg'
   },
   {
      id: 4,
      url: '/static/img/sidebar-4.jpg'
   },
]








