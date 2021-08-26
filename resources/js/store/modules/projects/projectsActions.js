import webServices from 'WebServices';

export default {
    async getProjectsTypeList(context) {
        return await webServices.get('/projects/project-types',
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            context.commit('setProjectsTypeList', response.data);
        }).catch(response => {console.log('getProjectsTypeList ERROR', response);});
    },

    async getProjectsSubTypeList(context, idProjectType) {
        return await webServices.get('/projects/project-subtypes/'+idProjectType,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            context.commit('setProjectsSubTypeList', response.data);
        }).catch(response => {console.log('getProjectsSubTypeList ERROR', response);});
    },

    async getCategoriesList(context, idProjectType) {
        return await webServices.get('/projects/get-categories/'+idProjectType,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            context.commit('setCategoriesList', response.data);
        }).catch(response => {console.log('getCategoriesList ERROR', response);});
    },

    async storeProject(context, data) {
        return await new Promise((resolve, reject) => {
            webServices.post('projects/store', data,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
                .then(response => {
                    resolve(response);
                }).catch(error => {
                    if (error.response.data.message == "Unauthenticated.")
                    {  context.commit('auth/logoutUser', null, { root: true });  }
                    reject(error.response)
                });
        })
    },

    async getInfoToFilter(context, nameProjectType) {
        return await webServices.get('/projects/get-info-to-filter/'+nameProjectType,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json'},})
        .then(response => {
            return response;
        }).catch(response => {console.log('getInfoToFilter ERROR', response);});
    },

    async getInfoToOptionsFilter(context, slug) {
        return await webServices.get('/projects/get-info-to-options-filter/'+slug,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json'},})
        .then(response => {
            return response;
        }).catch(response => {console.log('getInfoToOptionsFilter ERROR', response);});
    },

    async getProjectsBySubtype(context, idSubtype) {
        return await webServices.get('/projects/get-projects-by-subtype/'+idSubtype,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json'},})
        .then(response => {
            return response;
        }).catch(response => {console.log('getProjectsBySubtype ERROR', response);});
    },

    async getProjectsList(context, nameProjectType) {
        return await webServices.get('/projects/get-project-to-manage/'+nameProjectType,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            context.commit('setProjectsList', response.data);
        }).catch(response => {console.log('getProjectsList ERROR', response);});
    },

    async editProject(context, data) {
        return await webServices.get('/projects/find-project/'+data.id+'/'+data.typeProject,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
        .then(response => {
            return response;
        }).catch(response => {console.log('editProject ERROR', response);});
    },

    async deleteImageSaved(context, id) {
        return await new Promise((resolve, reject) => {
            webServices.get('projects/delete-image-saved/'+id,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
                .then(response => {
                    resolve(response);
                }).catch(error => {
                    if (error.response.data.message == "Unauthenticated.")
                    {  context.commit('auth/logoutUser', null, { root: true });  }
                    reject(error.response)
                });
        })
    },

    async deleteProject(context, id) {
        return await new Promise((resolve, reject) => {
            webServices.get('projects/delete-project/'+id,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
                .then(response => {
                    resolve(response);
                }).catch(error => {
                    if (error.response.data.message == "Unauthenticated.")
                    {  context.commit('auth/logoutUser', null, { root: true });  }
                    reject(error.response)
                });
        })
    },

    async getProjectDetail(context, id) {
        return await webServices.get('/projects/get-project-detail/'+id,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json'},})
        .then(response => {
            return response;
        }).catch(response => {console.log('getProjectDetail ERROR', response);});
    },

    async updateProject(context, data) {
        return await new Promise((resolve, reject) => {
            webServices.post('projects/update/'+data.id, data.data,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
                .then(response => {
                    resolve(response);
                }).catch(error => {
                    if (error.response.data.message == "Unauthenticated.")
                    {  context.commit('auth/logoutUser', null, { root: true });  }
                    reject(error.response)
                });
        })
    },

    async getProjectsByTag(context, id) {
        return await webServices.get('/projects/projects-by-tag/'+id,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json'},})
        .then(response => {
            return response;
        }).catch(response => {console.log('getProjectsByTag ERROR', response);});
    },

    async getProjectBySlug(context, slug) {
        return await webServices.get('projects/project-by-slug/'+slug,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json'},})
        .then(response => {
            return response;
        }).catch(response => {console.log('getProjectBySlug ERROR', response);});
    },

    async editTagsImage(context, data) {
        return await new Promise((resolve, reject) => {
            webServices.post('projects/edit-tags-image/', data,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
                .then(response => {
                    resolve(response);
                }).catch(error => {
                    if (error.response.data.message == "Unauthenticated.")
                    {  context.commit('auth/logoutUser', null, { root: true });  }
                    reject(error.response)
                });
        })
    },

    async editMainImage(context, data) {
        return await new Promise((resolve, reject) => {
            webServices.post('projects/edit-main-image/', data,
                {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}`},})
                .then(response => {
                    resolve(response);
                }).catch(error => {
                    if (error.response.data.message == "Unauthenticated.")
                    {  context.commit('auth/logoutUser', null, { root: true });  }
                    reject(error.response)
                });
        })
    },
}
