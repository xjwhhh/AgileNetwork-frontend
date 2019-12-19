<template>
<!--    <header class="topnavbar-wrapper">-->
<!--        &lt;!&ndash; START Top Navbar&ndash;&gt;-->
<!--        <nav class="navbar topnavbar">-->
<!--            &lt;!&ndash; START navbar header&ndash;&gt;-->
<!--            <div class="navbar-header">-->
<!--                <a class="navbar-brand" href="#/">-->
<!--                    <div class="brand-logo">-->
<!--                        <img class="img-fluid" src="img/logo.png" alt="App Logo">-->
<!--                    </div>-->
<!--                    <div class="brand-logo-collapsed">-->
<!--                        <img class="img-fluid" src="img/logo-single.png" alt="App Logo">-->
<!--                    </div>-->
<!--                </a>-->
<!--            </div>-->
<!--            &lt;!&ndash; END navbar header&ndash;&gt;-->
<!--            &lt;!&ndash; START Left navbar&ndash;&gt;-->
<!--            <ul class="navbar-nav mr-auto flex-row">-->
<!--                <li class="nav-item">-->
<!--                    &lt;!&ndash; Button used to collapse the left sidebar. Only visible on tablet and desktops&ndash;&gt;-->
<!--                     <a href="" class="nav-link d-none d-md-block d-lg-block d-xl-block" @click.prevent="toggleAsideCollapsed">-->
<!--                        <em class="fas fa-bars"></em>-->
<!--                    </a>-->
<!--                    &lt;!&ndash; Button to show/hide the sidebar on mobile. Visible on mobile only.&ndash;&gt;-->
<!--                    <a href="" class="nav-link sidebar-toggle d-md-none" @click.prevent="toggleOffcanvas">-->
<!--                        <em class="fas fa-bars"></em>-->
<!--                    </a>-->
<!--                </li>-->
<!--                &lt;!&ndash; START User avatar toggle&ndash;&gt;-->
<!--                <li class="nav-item d-none d-md-block">-->
<!--                    &lt;!&ndash; Button used to collapse the left sidebar. Only visible on tablet and desktops&ndash;&gt;-->
<!--                    <a class="nav-link" href="" @click.prevent="toggleUserBlock">-->
<!--                        <em class="icon-user"></em>-->
<!--                    </a>-->
<!--                </li>-->
<!--                &lt;!&ndash; END User avatar toggle&ndash;&gt;-->
<!--                &lt;!&ndash; START lock screen&ndash;&gt;-->
<!--                <li class="nav-item d-none d-md-block">-->
<!--                    <router-link class="nav-link" to="/lock" title="Lock screen">-->
<!--                        <em class="icon-lock"></em>-->
<!--                    </router-link>-->
<!--                </li>-->
<!--                &lt;!&ndash; END lock screen&ndash;&gt;-->
<!--            </ul>-->
<!--            &lt;!&ndash; END Left navbar&ndash;&gt;-->
<!--            &lt;!&ndash; START Right Navbar&ndash;&gt;-->
<!--            <ul class="navbar-nav flex-row">-->
<!--                &lt;!&ndash; Search icon&ndash;&gt;-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="#" data-search-open="">-->
<!--                        <em class="icon-magnifier"></em>-->
<!--                    </a>-->
<!--                </li>-->
<!--                &lt;!&ndash; Fullscreen (only desktops)&ndash;&gt;-->
<!--                <li class="nav-item d-none d-md-block">-->
<!--                    <ToggleFullscreen tag="A" class="nav-link" href="#" />-->
<!--                </li>-->
<!--                &lt;!&ndash; START Alert menu&ndash;&gt;-->
<!--                <b-nav-item-dropdown class="dropdown-list" no-caret menuClass="animated flipInX" right>-->
<!--                    <template slot="button-content">-->
<!--                        <em class="icon-bell"></em>-->
<!--                        <span class="badge badge-danger">11</span>-->
<!--                    </template>-->
<!--                    <b-dropdown-item>-->
<!--                        &lt;!&ndash; START list group&ndash;&gt;-->
<!--                        <div class="list-group">-->
<!--                            &lt;!&ndash; list item&ndash;&gt;-->
<!--                            <div class="list-group-item list-group-item-action">-->
<!--                                <div class="media">-->
<!--                                    <div class="align-self-start mr-2">-->
<!--                                        <em class="fab fa-twitter fa-2x text-info"></em>-->
<!--                                    </div>-->
<!--                                    <div class="media-body">-->
<!--                                        <p class="m-0">New followers</p>-->
<!--                                        <p class="m-0 text-muted text-sm">1 new follower</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            &lt;!&ndash; list item&ndash;&gt;-->
<!--                            <div class="list-group-item list-group-item-action">-->
<!--                                <div class="media">-->
<!--                                    <div class="align-self-start mr-2">-->
<!--                                        <em class="fas fa-envelope fa-2x text-warning"></em>-->
<!--                                    </div>-->
<!--                                    <div class="media-body">-->
<!--                                        <p class="m-0">New e-mails</p>-->
<!--                                        <p class="m-0 text-muted text-sm">You have 10 new emails</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            &lt;!&ndash; list item&ndash;&gt;-->
<!--                            <div class="list-group-item list-group-item-action">-->
<!--                                <div class="media">-->
<!--                                    <div class="align-self-start mr-2">-->
<!--                                        <em class="fas fa-tasks fa-2x text-success"></em>-->
<!--                                    </div>-->
<!--                                    <div class="media-body">-->
<!--                                        <p class="m-0">Pending Tasks</p>-->
<!--                                        <p class="m-0 text-muted text-sm">11 pending task</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            &lt;!&ndash; last list item&ndash;&gt;-->
<!--                            <div class="list-group-item list-group-item-action">-->
<!--                                <span class="d-flex align-items-center">-->
<!--                                    <span class="text-sm">More notifications</span>-->
<!--                                    <span class="badge badge-danger ml-auto">14</span>-->
<!--                                </span>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        &lt;!&ndash; END list group&ndash;&gt;-->
<!--                    </b-dropdown-item>-->
<!--                </b-nav-item-dropdown>-->
<!--                &lt;!&ndash; END Alert menu&ndash;&gt;-->
<!--                &lt;!&ndash; START Offsidebar button&ndash;&gt;-->
<!--                <li class="nav-item">-->
<!--                    <a href="" class="nav-link" @click.prevent.prevent="toggleOffsidebar">-->
<!--                        <em class="icon-notebook"></em>-->
<!--                    </a>-->
<!--                </li>-->
<!--                &lt;!&ndash; END Offsidebar.prevent menu&ndash;&gt;-->
<!--            </ul>-->
<!--            &lt;!&ndash; END Right Navbar&ndash;&gt;-->
<!--            <HeaderSearch />-->
<!--        </nav>-->
<!--        &lt;!&ndash; END Top Navbar&ndash;&gt;-->
<!--    </header>-->
</template>

<script>
    import { mapMutations } from 'vuex'
    import HeaderSearch from '@/components/Layout/HeaderSearch'
    import ToggleFullscreen from '@/components/Common/ToggleFullscreen'

    export default {
        name: 'Header',
        components: {
            HeaderSearch,
            ToggleFullscreen
        },
        methods: {
            /**
             * Triggers a window resize event when clicked
             * for plugins that needs to be redrawed
             */
            resize: e => {
                // all IE friendly dispatchEvent
                var evt = document.createEvent('UIEvents');
                evt.initUIEvent('resize', true, false, window, 0);
                window.dispatchEvent(evt);
                // modern dispatchEvent way
                // window.dispatchEvent(new Event('resize'));
            },
            ...mapMutations([
                'toggleSetting'
            ]),
            toggleOffsidebar() {
                this.toggleSetting('offsidebarOpen')
            },
            toggleOffcanvas() {
                this.toggleSetting('asideToggled')
            },
            toggleAsideCollapsed() {
                this.toggleSetting('isCollapsed')
                this.resize();
            },
            toggleUserBlock() {
                this.toggleSetting('showUserBlock')
            }
        }
    }
</script>
