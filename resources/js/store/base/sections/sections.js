import state from './sectionsState.js'
import getters from './sectionsGetters.js'
import actions from './sectionsActions.js'
import mutations from './sectionsMutations.js'

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}