import state from './profileState'
import mutations from './profileMutations'
import actions from './profileActions'
import getters from './profileGetters'

export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}