import Nprogress from "nprogress";
import router from "../../../router";
import Vue from "vue";

export default {
    loginUser() {
        Nprogress.start();
    },
    loginUserSuccess(state, user) {
        localStorage.setItem('user', JSON.stringify(user.user));
        localStorage.setItem('roles', JSON.stringify(user.roles));
        localStorage.setItem('permissions', JSON.stringify(user.permissions));
        state.user = user.user;
        state.roles = user.roles;
        state.permissions = user.permissions;
        state.isUserSigninWithAuth0 = false
        router.push("/app/horizontal");
        setTimeout(function(){
            Vue.notify({
                group: 'loggedIn',
                type: 'success',
                text: 'Bienvenido!'
            });
        },1500);
    },
    loginUserFailure(state, error) {
        Nprogress.done();
        Vue.notify({
            group: 'loggedIn',
            type: 'error',
            text: error.message
        });
    },
    logoutUser(state) {
        state.user = null
        localStorage.removeItem('user');
        localStorage.removeItem('roles');
        localStorage.removeItem('permissions');
        router.push("/session/login");
    },
    signUpUser() {
        Nprogress.start();
    },
    signUpUserSuccess(state, user) {
        state.user = localStorage.setItem('user', user);
        // router.push("/default/dashboard/ecommerce");
        Vue.notify({
            group: 'loggedIn',
            type: 'success',
            text: 'Account Created!'
        });
    },
    signUpUserFailure(state, error) {
        Nprogress.done();
        Vue.notify({
            group: 'loggedIn',
            type: 'error',
            text: error.message
        });
    },
    signInUserWithAuth0Success(state, user) {
        state.user = user;
        localStorage.setItem('user',JSON.stringify(user));
        state.isUserSigninWithAuth0 = true;
    },
    signOutUserFromAuth0Success(state) {
        state.user = null
        localStorage.removeItem('user')
    },

}
