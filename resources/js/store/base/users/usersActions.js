import axios from 'axios'
import webServices from 'WebServices'
export const axiosOptions = {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest',},};
let webServiceBase = axios.create({
    baseURL: window.location.origin+'/',
});
export default {
    async getUsersList(context) { //Indexar todos los Usuarios
        return await axios.get('/app/api/users/users', {}, axiosOptions)
        .then(response => {
            context.commit('setUsersList', response.data);
        }).catch(response => {console.log('getUsersList ERROR', response);});
    },
    async getUsersListFromSignUp(context) { //Indexar todos los Usuarios
        return await axios.get('/app/api/users/users-from-sign-up', {}, axiosOptions)
        .then(response => {
            context.commit('setUsersList', response.data);
        }).catch(response => {console.log('getUsersList ERROR', response);});
    },

    async storeUser(context, data) { //Almacenar un Usuario
        return await new Promise((resolve, reject) => {
            webServiceBase.post('/app/users/store-user', data,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
                .then(response => {
                    // console.log("storeUser Success", response)
                    resolve(response);

                }).catch(error => {
                    // console.log("storeUser ERROR", error.response)
                    if (error.response.data.message == "Unauthenticated.") //Si el back devuelve este error, cerramos la sesión del usuario y lo enviamos al login
                    {  context.commit('auth/logoutUser', null, { root: true });  }
                    reject(error.response)
                });
        })
    },

    async storeUserWithoutLogin(context, data) { //Almacenar un Usuario
        return await new Promise((resolve, reject) => {
            webServiceBase.post('/app/users/store-user-without-login', data,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
                .then(response => {
                    // console.log("storeUser Success", response)
                    resolve(response);

                }).catch(error => {
                    // console.log("storeUser ERROR", error.response)
                    if (error.response.data.message == "Unauthenticated.") //Si el back devuelve este error, cerramos la sesión del usuario y lo enviamos al login
                    {  context.commit('auth/logoutUser', null, { root: true });  }
                    reject(error.response)
                });
        })
    },

    async updateUser(context, data) { //Editar un Usuario
        return await axios.put('/app/api/users/update-user', data, axiosOptions)
        .then(response => {
            return response;
        }).catch(response => {console.log('updateUser ERROR', response);});
    },

    async deleteUser(context, userId) { //Eliminar un Usuario
        return await axios.delete('/app/api/users/delete-user/'+userId, {}, axiosOptions)
        .then(response => {
            return response;
        }).catch(response => {console.log('deleteUser ERROR', response);});
    },

    async sendForgottenPasswordEmail(context, email) {
        return await new Promise((resolve, reject) => {
            webServiceBase.post('/app/users/forgotten-password-email', email, axiosOptions)
                .then(response => {
                    resolve(response);
                }).catch(error => {
                    reject(error.response)
                });
        })
    },

    async validateRestorePasswordToken(context, data) {
        return await new Promise((resolve, reject) => {
            webServiceBase.post('/app/users/validate-restore-password-token', data, axiosOptions)
                .then(response => {
                    resolve(response);
                }).catch(error => {
                    reject(error.response)
                });
        })
    },

    async restoreForgottenPassword(context, data) {
        return await new Promise((resolve, reject) => {
            webServiceBase.post('/app/users/restore-forgotten-password', data, axiosOptions)
                .then(response => {
                    resolve(response);
                }).catch(error => {
                    reject(error.response)
                });
        })
    },
}
