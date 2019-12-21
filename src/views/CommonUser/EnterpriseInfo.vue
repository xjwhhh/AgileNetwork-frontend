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
                            <div class="card">
                                <div class="card-body bg-primary" >
                                    <!--<a :href="'/common/' + this.user.id + '/postInfo/1'">-->
                                    <!--<h3 class="my-3">急招聘Java工程师</h3>-->
                                    <!--</a>-->
                                    <router-link  :to="{name:'postInfo', params: { pid: 1 }}"><h3 class="my-3">急招聘Java工程师</h3></router-link>

                                </div>
                                <div class="card-body">
                                    <p class="d-flex">
                                <span>
                                    <small class="mr-1">by
                                        <router-link :to="{name:'commonEnterpriseInfo', params: { eid: 1 }}" class="ml-1" style="color: #6c757d">华为</router-link>
                                    </small>
                                    <small class="mr-1">2018/23/23</small>
                                </span>
                                        <span class="ml-auto">

                                </span>

                                    </p>
                                    <p>
                                        华为公司几招一个是阿斯顿发，工作地点在算法，饱餐三，阿迪舒服哈死的份 啥傻傻打发时间的飞机啊 等哈发哈点话费
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body bg-primary" >
                                    <!--<a :href="'/common/' + this.user.id + '/postInfo/1'">-->
                                    <!--<h3 class="my-3">急招聘Java工程师</h3>-->
                                    <!--</a>-->
                                    <router-link  :to="{name:'postInfo', params: { pid: 1 }}"><h3 class="my-3">急招聘Java工程师</h3></router-link>

                                </div>
                                <div class="card-body">
                                    <p class="d-flex">
                                <span>
                                    <small class="mr-1">by
                                        <router-link :to="{name:'commonEnterpriseInfo', params: { eid: 1 }}" class="ml-1" style="color: #6c757d">华为</router-link>
                                    </small>
                                    <small class="mr-1">2018/23/23</small>
                                </span>
                                        <span class="ml-auto">

                                </span>

                                    </p>
                                    <p>
                                        华为公司几招一个是阿斯顿发，工作地点在算法，饱餐三，阿迪舒服哈死的份 啥傻傻打发时间的飞机啊 等哈发哈点话费
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body bg-primary" >
                                    <!--<a :href="'/common/' + this.user.id + '/postInfo/1'">-->
                                    <!--<h3 class="my-3">急招聘Java工程师</h3>-->
                                    <!--</a>-->
                                    <router-link  :to="{name:'postInfo', params: { pid: 1 }}"><h3 class="my-3">急招聘Java工程师</h3></router-link>

                                </div>
                                <div class="card-body">
                                    <p class="d-flex">
                                <span>
                                    <small class="mr-1">by
                                        <router-link :to="{name:'commonEnterpriseInfo', params: { eid: 1 }}" class="ml-1" style="color: #6c757d">华为</router-link>
                                    </small>
                                    <small class="mr-1">2018/23/23</small>
                                </span>
                                        <span class="ml-auto">

                                </span>

                                    </p>
                                    <p>
                                        华为公司几招一个是阿斯顿发，工作地点在算法，饱餐三，阿迪舒服哈死的份 啥傻傻打发时间的飞机啊 等哈发哈点话费
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body bg-primary" >
                                    <!--<a :href="'/common/' + this.user.id + '/postInfo/1'">-->
                                    <!--<h3 class="my-3">急招聘Java工程师</h3>-->
                                    <!--</a>-->
                                    <router-link  :to="{name:'postInfo', params: { pid: 1 }}"><h3 class="my-3">急招聘Java工程师</h3></router-link>

                                </div>
                                <div class="card-body">
                                    <p class="d-flex">
                                <span>
                                    <small class="mr-1">by
                                        <router-link :to="{name:'commonEnterpriseInfo', params: { eid: 1 }}" class="ml-1" style="color: #6c757d">华为</router-link>
                                    </small>
                                    <small class="mr-1">2018/23/23</small>
                                </span>
                                        <span class="ml-auto">

                                </span>

                                    </p>
                                    <p>
                                        华为公司几招一个是阿斯顿发，工作地点在算法，饱餐三，阿迪舒服哈死的份 啥傻傻打发时间的飞机啊 等哈发哈点话费
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
            }
        },

        created(){
            // this.getUserPersonalInfo();
            this.init();
        },
        methods: {

            showDilivery:function(){
                this.showDeliver = true;
            },

            dilivery:function(){
                console.log(this.selectResume);
                this.showDeliver = false;
                axios.post('http://118.25.180.45:8088/api/user/'+this.$route.params.id+"/post/"+this.post.id+"/resume/"+this.selectResume,{},
                    {withCredentials:true})
                    .then(function (response) {
                        // this.user.avatar = response.data.avatar
                        swal({
                            title: "投递成功",
                            heightAuto: false
                        })
                    }.bind(this)).catch(function (error) {
                    // console.log("ree",error)
                    swal({
                        title: "投递失败",
                        heightAuto: false
                    })
                });
            },


            hello:function(info){
                this.changeInfo = true;
            },

            //获取企业信息
            getEnterpriseInfo: function(id) {
                EntAPI.getEnterpriseById(id).then(data=>{
                    console.log(data);
                    this.enterprise.transfer(data);
                })
            },

            init:function(){
                console.log(this.$route.params.eid);
                this.getEnterpriseInfo(this.$route.params.eid)
            },





            //获取用户信息
            getUserPersonalInfo: function() {
                console.log(this.$route.params.id);
                this.user.id=this.$route.params.id;
                axios.get('http://118.25.180.45:8088/api/user/'+this.$route.params.id).then(data=>{
                    // console.log(data);
                    this.user.transfer(data.data);
                    //console.log("--->user",this.user.avatar)

                })
                this.imageSrc = this.user.avatar
                // console.log(this.user)
            },

            //更新用户信息
            confirmChangeInfo:function () {
                // console.log(this.user);
                axios.put('http://118.25.180.45:8088/api/user/'+this.$route.params.id, this.user,{withCredentials:true})
                    .then(function (response) {
                        // do something...
                        // console.log("my",response)
                        this.closeInfo();
                        // swal({
                        //     title: "更新失败意格式问题",
                        //     heightAuto: false
                        // })
                    }.bind(this)).catch(function (error) {
                    // console.log("ree",error)
                    swal({
                        title: "更新失败，请注意格式问题",
                        heightAuto: false
                    })
                });
            },



            //获取用户已投递简历
            getUserDeliveredResume:function () {

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