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
                <p class="text-center py-2">SIGN IN TO CONTINUE.</p>
                <form class="mb-3" @submit.prevent="validateBeforeSubmit('login')" data-vv-scope="login">
                    <div class="form-group">
                        <div class="input-group with-focus">
                            <input :class="{'form-control border-right-0':true, 'is-invalid': errors.has('login.email')}" placeholder="Enter email" v-model="loginInfo.email" v-validate="'required|email'" type="text" name="email"/>
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
                            <input :class="{'form-control  border-right-0':true, 'is-invalid': errors.has('login.password')}" v-model="loginInfo.password" v-validate="'required'" type="password" name="password" placeholder="Password"/>
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
                                <label class="custom-control-label" for="rememberme">Remember Me</label>
                            </div>
                        </div>
                        <div class="float-right">
                            <router-link class="text-muted" to="/recover">
                                <small>Forgot your password?</small>
                            </router-link>
                        </div>
                    </div>
                    <button class="btn btn-block btn-primary mt-3" type="submit">Login</button>
                </form>
                <p class="pt-3 text-center">Need to Signup?</p>
                <router-link class="btn btn-block btn-secondary" to="/register">Register Now</router-link>
            </div>
        </div>
        <!-- END card-->
<!--        <div class="p-3 text-center">-->
<!--            <span class="mr-2">&copy;</span>-->
<!--            <span>2018</span>-->
<!--            <span class="mr-2">-</span>-->
<!--            <span>Angle</span>-->
<!--            <br/>-->
<!--            <span>Bootstrap Admin Template</span>-->
<!--        </div>-->
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

                        // this.$router.push({name:'commonLayout',params:{id:1}});
                        // return;
                    }else{
                        console.log('Correct them errors!');
                    }
                });
            },

            login(loginInfo){
                let data = {"email":"mf1932216@smail.nju.edu.cn","password":"123456"};
                let data1 = new FormData();
                data1.append('password','123456');
                data1.append('email','mf1932216@smail.nju.edu.cn');
                // console.log(data)
                console.log(loginInfo);
                axios.post('http://118.25.180.45:8088/api/login',loginInfo,{withCredentials:true}).then(res=>{
                    console.log(res);
                    if(res.data.role=='1'){
                        console.log(1)
                        this.$router.push({name:'enterpriseLayout',params:{id:res.data.id}})
                    }else  if ( res.data.role == '2'){
                        console.log(2)
                        this.$router.push({name:'commonLayout',params:{id:res.data.id}})
                    }else{
                        console.log(3)
                        this.$router.push({name:'commonLayout',params:{id:res.data.id}})
                    }
                }).catch(res=>{
                    alert("账号或密码不正确");
                    console.log("err",res)
                })
                // commonService.login(data).then(res=>{
                //     console.log("ew3")
                //     console.log(res)
                // }).catch(res=>{
                //     console.log("324")
                //     console.log(res)
                // })


                // let information = {
                //     email: this.loginInfo.email,
                //     password: this.loginInfo.password
                // }
                // commonService.login(this.loginInfo).then(data=>{
                //     console.log(data)
                // }).catch(res =>{
                //     console.log("----");
                //     console.log(res)
                // })
            },
        }
    }
</script>
