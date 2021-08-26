import state from './projectsState.js'
import getters from './projectsGetters.js'
import actions from './projectsActions.js'
import mutations from './projectsMutations.js'

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}