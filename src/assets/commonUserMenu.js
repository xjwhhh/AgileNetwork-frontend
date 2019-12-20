const CommonUserMenu = [
    {
        heading: 'Main Navigation',
        translate: 'sidebar.heading.HEADER'
    },
    {
        icon:' mr-2 fas fa-list',
        name:'广场',
        path:'square',
        routerName:'square',
    },
    {
        icon:'mr-2 far fa-credit-card',
        name:'简历管理',
        path:'deliveredResume',
        routerName:'deliveredResume',
    },
    {
        icon:'mr-2 far fa-address-card',
        name:'个人中心',
        path:'personalInfo',
        routerName:'personalInfo',
    }
];

export default CommonUserMenu;
