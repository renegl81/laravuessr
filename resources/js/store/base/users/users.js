import state from './usersState.js'
import mutations from './usersMutations.js'
import actions from './usersActions.js'
import getters from './usersGetters.js'

export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
