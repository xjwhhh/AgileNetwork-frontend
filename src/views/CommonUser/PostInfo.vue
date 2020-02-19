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
                                <span>
                                    <small class="mr-1">{{enterprise.location}}
                                    </small>
                                </span>
                            <span class="ml-auto">

                                </span>
                        </p>
                        <p>
                            {{enterprise.description}}
                        </p>
                    </div>
                </div>

            </div>
            <div class="col-lg-8">
                <div class="card card-default"  id="showInfo">
                    <div class="card-header d-flex align-items-center">
                        <div class="d-flex justify-content-center col">
                            <div class="h4 m-0 text-center">招聘信息</div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row py-4 justify-content-center">
                            <div class="col-12 col-sm-10">
                                <div class="form-horizontal">
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >名称</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="post.title"></p>
                                            <!--<input class="form-control" id="inputContact1" type="text" placeholder="" v-model="user.name" />-->
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >投递人数</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="post.headCount"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >薪水</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="post.salary"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >工作地点</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="post.workLocation"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >开始时间</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="post.createTime"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >结束时间</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="post.endTime"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >描述</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="post.description"></p>
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <button  class="btn btn-primary" v-on:click="showDilivery()" v-if="!showDeliver">投递简历</button>
                                        <select class="custom-select custom-select-m mb-1" v-if="showDeliver"  style="width: 200px" v-model="selectResume">
                                            <option selected="">选择简历</option>
                                            <option v-for="item in resumes"  :value="item.id">{{item.name}}</option>
                                        </select>
                                        <button  class="btn btn-green" v-on:click="dilivery()" v-if="showDeliver">确认投递</button>
                                    </div>
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
                axios.post('http://47.98.174.59:8088/api/user/'+this.$route.params.id+"/post/"+this.post.id+"/resume/"+this.selectResume,{},
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

            init:function(){
                axios.get('http://47.98.174.59:8088/api/enterprise/post/'+this.$route.params.pid).then(data=>{
                    // console.log(data.data);
                    this.post.transfer(data.data.postInfo);
                    this.enterprise.transferSimple(data.data.enterpriseInfo);
                })
                axios.get('http://47.98.174.59:8088/api/user/'+this.$route.params.id+'/resumes',{withCredentials:true}).then(data=>{
                    this.resumes=data.data;
                })
            },





            //获取用户信息
            getUserPersonalInfo: function() {
                console.log(this.$route.params.id);
                this.user.id=this.$route.params.id;
                axios.get('http://47.98.174.59:8088/api/user/'+this.$route.params.id).then(data=>{
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
                axios.put('http://47.98.174.59:8088/api/user/'+this.$route.params.id, this.user,{withCredentials:true})
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
