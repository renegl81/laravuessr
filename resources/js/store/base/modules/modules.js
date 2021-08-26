import state from './modulesState.js'
import getters from './modulesGetters.js'
import actions from './modulesActions.js'
import mutations from './modulesMutations.js'

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}
