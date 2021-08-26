import axios from 'axios';
export const axiosOptions = {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest',},};

export default {
    async setActiveMenuGroup(context, payload) {
        context.commit('setActiveMenuGroupHandler', payload);
    },

    async getSidebarMenu(context){
        return await axios.get('/app/api/menu-options', {}, axiosOptions)
            .then(response => {
                context.commit('setSidebarMenu', response.data);
            }).catch(response => {console.log('getSidebarMenu ERROR', response);});
    }
}
