import Nprogress from "nprogress";
import webServices from 'WebServices'

export const axiosOptions = {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest',},};

export default {

    async signupUserWithLaravelPassport(context, payload) { //Registrar Usuario mediante Laravel Passport
        Nprogress.start();

        return await new Promise((resolve, reject) => {
            webServices.post('/auth/signup', payload, axiosOptions)
                .then(response => {
                    let info = {
                        user:         response.data.user,
                        roles:        response.data.roles,
                        permissions:  response.data.permissions,
                        access_token: response.data.access_token,
                        expires_at:   response.data.expires_at,
                    }

                    context.commit('signupUserSuccess', info);

                    setTimeout(() => {
                        Nprogress.done();
                        resolve(response);
                    }, 1000);
                }).catch(error => {
                    Nprogress.done();
                    context.commit('signupUserFailure', error.response);
                    // console.log('signupUserWithLaravelPassport ERROR', error.response);
                    reject(error.response)
                });
        })
    },

    async signInWithLaravelPassport(context, payload) { //Iniciar Sesión mediante Laravel Passport
        Nprogress.start();

        return await new Promise((resolve, reject) => {
            webServices.post('/auth/login', payload, axiosOptions)
                .then(response => {
                    let info = {
                        user:         response.data.user,
                        roles:        response.data.roles,
                        permissions:  response.data.permissions,
                        access_token: response.data.access_token,
                        expires_at:   response.data.expires_at,
                    }

                    context.commit('loginUserSuccess', info);

                    setTimeout(() => {
                        Nprogress.done();
                        resolve(response);
                    }, 500);
                }).catch(error => {
                    Nprogress.done();
                    context.commit('loginUserFailure', error.response.data);
                    // console.log('signInWithLaravelPassport ERROR', error.response);
                    reject(error.response)
                });
        })
    },

    // eslint-disable-next-line no-unused-vars
    async logoutUser(context, payload) { //Finalizar Sesión de un Usuario
        Nprogress.start();

        return await new Promise((resolve, reject) => {
            webServices.get('/auth/logout',
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
                .then(response => {
                    setTimeout(() => {
                        Nprogress.done();

                        context.commit('logoutUser');
                        resolve(response);
                    }, 500);
                }).catch(error => {
                    Nprogress.done();
                    context.commit('logoutUser');
                    // console.log("logoutUser ERROR", error.response)
                    reject(error.response.data)
                });
        })
    },

    async authenticatedUser(context) {  //Información del Usuario Autenticado en el Sistema
        Nprogress.start();

        await webServices.get('/auth/authenticated-user-data',
            {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
            .then(response => {
                let info = {
                    user: response.data.user,
                    roles: response.data.roles,
                    permissions: response.data.permissions,
                }

                setTimeout(() => {
                    Nprogress.done();
                    context.commit('reloadUserAuthData', info);
                }, 500);
            }).catch(error => {
                Nprogress.done();
                context.commit('logoutUser');
            });
    },


}
