<template>
    <div class="wrapper">

        <!-- top navbar-->
        <Header />

        <!-- sidebar-->
        <AdminSidebar />

        <!-- offsidebar-->
        <Offsidebar />

        <!-- Main section-->
        <section class="section-container">
            <!-- Page content-->
            <router-view/>
        </section>

        <!-- Page footer-->
        <Footer />

    </div>
</template>

<script>
    import Vue from 'vue';
    import Header from './Header'
    import Sidebar from './Sidebar'
    import AdminSidebar from "./AdminSidebar";
    import Offsidebar from './Offsidebar'
    import Footer from './Footer'
    import ContentWrapper from './ContentWrapper'
    import CommonUserMenu from "../../assets/commonUserMenu";

    Vue.component('ContentWrapper', ContentWrapper)

    export default {
        name: 'Layout',
        data(){
            return{
                CommonUserMenu,
            }
        },
        components: {
            Header,
            Sidebar,
            AdminSidebar,
            Offsidebar,
            Footer
        },
    }
</script>
