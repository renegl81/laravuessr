import state from './actionRoutesState.js'
import getters from './actionRoutesGetters.js'
import actions from './actionRoutesActions.js'
import mutations from './actionRoutesMutations.js'

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}