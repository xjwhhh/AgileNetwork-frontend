<template>
    <ContentWrapper>
        <div class="row">
            <div class="col-lg-4">


                <div class="card">
                    <div class="card-body bg-green">
                        <h3 class="my-3">{{enterprise.name}}</h3>
                    </div>
                    <div class="card-body">
                        <p class="d-flex">

                        <p class="mr-1">公司地址:  {{enterprise.location}}</p>
                        <p>入驻时间:  {{enterprise.createTime}}</p>
                        <p>
                            联系电话:  {{enterprise.mobile}}
                        </p>
                        <p>
                            具体信息:  {{enterprise.description}}
                        </p>
                    </div>
                </div>

            </div>
            <div class="col-lg-8">
                <div class="card card-default">
                    <div class="card-header d-flex align-items-center">
                        <div class="d-flex justify-content-center col">
                            <div class="h4 m-0 text-center">招聘信息列表</div>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="card-columns">
                            <div class="card"   v-for="item in allPost">
                                <div class="card-body bg-primary" >
                                    <!--<a :href="'/common/' + this.user.id + '/postInfo/1'">-->
                                    <!--<h3 class="my-3">急招聘Java工程师</h3>-->
                                    <!--</a>-->
                                    <router-link  :to="{name:'postInfo', params: { pid: item.postInfo.id }}"><h3 class="my-3">{{item.postInfo.title}}</h3></router-link>

                                </div>
                                <div class="card-body">
                                    <p class="d-flex">
                                <span>
                                    <small class="mr-1">by
                                        <router-link :to="{name:'commonEnterpriseInfo', params: { eid: item.postInfo.accountId }}" class="ml-1" style="color: #6c757d">{{item.enterpriseInfo.enterpriseName}}</router-link>
                                    </small>
                                    <small class="mr-1">{{item.postInfo.createTime.substr(0,10)}}</small>
                                </span>
                                        <span class="ml-auto">

                                </span>

                                    </p>
                                    <p>
                                        {{item.postInfo.description}}
                                    </p>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>





            </div>
        </div>
    </ContentWrapper>
</template>

<script>
    import axios from 'axios'
    import swal from 'sweetalert2'
    import Notifications from 'vue-notification'
    // import Vue from 'Vue'
    import qs from 'qs'
    // Vue.prototype.$axios = axios


    import CommonUser from "../../model/CommonUser";
    import Post from "../../model/Post"
    import Enterprise from "../../model/EnterpriseUser" ;   //import  simple enterprise
    import Vue from 'vue'
    import VueCropper from 'vue-cropper'
    import EntAPI from '../../service/EnterpriseService';

    Vue.use(VueCropper)


    export default {
        name:'postInfo',
        data () {
            return {
                aboutMsg: '我是postinfo组件',
                user:new CommonUser(),
                showDeliver:false,
                post:new Post(),
                enterprise:new Enterprise(),
                selectResume:'',
                resumes:new Array(),
                allPost:new Array()
            }
        },

        created(){
            // this.getUserPersonalInfo();
            this.init();
        },
        methods: {
            //获取企业信息
            getEnterpriseInfo: function(id) {
                EntAPI.getEnterpriseById(id).then(data=>{
                    console.log(data);
                    this.enterprise.transfer(data);
                })

                axios.get('http://118.25.180.45:8088/api/enterprise/'+id+'/posts',
                    {withCredentials:true})
                    .then(function (response) {
                        this.allPost = response.data
                        console.log("1231321")
                        console.log(response.data[0].postInfo.title)
                    }.bind(this)).catch(function (error) {
                });




            },

            init:function(){
                console.log(this.$route.params.eid);
                this.getEnterpriseInfo(this.$route.params.eid)
            },




        },
    }
</script>


<style scoped>
    .multi-chosen a{
        padding: 5px;
    }
    .multi-chosen a:link{
        text-decoration: none;
        color: #656565;
    }
    .multi-chosen a:hover{
        background: #00bfe4;
        color: white;
    }
    .multi-chosen a:active{
        background: #00bfe4;
        color: white;
    }
    .multi-chosen{
        /*float: left;*/
        margin-right: 5px;
        padding: 5px 8px;
        height: 34px;
        line-height: 14px;
    }
    .card-body a{
        text-decoration: none;
        color: white;
    }
    .card-columns .card{
        background: aliceblue;
    }



</style>