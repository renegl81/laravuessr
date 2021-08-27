import Vue from 'vue';
import Router from 'vue-router';
import Home from "./Home";

Vue.use(Router)
let location = 'window.location.href';
// let location = window.location.href;
let router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                title: 'Home ' + location
            }
        },
    ]
});

export default router
