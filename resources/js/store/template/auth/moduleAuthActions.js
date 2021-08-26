import webServices from 'WebServices'
import Nprogress from "nprogress";

export default {
    signupUserWithLaravelPassport(context, payload){
        webServices.post('/auth/signup', JSON.stringify(payload.userDetail),{ headers: {'Content-Type':'application/json'}})
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
    async signInWithLaravelPassport(context, payload){
        const { user } = payload;
        context.commit('loginUser');
        await webServices.post('/auth/login', JSON.stringify(user), { headers: {'Content-Type':'application/json'}})
            .then(response => {
                if(response.data.response.api_status){
                    Nprogress.done();
                    setTimeout(() => {
                        let data = {user: response.data.response.user, roles: response.data.response.roles, permissions: response.data.response.permissions}
                        context.commit('loginUserSuccess', data);
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
