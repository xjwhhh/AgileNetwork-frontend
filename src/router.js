import Vue from 'vue'
import Router from 'vue-router'

// Layouts
import Layout from "@/components/Layout/Layout";
import LayoutHorizontal from '@/components/Layout/LayoutHorizontal'
import LayoutPage from '@/components/Layout/LayoutPage'

import AdminLayout from "@/components/Layout/AdminLayout";
import EnterpriseLayout from "@/components/Layout/EnterpriseLayout";
import CommonLayout from "@/components/Layout/CommonLayout";
// SingleView
const SingleView = () => import ('@/views/SingleView/SingleView.vue')
// SubMenu
const SubMenu = () => import ('@/views/SubMenu/SubMenu.vue')
const Hello = () => import('@/views/SubMenu/Hello.vue');

const Login = () => import('@/views/Login/Login.vue');
const Register = () => import('@/views/Login/Register.vue');

//CommonUser
const Square = () => import('@/views/CommonUser/Square.vue');
const PersonalInfo = () => import('@/views/CommonUser/PersonalInfo.vue');
const DeliveredResume = () => import('@/views/CommonUser/DeliveredResume.vue');

//EnterpriseUser
const EnterpriseInfo=()=>import('@/views/EnterpriseUser/EnterpriseInfo.vue');
const PublishPost=()=>import('@/views/EnterpriseUser/PublishPost.vue');
const PublishedPost=()=>import('@/views/EnterpriseUser/PublishedPost.vue');
const Statistics=()=>import('@/views/EnterpriseUser/Statistics.vue');

//AdminUser
const AdminStatistics=()=>import('@/views/AdminUser/AdminStatistics.vue');
const CheckEnt=()=>import('@/views/AdminUser/CheckEnt.vue');
const CheckPost=()=>import('@/views/AdminUser/CheckPost.vue');
const CommonUserManagement=()=>import('@/views/AdminUser/CommonUserManagement.vue');
const EnterpriseUserManagement=()=>import('@/views/AdminUser/EnterpriseUserManagement.vue');

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/singleview'
        },
        {
            path: '/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        // CommonUser Pages
        {
            path: '/common',
            component: CommonLayout,
            children: [
                {
                    path: '/square',
                    component: Square
                },
                {
                    path: '/deliveredResume',
                    component: DeliveredResume,
                },
                {
                    path: '/personalInfo',
                    component: PersonalInfo
                }
            ]
        },

        {
            path: '/enterprise',
            component: EnterpriseLayout,
            children: [
                {
                    path: '/enterpriseInfo',
                    component: EnterpriseInfo,
                },
                {
                    path: '/publishPost',
                    component: PublishPost,
                },
                {
                    path: '/publishedPost',
                    component: PublishedPost,
                },
                {
                    path: '/entStatistics',
                    component: Statistics
                }
            ]
        },
        {
            path: '/admin',
            component: AdminLayout,
            children: [
                {
                    path: '/adminStatistics',
                    component: AdminStatistics,
                },
                {
                    path: '/checkEnt',
                    component: CheckEnt,
                },
                {
                    path: '/checkPost',
                    component: CheckPost,
                },
                {
                    path: '/commonUserManage',
                    component: CommonUserManagement
                },{
                    path:'/enterpriseUserManage',
                    component: EnterpriseUserManagement
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
