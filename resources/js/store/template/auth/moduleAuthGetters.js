export default {
    getUser: state => {
        return state.user;
    },
    isUserSigninWithAuth0: state => {
        return state.isUserSigninWithAuth0;
    }
}
