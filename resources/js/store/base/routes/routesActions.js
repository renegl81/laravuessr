import webServices from 'WebServices'
export const axiosOptions = {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest',},};

export default {
    async getRoutesList(context) {
        return await webServices.get('/routes',
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            context.commit('setRoutesList', response.data);
        }).catch(response => {
            console.log('getRoutesList ERROR', response);
        });
    },
}
