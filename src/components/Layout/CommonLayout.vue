<template>
    <div class="wrapper">

        <!-- top navbar-->
        <Header/>

        <!-- sidebar-->
        <CommonSidebar/>

        <!-- offsidebar-->
        <Offsidebar/>

        <!-- Main section-->
        <section class="section-container">
            <!-- Page content-->
            <router-view/>
        </section>

        <!-- Page footer-->
        <Footer/>

    </div>
</template>

<script>
    import Vue from 'vue';
    import Header from './Header'
    import Offsidebar from './Offsidebar'
    import Footer from './Footer'
    import ContentWrapper from './ContentWrapper'
    import CommonSidebar from "./CommonSidebar";
    import PersonalInfo from "../../views/CommonUser/PersonalInfo";

    Vue.component('ContentWrapper', ContentWrapper)

    export default {
        name: 'Layout',
        components: {
            Header,
            CommonSidebar,
            Offsidebar,
            Footer,
            PersonalInfo,
        },

        data() {
            return {
                userId: '',
            }
        },

        created(){
            console.log(this.$route.params.userId);
            this.userId = this.$route.params.userId;
            console.log(this.userId);
        },
        methods: {
            mounted: function () {
                console.log('mount');
            },

            // watch: function () {
            //     '$route':
            //     {
            //         handler(router)
            //         {
            //             const that = this;
            //             console.log(router.name);
            //         }
            //     }
            //
            // },

            getUserInfo: function () {

            }


        }
    }
</script>
