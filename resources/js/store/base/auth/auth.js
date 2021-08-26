import state from './authState.js'
import getters from './authGetters.js'
import actions from './authActions.js'
import mutations from './authMutations.js'

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}