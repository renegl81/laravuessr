import axios from 'axios'
export const axiosOptions = {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest',},};
import {sidebarTypes, languages, routerAnimations, headerFilters, themes, sidebarFilters, sidebarBackgroundImages} from "./data";

export default {
    async getParametersList(context) {
      const {data} = await axios.get('/app/api/configuration/parameters', {}, axiosOptions);

      data.forEach( (parameter, index) => { //Recorremos todos los parámetros para realizar el llamado a las mutaciones respectivas que actualizaran los estados
        switch (parameter.key) {
          case 2: //Key 2 Corresponde a Favicon
            context.commit('changeFaviconHandler', parameter.value);
          break;
          case 3: //Key 3 Corresponde a Logo
            context.commit('changeLogoHandler', parameter.value);
          break;
          case 10: //Key 10 Corresponde a Lenguaje
            context.commit('changeLanguageHandler', JSON.parse(parameter.value));
          break;
          case 11: //Key 11 Corresponde a Animación de Enrutamiento
            // context.commit('changeRouterAnimationHandler', parameter.value);
          break;
          case 12: //Key 12 Corresponde a Modo Oscuro
            // context.commit('darkThemeModeHandler', ((parameter.value === 'true') ? true : false));
          break;
          case 13: //Key 13 Corresponde a Color del Header
            // context.commit('changeHeaderFilterHandler', JSON.parse(parameter.value));
          break;
          case 14: //Key 14 Corresponde a Tema del Sistema
            // context.commit('changeThemeHandler', JSON.parse(parameter.value));
          break;
          case 15: //Key 15 Corresponde a Color Barra Lateral
            // context.commit('changeSidebarFilterHandler', JSON.parse(parameter.value));
          break;
          case 16: //Key 16 Corresponde a Invertir Vista de Pagina
            // context.commit('rtlLayoutHandler', ((parameter.value === 'true') ? true : false));
          break;
          case 17: //Key 17 Corresponde a Contraer Barra Lateral
            // context.commit('collapseSidebarHandler', ((parameter.value === 'true') ? true : false));
          break;
          case 18: //Key 18 Corresponde a Barra Lateral con Imagen de Fondo
            // context.commit('sidebarBgImageHandler', ((parameter.value === 'true') ? true : false));
          break;
          case 19: //Key 19 Corresponde a Imagen Barra Lateral
            // context.commit('changeBackgroundImageHandler', JSON.parse(parameter.value));
          break;
          case 20: //Key 20 Corresponde a Tipo de Menu de Barra Lateral
            context.commit('changeMenuSidebarHandler', parameter.value);
          break;
        }
      });
    },

    async changeFavicon(context, payload) { //Favicon
      //2 es la Key para Favicon de Parámetros, es enviado de una vez en el payload

      return await axios.post('/app/api/configuration/update-parameter', payload, axiosOptions)
        .then(response => {
          context.commit('changeFaviconHandler', payload);
        }).catch(response => {console.log('changeFavicon Parameter ERROR', response);});
    },

    async changeLogo(context, payload) { //Logo
      //3 es la Key para Logo de Parámetros, es enviado de una vez en el payload

      return await axios.post('/app/api/configuration/update-parameter', payload, axiosOptions)
        .then(response => {
          context.commit('changeLogoHandler', payload);
        }).catch(response => {console.log('changeLogo Parameter ERROR', response);});
    },

    async changeLanguage(context, payload) { //Lenguaje
      const KeyParameter = 10; //10 es la Key para Lenguaje en la Tabla de Parámetros
      const Data = {'key': KeyParameter, 'payload': payload};

      return await axios.post('/app/api/configuration/update-parameter', Data, axiosOptions)
        .then(response => {
          context.commit('changeLanguageHandler', payload);
        }).catch(response => {console.log('changeLanguage Parameter ERROR', response);});
    },

    async changeRouterAnimation(context, payload) { //Animación al Cambiar de Ruta
      const KeyParameter = 11; //11 es la Key para Animación de Enrutamiento en la Tabla de Parámetros
      const Data = {'key': KeyParameter, 'payload': payload};

      return await axios.post('/app/api/configuration/update-parameter', Data, axiosOptions)
        .then(response => {
          context.commit('changeRouterAnimationHandler', payload);
        }).catch(response => {console.log('changeRouterAnimation Parameter ERROR', response);});
    },

    async darkThemeMode(context) { //Tema Modo Oscuro
      const KeyParameter = 12; //12 es la Key para Modo Oscuro en la Tabla de Parámetros
      const Data = {'key': KeyParameter};

      return await axios.post('/api/configuration/update-parameter', Data, axiosOptions)
        .then(response => {
          context.commit('darkThemeModeHandler');
        }).catch(response => {console.log('darkThemeMode Parameter ERROR', response);});
    },

    async changeHeaderFilter(context, payload) { //Color del Header
      const KeyParameter = 13; //13 es la Key para Color del Header en la Tabla de Parámetros
      const Data = {'key': KeyParameter, 'payload': payload};

      return await axios.post('/app/api/configuration/update-parameter', Data, axiosOptions)
        .then(response => {
          context.commit('changeHeaderFilterHandler', payload);
        }).catch(response => {console.log('changeHeaderFilter Parameter ERROR', response);});
    },

    async changeTheme(context, payload) { //Tema del Sistema
      const KeyParameter = 14; //14 es la Key para Tema de Pagina en la Tabla de Parámetros
      const Data = {'key': KeyParameter, 'payload': payload};

      return await axios.post('/app/api/configuration/update-parameter', Data, axiosOptions)
        .then(response => {
          context.commit('changeThemeHandler', payload);
        }).catch(response => {console.log('changeTheme Parameter ERROR', response);});
    },

    async changeSidebarFilter(context, payload) { //Color del Sidebar
      const KeyParameter = 15; //15 es la Key para Color Barra Lateral en la Tabla de Parámetros
      const Data = {'key': KeyParameter, 'payload': payload};

      return await axios.post('/app/api/configuration/update-parameter', Data, axiosOptions)
        .then(response => {
          context.commit('changeSidebarFilterHandler', payload);
        }).catch(response => {console.log('changeSidebarFilter Parameter ERROR', response);});
    },

    async rtlLayout(context) { //Invertir de Derecha-Para-Izquierda Vista de la Pagina
      const KeyParameter = 16; //16 es la Key para Invertir Vista de Pagina en la Tabla de Parámetros
      const Data = {'key': KeyParameter};

      return await axios.post('/app/api/configuration/update-parameter', Data, axiosOptions)
        .then(response => {
          context.commit('rtlLayoutHandler');
        }).catch(response => {console.log('rtlLayout Parameter ERROR', response);});
    },

    async collapseSidebar(context) { //Mantener Contraído el Sidebar
      const KeyParameter = 17; //17 es la Key para Contraer Barra Lateral en la Tabla de Parámetros
      const Data = {'key': KeyParameter};

      return await axios.post('/app/api/configuration/update-parameter', Data, axiosOptions)
        .then(response => {
          context.commit('collapseSidebarHandler');
        }).catch(response => {console.log('collapseSidebar Parameter ERROR', response);});
    },

    async backgroundImage(context) { //Activar/Desactivar Imagen de Fondo en el Sidebar
      const KeyParameter = 18; //18 es la Key para Barra Lateral con Imagen de Fondo en la Tabla de Parámetros
      const Data = {'key': KeyParameter};

      return await axios.post('/app/api/configuration/update-parameter', Data, axiosOptions)
        .then(response => {
          context.commit('sidebarBgImageHandler');
        }).catch(response => {console.log('backgroundImage Parameter ERROR', response);});
    },

    async changeBackgroundImage(context, payload) { //Imagen del Sidebar
      const KeyParameter = 19; //19 es la Key para Imagen Barra Lateral en la Tabla de Parámetros
      const Data = {'key': KeyParameter, 'payload': payload};

      return await axios.post('/app/api/configuration/update-parameter', Data, axiosOptions)
        .then(response => {
          context.commit('changeBackgroundImageHandler', payload);
        }).catch(response => {console.log('changeBackgroundImage Parameter ERROR', response);});
    },

    async changeMenuSidebar(context, payload) { //Tipo de Barra Lateral
      const KeyParameter = 20; //20 es la Key para Tipo de Menu de Parámetros
      const Data = {'key': KeyParameter, 'payload': payload};

      return await axios.post('/app/api/configuration/update-parameter', Data, axiosOptions)
        .then(response => {
          context.commit('changeMenuSidebarHandler', payload);
        }).catch(response => {console.log('changeMenuSidebar Parameter ERROR', response);});
    },


    boxLayout(context) {
        context.commit('boxLayoutHandler');
    },
    setMiniSidebarLayout(context, payload) {
        context.commit('setMiniSidebarLayoutHandler', payload);
    },
    toggleHorizontalLayoutSidebar(context, payload) {
        context.commit('toggleHorizontalLayoutSidebarHandler', payload);
    },
    toggleSearchForm(context) {
        context.commit('toggleSearchFormHandler');
    },

}
