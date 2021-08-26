import webServices from 'WebServices'
export const axiosOptions = {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest',},};

export default {
    async getActionRoutesList(context) {
        return await webServices.get('/action-routes',
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            context.commit('setActionRoutesList', response.data);
        }).catch(response => {console.log('getActionRoutesList ERROR', response);});
    },

    async updateActionRoute(context, data) {
        return await webServices.put('/update-action-route', data,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            console.log(response);
        }).catch(response => {console.log('updateActionRoute ERROR', response);});
    },
}
