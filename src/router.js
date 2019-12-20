import Vue from 'vue'
import Router from 'vue-router'


import AdminLayout from "@/components/Layout/AdminLayout";
import EnterpriseLayout from "@/components/Layout/EnterpriseLayout";
import CommonLayout from "@/components/Layout/CommonLayout";


const Login = () => import('@/views/Login/Login.vue');
// import Login from '@/views/Login/Login';
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
const ResumeInfo=()=>import('@/views/EnterpriseUser/ResumeInfo.vue');

//AdminUser
const AdminStatistics=()=>import('@/views/AdminUser/AdminStatistics.vue');
const CheckEnt=()=>import('@/views/AdminUser/CheckEnt.vue');
const CheckPost=()=>import('@/views/AdminUser/CheckPost.vue');
const CommonUserManagement=()=>import('@/views/AdminUser/CommonUserManagement.vue');
const EnterpriseUserManagement=()=>import('@/views/AdminUser/EnterpriseUserManagement.vue');
const ShowEntInfo=()=> import('@/views/AdminUser/ShowEntInfo.vue');
const ShowCommonInfo=()=> import('@/views/AdminUser/ShowCommonInfo.vue');


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/login'
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
            path: '/common/:id',
            name:'commonLayout',
            component: CommonLayout,
            children: [
                {
                    path: 'square',
                    name:'square',
                    component: Square
                },
                {
                    path: 'deliveredResume',
                    name:'deliveredResume',
                    component: DeliveredResume,
                },
                {
                    path: 'personalInfo',
                    name:'personalInfo',
                    component: PersonalInfo
                }
            ]
        },

        {
            path: '/enterprise/:id',
            component: EnterpriseLayout,
            name:'enterpriseLayout',
            children: [
                {
                    path: 'enterpriseInfo',
                    name:'enterpriseInfo',
                    component: EnterpriseInfo,
                },
                {
                    path: 'publishPost',
                    name:'publishPost',
                    component: PublishPost,
                },
                {
                    path: 'publishedPost',
                    name:'publishedPost',
                    component: PublishedPost,
                },
                {
                    path: 'entStatistics',
                    name:'entStatistics',
                    component: Statistics
                },
                {
                    path:'ResumeInfo/:userId',
                    name:'entResumeInfo',
                    component:ResumeInfo,
                }
            ]
        },
        {
            path: '/admin/:id',
            component: AdminLayout,
            name:'adminLayout',
            children: [
                {
                    path: 'adminStatistics',
                    name:'adminStatistics',
                    component: AdminStatistics,
                },
                {
                    path: 'checkEnt',
                    name:'checkEnt',
                    component: CheckEnt,
                },
                {
                    path: 'checkPost',
                    name:'checkPost',
                    component: CheckPost,
                },
                {
                    path: 'commonUserManage',
                    name:'commonUserManage',
                    component: CommonUserManagement
                },{
                    path:'enterpriseUserManage',
                    name:'enterpriseUserManage',
                    component: EnterpriseUserManagement
                },{
                    path:'showCommonInfo/:commonId',
                    name:'showCommonInfo',
                    component:ShowCommonInfo,
                },{
                    path:'showEntInfo/:entId',
                    name:'showEntInfo',
                    component:ShowEntInfo,
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
