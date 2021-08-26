/**
 * Auth Module
 */
import Vue from 'vue'
import webServices from 'WebServices'
import firebase from 'firebase/app';
import Nprogress from 'nprogress';
import router from '../../../router';
import {
    facebookAuthProvider,
    googleAuthProvider,
    twitterAuthProvider,
    githubAuthProvider
} from '../../../firebase';

const state = {
    user: localStorage.getItem('user'),
    isUserSigninWithAuth0: Boolean(localStorage.getItem('isUserSigninWithAuth0'))
}

// getters
const getters = {
    getUser: state => {
        return state.user;
    },
    isUserSigninWithAuth0: state => {
        return state.isUserSigninWithAuth0;
    }
}

// actions
const actions = {
    signupUserWithLaravelPassport(context, payload){
        webServices.post('/signup', JSON.stringify(payload.userDetail),{ headers: {'Content-Type':'application/json'}})
        .then(response => {
                if(response.data.response.api_status){
                    context.commit('signUpUser');
                    Nprogress.done();
                    setTimeout(() => {
                        context.commit('signUpUserSuccess', payload);
                    }, 500);
                }else{
                    context.commit('signUpUserFailure', response.data.response);
                }
        })
        .catch(error => {
            console.log(error);
            console.log("Failed");
        })
    },
    signInWithLaravelPassport(context, payload){
        const { user } = payload;
        context.commit('loginUser');
        webServices.post('/login', JSON.stringify(user), { headers: {'Content-Type':'application/json'}})
            .then(response => {
                if(response.data.response.api_status){
                    Nprogress.done();
                    setTimeout(() => {
                        context.commit('loginUserSuccess', response.data.response.user);
                    }, 500);
                }else{
                    context.commit('loginUserFailure', response.data.response);
                }
        })
        .catch(error => {
            console.log(error);
            console.log("Failed");
        })
    },
    
    signInUserWithAuth0(context, payload) {
        context.commit('signInUserWithAuth0Success', payload);
    },
    signOutUserFromAuth0(context) {
        context.commit('signOutUserFromAuth0Success');
    }
}

// mutations
const mutations = {
    loginUser() {
        Nprogress.start();
    },
    loginUserSuccess(state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        state.isUserSigninWithAuth0 = false
        router.push("/default/home");
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
        router.push("/session/login");
    },
    signUpUser() {
        Nprogress.start();
    },
    signUpUserSuccess(state, user) {
        state.user = localStorage.setItem('user', user);
        router.push("/default/dashboard/ecommerce");
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
