import axios from 'axios';
import webServices from 'WebServices'
export const axiosOptions = {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest',},};

export default {
    async getRolesList(context) { //Indexar todos los Roles
        return await webServices.get('/roles/roles',
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            context.commit('setRolesList', response.data);
        }).catch(response => {console.log('getRolesList ERROR', response);});
    },
    async storeRole(context, data) { //Almacenar un Rol
        return await webServices.post('/roles/store-role', data, 
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            console.log(response);
        }).catch(response => {console.log('storeRole ERROR', response);});
    },
    async updateRole(context, data) { //Editar un Rol
        return await webServices.put('/roles/update-role', data,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            console.log(response);
        }).catch(response => {console.log('updateRole ERROR', response);});
    },
    async deleteRole(context, data) { //Eliminar un Rol
        return await webServices.delete('/roles/delete-role/'+data,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            console.log(response);
        }).catch(response => {console.log('deleteRole ERROR', response);});
    },
    async switchPermission(context, data) { //Cambiar estado de un Permiso en un Rol
        return await webServices.post('/roles/switch-permission', data, 
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            return response;
        }).catch(response => {console.log('switchPermission ERROR', response);});
    },
    async switchRoles(context, data) { //Cambiar Roles de un Usuario
        return await webServices.post('/roles/switch-roles', data, 
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            return response;
        }).catch(response => {console.log('switchRoles ERROR', response);});
    },
    
}
