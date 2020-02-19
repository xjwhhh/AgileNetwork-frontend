<template>
    <div class="block-center mt-4 wd-xl">
        <!-- START card-->
        <div class="card card-flat">
            <div class="card-header text-center bg-dark">
                <a href="#">
                    <img class="block-center rounded" src="img/logo.png" alt="Image" />
                </a>
            </div>
            <div class="card-body">
                <p class="text-center py-2">登录账号</p>
                <form class="mb-3" @submit.prevent="validateBeforeSubmit('login')" data-vv-scope="login">
                    <div class="form-group">
                        <div class="input-group with-focus">
                            <input :class="{'form-control border-right-0':true, 'is-invalid': errors.has('login.email')}" placeholder="输入邮箱" v-model="loginInfo.email" v-validate="'required|email'" type="text" name="email"/>
                            <div class="input-group-append">
                                <span class="input-group-text text-muted bg-transparent border-left-0">
                                    <em class="fa fa-envelope"></em>
                                </span>
                            </div>
                            <span v-show="errors.has('login.email')" class="invalid-feedback">{{ errors.first('login.email') }}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group with-focus">
                            <input :class="{'form-control  border-right-0':true, 'is-invalid': errors.has('login.password')}" v-model="loginInfo.password" v-validate="'required'" type="password" name="password" placeholder="输入密码"/>
                            <div class="input-group-append">
                                <span class="input-group-text text-muted bg-transparent border-left-0">
                                    <em class="fa fa-lock"></em>
                                </span>
                            </div>
                            <span v-show="errors.has('login.password')" class="invalid-feedback">{{ errors.first('login.password') }}</span>
                        </div>
                    </div>
                    <div class="clearfix">
                        <div class="float-left">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="rememberme" id="rememberme" v-model="loginInfo.rememberme">
                                <label class="custom-control-label" for="rememberme">记住我</label>
                            </div>
                        </div>
                        <div class="float-right">
                            <router-link class="text-muted" to="/recover">
                                <small>忘记密码？</small>
                            </router-link>
                        </div>
                    </div>
                    <button class="btn btn-block btn-primary mt-3" type="submit">登陆</button>
                </form>
                <p class="pt-3 text-center">没有账号？</p>
                <router-link class="btn btn-block btn-secondary" to="/register">现在注册</router-link>
            </div>
        </div>
        <!-- END card-->
    </div>
</template>
<script>
    import Vue from 'vue'
    import VeeValidate from 'vee-validate';
    // import axios from '../../service/CommonService'
    import  axios from 'axios'
    import qs from 'qs'
    // Vue.prototype.$axios = axios
    import CommonUser from "../../model/CommonUser";
    // import commonService from '@/service/CommonService'

    Vue.use(VeeValidate, {
        fieldsBagName: 'formFields'  // fix issue with b-table
    })

    export default {
        name:'Login',
        data() {
            return {
                loginInfo: {
                    email: '',
                    password: '',
                    rememberme: false
                },
                user:CommonUser,
            }
        },

        created(){
            console.log("ll");
        },
        methods: {

            validateBeforeSubmit(scope) {
                this.$validator.validateAll(scope).then((result) => {
                    if (result) {
                        console.log('Form Submitted!');
                        console.log(`Email: ${this.loginInfo.email}`);
                        console.log(`Password: ${this.loginInfo.password}`);
                        console.log(`Remember Me: ${this.loginInfo.rememberme}`);

                        this.login(this.loginInfo);

                    }else{
                        console.log('Correct them errors!');
                    }
                });
            },

            login(loginInfo){
                // console.log(data)
                console.log(loginInfo);
                axios.post('http://47.98.174.59:8088/api/login',loginInfo,{withCredentials:true}).then(res=>{
                    console.log(res);
                    if(res.data.role===1){
                        this.$router.push({name:'enterpriseLayout',params:{id:res.data.id}})
                    }else  if ( res.data.role === 2){
                        this.$router.push({name:'commonLayout',params:{id:res.data.id}})
                    }else{
                        this.$router.push({name:'adminLayout',params:{id:res.data.id}})
                    }
                }).catch(res=>{
                    alert("账号或密码不正确");
                    console.log("err",res)
                })
            },
        }
    }
</script>
