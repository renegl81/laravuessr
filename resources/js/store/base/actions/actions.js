import state from './actionsState.js'
import getters from './actionsGetters.js'
import actions from './actionsActions.js'
import mutations from './actionsMutations.js'

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}
