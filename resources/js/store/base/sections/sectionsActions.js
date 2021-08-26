import axios from 'axios';
import webServices from 'WebServices'

export default {
    async getSectionsList(context) {
        return await webServices.get('/sections',
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            context.commit('setSectionsList', response.data);
        }).catch(response => {
            console.log('getSectionsList ERROR', response);
        });
    },
}
