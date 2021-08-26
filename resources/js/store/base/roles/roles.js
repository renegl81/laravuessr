import state from './rolesState.js'
import mutations from './rolesMutations.js'
import actions from './rolesActions.js'
import getters from './rolesGetters.js'

export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
