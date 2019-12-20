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
                        <input class="form-control" v-if="ifEdit" type="text" placeholder="" v-model="enterprise.name" />
                        <div class="my-3">
                            <p>{{enterprise.description}}</p>
                        </div>
                        <div class="text-center" v-if="!ifEdit">
                            <button class="btn btn-primary" v-on:click="setIfEdit()">编辑</button>
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
                                <b-dropdown-item>修改密码</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row py-4 justify-content-center">
                            <div class="col-12 col-sm-10">
                                <form class="form-horizontal">
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
                                            <a v-bind:href="enterprise.licenceUrl">认证文件</a>
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
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <div class="float-left">
                                                <div class="badge badge-info">已认证</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6 ">
                                            <button class="btn btn-info" type="button" style="float:right" >提交审核</button>
                                        </div>
                                        <div class="col-md-6 ">
                                            <button class="btn btn-info " type="button" v-if="enterprise.status!=='1'" v-on:click="applyForCertification">申请认证</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-default">
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
    // import axios from 'axios'
    // import Vue from 'Vue'
    // import qs from 'qs'
    // Vue.prototype.$axios = axios

    import EnterpriseUser from "../../model/EnterpriseUser";
    import CommonUser from "../../model/CommonUser";

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
            }
        },


        created(){
            this.enterprise.id='1';
            this.enterprise.name='南京大学';
            this.enterprise.email='nju@nju.edu.cn';
            this.enterprise.headUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576742745082&di=139aaf86c89d1c21698da6fd57cd1be6&imgtype=0&src=http%3A%2F%2F787823.s21i.faiusr.com%2F2%2FABUIABACGAAg-ZmKwwUowL7X5AUwigU41AQ.jpg';

            this.enterprise.description='南京大学（Nanjing University），简称南大，是中华人民共和国教育部直属的综合性全国重点大学，位列世界一流大学建设高校（A类）、211工程、985工程，是九校联盟、中国大学校长联谊会、环太平洋大学联盟、21世纪学术联盟、国际应用科技开发协作网、东亚研究型大学协会、新工科教育国际联盟、中国高校行星科学联盟、长三角研究型大学联盟成员，入选珠峰计划、111计划、2011计划、卓越工程师教育培养计划、卓越医生教育培养计划、卓越法律人才教育培养计划、国家建设高水平大学公派研究生项目、新工科研究与实践项目、全国深化创新创业教育改革示范高校、中国政府奖学金来华留学生接收院校、教育部来华留学示范基地、国家级双创示范基地。';
            this.enterprise.location="南京";
            this.enterprise.status='1';
            this.enterprise.creditCode='税号';
            this.enterprise.licenceUrl='认证文件url';

            this.getRecommendUser();
        },

        methods: {

            //获取企业信息
            getUserPersonalInfo: function() {

            },

            setIfEdit:function (){
                this.ifEdit=true;
            },

            //更新账号信息
            updateAccountInfo:function(){
                console.log(this.enterprise.name);
                this.ifEdit=false;
            },

            //更新企业信息
            updateEnterpriseInfo:function () {

            },

            applyForCertification:function () {
                if(this.enterprise.status==='1'){
                    alert('已认证');
                }else{
                    console.log('申请认证');
                }
            },

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
                if(this.oldPassword===this.enterprise.password){
                    if(this.newPassword1===this.newPassword2){
                        console.log('success');
                    }else{
                        alert('两次密码输入不一致');
                    }
                }else{
                    alert('原密码错误');
                }
            }


        },
    }
</script>
