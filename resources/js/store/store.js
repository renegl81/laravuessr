import Vue from 'vue'
import Vuex from 'vuex'

//Template
import mail          from './template/mail';
import ecommerce     from './template/ecommerce';

//Sistema base
import auth          from './base/auth/auth';
import sidebar       from './base/sidebar/sidebar';
import settings      from './base/settings/settings';
import users         from './base/users/users';
import roles         from './base/roles/roles';
import profile       from './base/profile/profile';
import modules       from './base/modules/modules';
import sections      from './base/sections/sections';
import routes        from './base/routes/routes';
import actions       from './base/actions/actions';
import actionRoutes  from './base/actionRoutes/actionRoutes';

//ROSAGRES
import projects     from './modules/projects/projects';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
      //Template
        //chat,
        mail,
        ecommerce,
     //Sistema base
        auth,
        sidebar,
        settings,
        users,
        roles,
        profile,
        modules,
        sections,
        routes,
        actions,
        actionRoutes,    
        //Rosagres
        projects  
    }
})
