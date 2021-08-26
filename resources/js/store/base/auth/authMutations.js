import router from "../../../router";
import Vue from "vue";

export default {

    signupUserSuccess(state, user) { //Registro de Usuario Exitoso
        state.user            = user.user;            localStorage.setItem('user', JSON.stringify(user.user));
        state.roles           = user.roles;           localStorage.setItem('roles', JSON.stringify(user.roles));
        state.permissions     = user.permissions;     localStorage.setItem('permissions', JSON.stringify(user.permissions));
        state.access_token    = user.access_token;    localStorage.setItem('access_token', user.access_token);
        state.expires_at      = user.expires_at;      localStorage.setItem('expires_at', user.expires_at);

        state.isUserSigninWithAuth0 = false
        Vue.notify({group: 'loggedIn', type: 'success', text: 'Bienvenido!'});
    },

    signupUserFailure(state, error) { //Registro de Usuario Fallido
        Vue.notify({group: 'loggedIn', type: 'error', text: error.data.message});
    },

    loginUserSuccess(state, user) { //Inicio de Sesión Exitoso
        state.user            = user.user;            localStorage.setItem('user', JSON.stringify(user.user));
        state.roles           = user.roles;           localStorage.setItem('roles', JSON.stringify(user.roles));
        state.permissions     = user.permissions;     localStorage.setItem('permissions', JSON.stringify(user.permissions));
        state.access_token    = user.access_token;    localStorage.setItem('access_token', user.access_token);
        state.expires_at      = user.expires_at;      localStorage.setItem('expires_at', user.expires_at);

        state.isUserSigninWithAuth0 = false

        Vue.notify({group: 'loggedIn', type: 'success', text: 'Bienvenido!'});
    },

    loginUserFailure(state, error) { //Inicio de Sesión Fallido
        Vue.notify({group: 'loggedIn', type: 'error', text: error.message});
    },

    logoutUser(state) { //Cierra de Sesión Exitoso
        state.user            = null; localStorage.removeItem('user');
        state.roles           = null; localStorage.removeItem('roles');
        state.permissions     = null; localStorage.removeItem('permissions');
        state.access_token    = null; localStorage.removeItem('access_token');
        state.expires_at      = null; localStorage.removeItem('expires_at');

        Vue.notify({group: 'loggedIn', type: 'error', text: 'Logged out'});
        router.push('/app/session/login');
    },

    reloadUserAuthData(state, user) { //Actualizar Información del Usuario Autenticado luego de cambios en los Roles de Usuarios y/o Permisos
        state.user            = user.user;            localStorage.setItem('user', JSON.stringify(user.user));
        state.roles           = user.roles;           localStorage.setItem('roles', JSON.stringify(user.roles));
        state.permissions     = user.permissions;     localStorage.setItem('permissions', JSON.stringify(user.permissions));
    },

}
