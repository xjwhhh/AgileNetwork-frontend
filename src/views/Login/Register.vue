<template>
    <div class="block-center mt-4 wd-xl">
        <!-- START card-->
        <div class="card card-flat">
            <div class="card-header text-center bg-dark">
                <a href="#">
                    <img class="block-center" src="img/logo.png" alt="Image" />
                </a>
            </div>
            <div class="card-body">
                <p class="text-center py-2">注册账号</p>
                <form class="mb-3" @submit.prevent="validateBeforeSubmit('register')" data-vv-scope="register">
                    <div class="form-group">
                        <label class="text-muted" for="signupInputEmail1">邮箱</label>
                        <div class="input-group with-focus">
                            <input :class="{'form-control border-right-0':true, 'is-invalid': errors.has('register.email')}" placeholder="输入邮箱" v-model="registerInfo.email" v-validate="'required|email'" type="text" name="email"/>
                            <div class="input-group-append">
                                <span class="input-group-text text-muted bg-transparent border-left-0">
                                    <em class="fa fa-envelope"></em>
                                </span>
                            </div>
                            <span v-show="errors.has('register.email')" class="invalid-feedback">{{ errors.first('register.email') }}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="text-muted" for="signupInputEmail1">名字</label>
                        <div class="input-group with-focus">
                            <input :class="{'form-control border-right-0':true, 'is-invalid': errors.has('register.name')}" placeholder="输入名字" v-model="registerInfo.name" v-validate="'required'" type="text" name="text"/>
                            <div class="input-group-append">
                                <span class="input-group-text text-muted bg-transparent border-left-0">
                                    <em class="fa fa-envelope"></em>
                                </span>
                            </div>
                            <span v-show="errors.has('register.email')" class="invalid-feedback">{{ errors.first('register.email') }}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="text-muted" for="signupInputPassword1">密码</label>
                        <div class="input-group with-focus">
                            <input ref="password1" :class="{'form-control border-right-0':true, 'is-invalid': errors.has('register.password1')}" v-model="registerInfo.password1" v-validate="'required'" type="password" name="password1" placeholder="密码"/>
                            <div class="input-group-append">
                                <span class="input-group-text text-muted bg-transparent border-left-0">
                                    <em class="fa fa-lock"></em>
                                </span>
                            </div>
                            <span v-show="errors.has('register.password1')" class="invalid-feedback">{{ errors.first('register.password1') }}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="text-muted" for="signupInputRePassword1">确认密码</label>
                        <div class="input-group with-focus">
                            <input :class="{'form-control border-right-0':true, 'is-invalid': errors.has('register.password2')}" v-model="registerInfo.password2" v-validate="'required|confirmed:password1'" type="password" name="password2" placeholder="确认密码"/>
                            <div class="input-group-append">
                                <span class="input-group-text text-muted bg-transparent border-left-0">
                                    <em class="fa fa-lock"></em>
                                </span>
                            </div>
                            <span v-show="errors.has('register.password2')" class="invalid-feedback">{{ errors.first('register.password2') }}</span>
                        </div>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" :class="{'custom-control-input':true, 'is-invalid': errors.has('register.type')}" v-model="registerInfo.type"  name="agreements" id="registertype">
                        <label class="custom-control-label" for="registertype">
                            注册为企业用户
                        </label>
                        <span v-show="errors.has('register.type')" class="invalid-feedback">{{ errors.first('register.type') }}</span>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" :class="{'custom-control-input':true, 'is-invalid': errors.has('register.agreements')}" v-model="registerInfo.agreements" v-validate="'required'" name="agreements" id="registeragree">
                        <label class="custom-control-label" for="registeragree">
                            我已阅读并同意<a class="ml-1" href="#">用户协议</a>
                        </label>
                        <span v-show="errors.has('register.agreements')" class="invalid-feedback">{{ errors.first('register.agreements') }}</span>
                    </div>
                    <button class="btn btn-block btn-primary mt-3" type="submit">注册账号</button>
                </form>
                <p class="pt-3 text-center">已有账号？</p>
                <router-link class="btn btn-block btn-secondary" to="/login">立即登录</router-link>
            </div>
        </div>
        <!-- END card-->
        <div class="p-3 text-center">
            <span class="mr-2">&copy;</span>
            <span>2018</span>
            <span class="mr-2">-</span>
            <span>Angle</span>
            <br/>
            <span>Bootstrap Admin Template</span>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VeeValidate from 'vee-validate';
    import axios from 'axios';
    import qs from 'qs'

    Vue.use(VeeValidate, {
        fieldsBagName: 'formFields'  // fix issue with b-table
    })

    export default {
        data() {
            return {
                registerInfo: {
                    email: '',
                    password1: '',
                    password2: '',
                    name:'',
                    agreements: false,
                    type:false,
                }
            }
        },
        methods: {
            validateBeforeSubmit(scope) {
                this.$validator.validateAll(scope).then((result) => {
                    if (result) {
                        console.log('Form Submitted!');
                        console.log(`Email: ${this.registerInfo.email}`);
                        console.log(`Password: ${this.registerInfo.password1}`);
                        console.log(`PasswordRe: ${this.registerInfo.password2}`);
                        this.register(this.registerInfo)
                        // this.$router.push('/login');
                        return;
                    }
                    console.log('Correct them errors!');
                });
            },

            register(registerInfo){
                let url='';
                if(registerInfo.type) {
                    url='http://47.98.174.59:8088/api/enterprise';
                }else{
                    url='http://47.98.174.59:8088/api/user';
                }
                axios.post(url, {
                    email: registerInfo.email,
                    password: registerInfo.password1,
                    name: registerInfo.name
                }, {withCredentials: true}).then(res => {
                    console.log(res);
                    this.$router.push({name:'login'});
                }).catch(res => {
                    alert("注册失败");
                    console.log("err", res)
                })
            },
        }
    }
</script>
