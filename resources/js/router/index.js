import Vue from 'vue'
import Router from 'vue-router'

//routes
import horizontalRoutes from './horizontal';

// session components
const LoginOne = () => import('../views/base/session/Login');
const LockScreen = () => import('../views/base/session/LockScreen');
const ForgotPassword = () => import('../views/base/session/ForgotPassword');
const ResetPassword = () => import('../views/base/session/ResetPassword');

const Auth0CallBack = () => import('../components/Auth0Callback/Auth0Callback');

//Rosagres
const Filter = () => import('../views/modules/projects/Filter');
const ViewProject = () => import('../views/modules/projects/viewProject');
const NotFound = () => import('../components/NotFound');
Vue.use(Router)

let router =  new Router({
	mode: 'history',
	routes: [
		horizontalRoutes,
		{
			path: '/app/callback',
			component: Auth0CallBack
		},
		{
			path: '/app/session/login',
			component: LoginOne,
			meta: {
				title: 'message.login',
				breadcrumb: null
			}
		},
		{
			path: '/app/session/lock-screen',
			component: LockScreen,
			meta: {
				title: 'Lock Screen',
				breadcrumb: null
			}
		},
		{
			path: '/app/session/forgot-password',
			component: ForgotPassword,
			meta: {
				title: 'message.forgotPassword',
				breadcrumb: null
			}
		},
		{
			path: '/app/session/reset-password',
			component: ResetPassword,
			meta: {
				title: 'message.resetPassword',
				breadcrumb: null
			}
		},
        {
            path: '/app/:language/:typeProject',
            name: 'All',
            component: Filter,
            props: (route) => ({  typeProject: route.params.typeProject, language: route.params.language }) ,
            meta: {
                title: null,
                breadcrumb: null
            }
        },
        {
            path: '/app/:language/:typeProject/:typeFilter/:slug',
            name: 'Projects',
            component: Filter,
            props: (route) => ({  typeFilter: route.params.typeFilter, typeProject: route.params.typeProject, language: route.params.language, slug: route.params.slug }) ,
            meta: {
                title: null,
                breadcrumb: null
            }
        },
        {
            path: '/app/:language/:typeProject/:slugProject',
            name: 'ViewProject',
            component: ViewProject,
            props: (route) => ({ slugProject: route.params.slugProject, typeProject: route.params.typeProject, language: route.params.language }) ,
            meta: {
                title: null,
                breadcrumb: null
            }
        },
        {
            path: '/app/session/reset-password',
            component: ResetPassword,
            meta: {
                title: 'message.resetPassword',
                breadcrumb: null
            }
        },
        {
            path: '/app/404',
            name: 'not-found',
            component: NotFound,
        },
	]
})

export default router
