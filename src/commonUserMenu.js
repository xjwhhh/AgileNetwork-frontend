const CommonUserMenu = [
    {
        heading: 'Main Navigation',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Single View',
        path: 'singleview',
        icon : 'icon-grid',
        translate: 'sidebar.nav.SINGLEVIEW'
    },
    {
        name: 'Menu',
        icon: 'icon-speedometer',
        translate: 'sidebar.nav.MENU',
        label: { value: 1, color: 'info' },
        submenu: [{
            name: 'Submenu',
            translate: 'sidebar.nav.SUBMENU',
            path: 'submenu'
        },{
            name:'hello',
            translate: '',
            path:'hello'
        }]
    },
    {
        name:'广场',
        path:'square'
    },
    {
        name:'已投简历',
        path:'deliveredResume'
    },
    {
        name:'个人中心',
        path:'personalInfo'
    }
];

export default CommonUserMenu;
