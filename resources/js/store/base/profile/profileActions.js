import axios from 'axios'

export default{
    savePassword(context, data){
        return axios({
            method: 'post',
            url: "/app/api/profile/savePassword",
            data,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        }).then(response => {
            if(response.data.transaction.status == true){
                context.commit('setMessage', 'Se cambio exitosamente la contraseña')
                context.commit('setColor', 'success')
            }else{
                context.commit('setMessage', response.data.data)
                context.commit('setColor', 'error')
            }
        }).catch(response => {
            context.commit('setMessage', response)
            context.commit('setColor', 'error')
        });
    },

    saveData(context, data){
        return axios({
            method: 'post',
            url: "/app/api/profile/saveData",
            data,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        }).then(response => {
            console.log(response);
        }).catch(response => {
            console.log(response);
        });
    },

    getUser(context, data){
        return axios({
            method: 'post',
            url: "/app/api/profile/getUser",
            data,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        }).then(response => {
            context.commit('getUserHandler', response.data.data)
        }).catch(response => {
            console.log(response);
        });
    },

    saveImage(context, data){
        return axios({
            method: 'post',
            url: "/app/api/profile/saveImage",
            data,
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-Requested-With': 'XMLHttpRequest',
            },
        }).then(response => {
            console.log(response)
        }).catch(response => {
            console.log(response);
        });
    }
}
