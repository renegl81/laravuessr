/**
 * Sidebar Module
 */

import { menus } from './data.js';
import axios from 'axios';

const state = {
    menus,
    menu: []
}

const getters = {
    menus: state => {
        return state.menus;
    },
    menu: state => {
        return state.menu;
    }
}

const actions = {
    setActiveMenuGroup(context, payload) {
        context.commit('setActiveMenuGroupHandler', payload);
    },

    getMenu(context){
        return axios({
            method: 'get',
            url: "/api/menu-options",
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        }).then(response => {
            context.commit('setMenu', response.data)
        }).catch(response => {
            state.message = response
            state.color = 'error'
        })
    }
}

const mutations = {
    setActiveMenuGroupHandler(state, router) {
        let fullPath = '';
        if(router.pathURL){
            fullPath = router.pathURL;
        }else{
            fullPath = router.history.current.fullPath;
        }
        let path = fullPath.split('/');
        let matchedPath = '/' + path[2] + '/' + path[3];
        for (const category in state.menus) {
            for(const menuGroup in state.menus[category]) {
                if(state.menus[category][menuGroup].items !== null) {
                    for(const matched in state.menus[category][menuGroup].items){
                        if(state.menus[category][menuGroup].items[matched].path == matchedPath || state.menus[category][menuGroup].items[matched].path == fullPath ){
                           state.menus[category][menuGroup].active = true;
                        }
                    }
                }
            }
        }
    },

    setMenu(state, data){
        state.menu = data;
        console.log(state.menu)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
