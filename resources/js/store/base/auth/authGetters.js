export default {
    user: state => {
        return state.user;
    },

    roles: state => {
        return state.roles;
    },

    permissions: state => {
        return state.permissions;
    },

    access_token: state => {
        return state.access_token;
    },

    expires_at: state => {
        return state.expires_at;
    },
}