import axios from 'axios'
import webServices from 'WebServices'

export default {
    async getModulesList(context) {
        return await webServices.get('/modules',
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            context.commit('setModulesList', response.data);
        }).catch(response => {
            console.log('getModulesList ERROR', response);
        });
    },
    async updateStatus(context, data){
        return await webServices.put("change-status-module/"+data.id, data,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
       .then(response => {
            console.log(response)
        }).catch(response => {
            console.log(response)
        });
    },
}
