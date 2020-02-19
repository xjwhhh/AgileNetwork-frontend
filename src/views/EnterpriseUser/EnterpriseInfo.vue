<template>
    <ContentWrapper>
        <div class="row">
            <div class="col-lg-4">
                <div class="card card-default">
                    <div class="card-body text-center">
                        <div class="py-4">
                            <img class="img-fluid rounded-circle img-thumbnail thumb96" v-bind:src="enterprise.headUrl" alt="Contact" />
                        </div>
                        <h3 class="m-0 text-bold" v-if="!ifEdit">{{enterprise.name}}</h3>
                        <input class="form-control" v-if="ifEdit" type="text" placeholder="请输入名字" v-model="enterprise.name" />
                        <h4 class="m-0 text-bold" v-if="!ifEdit">{{enterprise.mobile}}</h4>
                        <input class="form-control" v-if="ifEdit" type="number" placeholder="请输入手机号" v-model="enterprise.mobile" />

                        <div class="my-3">
                            <p>{{enterprise.description}}</p>
                        </div>
                        <div class="text-center" v-if="!ifEdit">
                            <button class="btn btn-primary" v-on:click="setIfEdit(true)">编辑</button>
                        </div>
                        <div class="text-center" v-if="ifEdit">
                            <button class="btn btn-primary" v-on:click="updateAccountInfo()">保存</button>
                        </div>

                    </div>
                </div>
                <div class="card card-default d-none d-lg-block">
                    <div class="card-header">
                        <div class="card-title text-center">推荐用户</div>
                    </div>
                    <div class="card-body">
                        <div class="media" v-for="user of recUserList">
                            <img class="align-self-center mr-2 rounded-circle img-thumbnail thumb48" v-bind:src="user.headUrl" alt="Contact" />
                            <div class="media-body py-2">
                                <div class="text-bold">{{user.name}}
                                    <div class="text-sm text-muted">{{user.university}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card card-default">
                    <div class="card-header d-flex align-items-center">
                        <div class="d-flex justify-content-center col">
                            <div class="h4 m-0 text-center">企业信息</div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <b-dropdown id="ddown1" variant="link" no-caret right>
                                <template slot="button-content">
                                    <em class="fa fa-ellipsis-v fa-lg text-muted"></em>
                                </template>
                                <b-dropdown-item v-on:click="setIfChangePassword(true)">修改密码</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row py-4 justify-content-center">
                            <div class="col-12 col-sm-10">
                                <form class="form-horizontal">
                                    <div class="form-group row">
                                    <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" for="inputContact12">名称</label>
                                    <div class="col-xl-10 col-md-9 col-8">
                                        <input class="form-control" id="inputContact12" type="text" v-model="enterprise.enterpriseName" />
                                    </div>
                            </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" for="inputContact2">邮箱</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="inputContact2" type="email" v-model="enterprise.email" disabled="disabled" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" for="inputContact3">地址</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="inputContact3" type="text" v-model="enterprise.location" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" for="inputContact4">税号</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="inputContact4" type="text" v-model="enterprise.creditCode" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >认证文件</label>

                                        <div class="col-xl-10 col-md-9 col-8">
                                            <div class="form-control">
                                            <a v-bind:href="enterprise.licenseUrl">认证文件</a>
                                            </div>
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                            <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >更改文件</label>
                                            <div class="col-xl-10 col-md-9 col-8">
                                                <b-form-file  v-model="file"  placeholder="选择一个文件"></b-form-file>
                                            </div>
                                        </div>
                                        <div class="form-group row text-right">
                                            <div class="col-md-9">
                                            </div>
                                            <div class="col-md-3">
                                                <button class="btn btn-info right " type="button" v-on:click="addFile()" >确认添加</button>
                                            </div>
                                        </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" for="inputContact6">描述</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <textarea class="form-control" id="inputContact6" rows="4" v-model="enterprise.description"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >认证</label>
                                        <div class="col-xl-10 col-md-9 col-8" v-if="enterprise.authStatus===-2">
                                            <div class="float-left">
                                                <div class="form-control">
                                                    <div class="badge badge-success">未认证</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-10 col-md-9 col-8" v-if="enterprise.authStatus===1">
                                            <div class="float-left">
                                                <div class="form-control">
                                                <div class="badge badge-success">已认证</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-10 col-md-9 col-8" v-if="enterprise.authStatus===0">
                                            <div class="float-left">
                                                <div class="form-control">
                                                    <div class="badge badge-info">审核中</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-10 col-md-9 col-8" v-if="enterprise.authStatus===-1">
                                            <div class="float-left">
                                                <div class="form-control">
                                                    <div class="badge bg-gray-dark">认证失败</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6 ">
                                            <button class="btn btn-info" type="button" style="float:right" v-on:click="updateEnterpriseInfo" >提交审核</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-default"  v-if="ifChangePassword">
                    <div class="card-header d-flex align-items-center">
                        <div class="d-flex justify-content-center col">
                            <div class="h4 m-0 text-center">修改密码</div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row py-4 justify-content-center">
                            <div class="col-12 col-sm-10">
                                <form class="form-horizontal">
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" for="password">原密码</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="password" type="password" v-model="oldPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" for="newPassword1">新密码</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="newPassword1" type="password" v-model="newPassword1"  />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" for="newPassword2">确认新密码</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="newPassword2" type="password" v-model="newPassword2"  />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6 ">
                                            <button class="btn btn-info" type="button" style="float:right" v-on:click="updatePassword()" >修改密码</button>
                                        </div>
                                        <div class="col-md-6 ">
                                            <button class="btn btn-info" type="button" style="float:left" v-on:click="setIfChangePassword(false)" >取消</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </ContentWrapper>
</template>

<script>
    import Vue from 'Vue'
    import axios from 'axios';


    import EnterpriseUser from "../../model/EnterpriseUser";
    import CommonUser from "../../model/CommonUser";
    import EntAPI from '../../service/EnterpriseService';
    import Notifications from 'vue-notification';
    Vue.use(Notifications);

    export default {
        data () {
            return {
                aboutMsg: '我是enterpriseInfo组件',
                enterprise:new EnterpriseUser(),
                recUserList:[],

                //修改密码
                oldPassword:'',
                newPassword1:'',
                newPassword2:'',


                //视图控制变量
                ifEdit:false,
                ifChangePassword:false,

                file:null,


            }
        },


        created(){
            this.getRecommendUser();

            this.enterprise.accountId=this.$route.params['id'];

            this.getEnterpriseInfo(this.enterprise.accountId);

        },

        methods: {

            //获取企业信息
            getEnterpriseInfo: function(id) {
                EntAPI.getEnterpriseById(id).then(data=>{
                    console.log(data);
                    this.enterprise.transfer(data);
                })
            },

            setIfEdit:function (flag){
                this.ifEdit=flag;
            },

            setIfChangePassword:function(flag){
                this.ifChangePassword=flag;
            },

            //更新企业账号信息
            updateAccountInfo:function(){
                console.log(this.enterprise.name);
                console.log(this.enterprise.mobile);
                EntAPI.updateAccountInfo(this.enterprise).then(data=>{
                    this.showInfo('更新成功');
                    this.ifEdit=false;
                });
            },



            //更新企业认证信息
            updateEnterpriseInfo:function () {
                EntAPI.updateEnterpriseInfo(this.enterprise).then(data=>{
                    // EntAPI.showInfo('更新成功');
                    EntAPI.showInfo('正在申请，请等待1-3个工作日');
                })

            },

            // applyForCertification:function () {
            //     if(this.enterprise.authStatus==='1'){
            //         EntAPI.showInfo('已认证，无需再认证');
            //     }else{
            //         EntAPI.showInfo('正在申请，请等待1-3个工作日');
            //     }
            // },

            getRecommendUser: function(){
                for(let i=0;i<10;i++){
                    let user=new CommonUser();
                    user.id=i;
                    user.name='testuser';
                    user.university='njdx';
                    user.headUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576742745082&di=139aaf86c89d1c21698da6fd57cd1be6&imgtype=0&src=http%3A%2F%2F787823.s21i.faiusr.com%2F2%2FABUIABACGAAg-ZmKwwUowL7X5AUwigU41AQ.jpg';
                    this.recUserList.push(user);
                }
            },

            updatePassword: function () {
                console.log(this.oldPassword);
                console.log(this.enterprise.password);
                if(this.oldPassword===this.enterprise.password){
                    if(this.newPassword1===this.newPassword2){
                        console.log('success');
                    }else{
                        alert('两次密码输入不一致');
                    }
                }else{
                    alert('原密码错误');
                }
            },

            addFile:function () {
                let formData = new FormData();
                formData.append('file',this.file);
                let that=this;
                axios.post('http://47.98.174.59:8088/api/common/general_file', formData,{withCredentials:true})
                    .then(function (response) {
                        if (response.status === 200) {
                            that.enterprise.licenseUrl = response.data;
                            EntAPI.showInfo('更新认证文件成功，记得提交审核哦');
                        }
                    });
            }



        },
    }
</script>
