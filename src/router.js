import Vue from 'vue'
import Router from 'vue-router'

// Layouts
import Layout from '@/components/Layout/Layout'
import LayoutHorizontal from '@/components/Layout/LayoutHorizontal'
import LayoutPage from '@/components/Layout/LayoutPage'
// SingleView
const SingleView = () => import ('@/views/SingleView/SingleView.vue')
// SubMenu
const SubMenu = () => import ('@/views/SubMenu/SubMenu.vue')
const Hello=() => import('@/views/SubMenu/Hello.vue');
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        redirect: '/singleview'
    },
        // Admin Pages
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '/singleview',
                    component: SingleView
                }, {
                    path: '/submenu',
                    component: SubMenu
                }, {
                    path: '/hello',
                    component: Hello
                }
            ]
        },
        // Not found route
        {
            path: '*',
            redirect: '/'
        }
    ]
})
