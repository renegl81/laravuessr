import webServices from 'WebServices'

export default {
    async getActionsList(context) {

        return await webServices.get('/actions',
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            context.commit('setActionsList', response.data);
        }).catch(response => {
            console.log('getActionsList ERROR', response);
        });
    },
}
