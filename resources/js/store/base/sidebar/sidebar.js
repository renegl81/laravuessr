import state from './sidebarState.js'
import getters from './sidebarGetters.js'
import actions from './sidebarActions.js'
import mutations from './sidebarMutations.js'

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}