//require('./bootstrap');
import Vue from 'vue';
import App from './App';
import router from './router';
export default new Vue({
    router,
    render: h => h(App),
});
