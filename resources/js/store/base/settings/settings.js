import state from './settingsState.js'
import getters from './settingsGetters.js'
import actions from './settingsActions.js'
import mutations from './settingsMutations.js'

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}
