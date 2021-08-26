export default {
    getUserHandler(state, value){
        state.userInfo = value;
    },
    setMessage(state, value){
        state.message = value;
    },
    setColor(state, value){
        state.color = value;
    }
}