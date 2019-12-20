<template>
    <ContentWrapper>
        <div class="content-heading">
            <div>统计信息
                <!--                <small>{{$t("dashboard.WELCOME")}}</small>-->
            </div>
        </div>
        <!-- START cards box-->
        <div class="row">
            <div class="col-xl-3 col-md-6">
                <!-- START card-->
                <div class="card flex-row align-items-center align-items-stretch border-0">
                    <div class="col-4 d-flex align-items-center bg-primary-dark justify-content-center rounded-left">
                        <em class="icon-cloud-upload fa-3x"></em>
                    </div>
                    <div class="col-8 py-3 bg-primary rounded-right">
                        <div class="h2 mt-0">1700
                            <small>条</small>
                        </div>
                        <div class="text-uppercase">已发招聘</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <!-- START card-->
                <div class="card flex-row align-items-center align-items-stretch border-0">
                    <div class="col-4 d-flex align-items-center bg-purple-dark justify-content-center rounded-left">
                        <em class="icon-globe fa-3x"></em>
                    </div>
                    <div class="col-8 py-3 bg-purple rounded-right">
                        <div class="h2 mt-0">700
                            <small>份</small>
                        </div>
                        <div class="text-uppercase">收到简历</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-12">
                <!-- START date widget-->
                <div class="card flex-row align-items-center align-items-stretch border-0">
                    <div class="col-4 d-flex align-items-center bg-green justify-content-center rounded-left">
                        <div class="text-center">
                            <!-- See formats: https://docs.angularjs.org/api/ng/filter/date-->
                            <Now class="text-sm" format="MMMM"></Now>
                            <br>
                            <Now class="h2 mt-0" format="D"></Now>
                        </div>
                    </div>
                    <div class="col-8 py-3 rounded-right">
                        <Now class="text-uppercase" format="dddd"></Now>
                        <br>
                        <Now class="h2 mt-0" format="h:mm"></Now>
                        <Now class="text-muted text-sm" format="a"></Now>
                    </div>
                </div>
                <!-- END date widget-->
            </div>
        </div>
        <div class="row">
            <!-- START bar chart-->
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <!-- START button group-->
                        <div class="float-right btn-group">
                            <b-dropdown id="ddown1" text="Monthly" size="sm" no-caret right>
                                <b-dropdown-item>Daily</b-dropdown-item>
                                <b-dropdown-item>Monthly</b-dropdown-item>
                                <b-dropdown-item>Yearly</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <!-- END button group-->
<!--                        todo 折线图？-->
                        <div class="card-title">每日趋势</div>
                    </div>
                    <div class="card-wrapper">
                        <div class="card-body">
                            <FlotChart :data="barStackedData" :options="barStackedOptions" height="250px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END bar chart-->

    </ContentWrapper>
</template>
<script>
    import Vue from 'vue'
    import VeeValidate from 'vee-validate';
    import Post from "../../model/Post";
    import Resume from "../../model/Resume";
    import Now from '@/components/Common/Now';
    import FlotChart from '@/components/Charts/Flot';

    Vue.use(VeeValidate, {
        fieldsBagName: 'formFields'  // fix issue with b-table
    })

    export default {
        data() {
            return {
                login: {
                    email: '',
                    password: '',
                    rememberme: false
                },
                postList: [],

                barStackedData: [{
                    "label": "Pending",
                    "color": "#9289ca",
                    "data": [
                        ["Pj1", 86],
                        ["Pj2", 136],
                        ["Pj3", 97],
                        ["Pj4", 110],
                        ["Pj5", 62],
                        ["Pj6", 85],
                        ["Pj7", 115],
                        ["Pj8", 78],
                        ["Pj9", 104],
                        ["Pj10", 82],
                        ["Pj11", 97],
                        ["Pj12", 110],
                        ["Pj13", 62]
                    ]
                }, {
                    "label": "Assigned",
                    "color": "#7266ba",
                    "data": [
                        ["Pj1", 49],
                        ["Pj2", 81],
                        ["Pj3", 47],
                        ["Pj4", 44],
                        ["Pj5", 100],
                        ["Pj6", 49],
                        ["Pj7", 94],
                        ["Pj8", 44],
                        ["Pj9", 52],
                        ["Pj10", 17],
                        ["Pj11", 47],
                        ["Pj12", 44],
                        ["Pj13", 100]
                    ]
                }, {
                    "label": "Completed",
                    "color": "#564aa3",
                    "data": [
                        ["Pj1", 29],
                        ["Pj2", 56],
                        ["Pj3", 14],
                        ["Pj4", 21],
                        ["Pj5", 5],
                        ["Pj6", 24],
                        ["Pj7", 37],
                        ["Pj8", 22],
                        ["Pj9", 28],
                        ["Pj10", 9],
                        ["Pj11", 14],
                        ["Pj12", 21],
                        ["Pj13", 5]
                    ]
                }],
                barStackedOptions: {
                    series: {
                        stack: true,
                        bars: {
                            align: 'center',
                            lineWidth: 0,
                            show: true,
                            barWidth: 0.6,
                            fill: 0.9
                        }
                    },
                    grid: {
                        borderColor: '#eee',
                        borderWidth: 1,
                        hoverable: true,
                        backgroundColor: '#fcfcfc'
                    },
                    tooltip: true,
                    tooltipOpts: {
                        content: (label, x, y) => x + ' : ' + y
                    },
                    xaxis: {
                        tickColor: '#fcfcfc',
                        mode: 'categories'
                    },
                    yaxis: {
                        // position: 'right' or 'left'
                        tickColor: '#eee'
                    },
                    shadowSize: 0
                },
            }
        },

        components: {
            Now,
            FlotChart,
        },

        created() {

        },
        methods: {
            validateBeforeSubmit(scope) {
                this.$validator.validateAll(scope).then((result) => {
                    if (result) {
                        console.log('Form Submitted!');
                        console.log(`Email: ${this.login.email}`)
                        console.log(`Password: ${this.login.password}`)
                        console.log(`Remember Me: ${this.login.rememberme}`)
                        return;
                    }
                    console.log('Correct them errors!');
                });
            }
        }
    }
</script>
