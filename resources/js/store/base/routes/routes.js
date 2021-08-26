import state from './routesState.js'
import getters from './routesGetters.js'
import actions from './routesActions.js'
import mutations from './routesMutations.js'

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}