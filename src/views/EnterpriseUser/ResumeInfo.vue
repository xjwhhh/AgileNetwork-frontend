<template>
    <div class="card card-default" id="showInfo">


        <div class="card-header d-flex align-items-center">
            <div class="d-flex justify-content-center col">
                <div class="h4 m-0 text-center">简历信息
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row py-4 justify-content-center">
                <div class="col-12 col-sm-10">
                    <div class="form-horizontal">
                        <div class="form-group row">
                            <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >名称</label>
                            <div class="col-xl-10 col-md-9 col-8">
                                <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.name"></p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >邮箱</label>
                            <div class="col-xl-10 col-md-9 col-8">
                                <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.email"></p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >大学</label>
                            <div class="col-xl-10 col-md-9 col-8">
                                <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.university"></p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >学位</label>
                            <div class="col-xl-10 col-md-9 col-8">
                                <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.education"></p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >年龄</label>
                            <div class="col-xl-10 col-md-9 col-8">
                                <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.age"></p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >性别</label>
                            <div class="col-xl-10 col-md-9 col-8">
                                <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.gender"></p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >手机</label>
                            <div class="col-xl-10 col-md-9 col-8">
                                <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.mobile"></p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >简历</label>
                            <div class="col-xl-10 col-md-9 col-8">
                                <a class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" href="#">简历url</a>
                            </div>
                        </div>
                        <div class="form-group row">
                        <router-link :to="{name:'publishedPost'}">
                            <button  class="btn btn-secondary btn-sm" type="button">返回</button>
                        </router-link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'

    import CommonUser from "../../model/CommonUser";
    import EnterpriseUser from "../../model/EnterpriseUser";

    export default {

        data(){
            return{
                user:new CommonUser(),
                enterprise:new EnterpriseUser(),
            }
        },

        created(){

        },
        methods:{

            //获取用户信息
            getUserPersonalInfo: function() {
                console.log(this.$route.params['postId']);
                console.log(this.$route.params['userId']);
                this.user.id=this.$route.params['userId'];
                axios.get('http://118.25.180.45:8088/api/user/'+this.user.id).then(data=>{
                    console.log(data);
                    this.user.transfer(data.data);
                });
                console.log(this.user)
            },

        },


    }
</script>
