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
                <p class="text-center py-2">SIGNUP TO GET INSTANT ACCESS.</p>
                <form class="mb-3" @submit.prevent="validateBeforeSubmit('register')" data-vv-scope="register">
                    <div class="form-group">
                        <label class="text-muted" for="signupInputEmail1">Email address</label>
                        <div class="input-group with-focus">
                            <input :class="{'form-control border-right-0':true, 'is-invalid': errors.has('register.email')}" placeholder="Enter email" v-model="registerInfo.email" v-validate="'required|email'" type="text" name="email"/>
                            <div class="input-group-append">
                                <span class="input-group-text text-muted bg-transparent border-left-0">
                                    <em class="fa fa-envelope"></em>
                                </span>
                            </div>
                            <span v-show="errors.has('register.email')" class="invalid-feedback">{{ errors.first('register.email') }}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="text-muted" for="signupInputPassword1">Password</label>
                        <div class="input-group with-focus">
                            <input ref="password1" :class="{'form-control border-right-0':true, 'is-invalid': errors.has('register.password1')}" v-model="registerInfo.password1" v-validate="'required'" type="password" name="password1" placeholder="Password"/>
                            <div class="input-group-append">
                                <span class="input-group-text text-muted bg-transparent border-left-0">
                                    <em class="fa fa-lock"></em>
                                </span>
                            </div>
                            <span v-show="errors.has('register.password1')" class="invalid-feedback">{{ errors.first('register.password1') }}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="text-muted" for="signupInputRePassword1">Retype Password</label>
                        <div class="input-group with-focus">
                            <input :class="{'form-control border-right-0':true, 'is-invalid': errors.has('register.password2')}" v-model="registerInfo.password2" v-validate="'required|confirmed:password1'" type="password" name="password2" placeholder="Retype Password"/>
                            <div class="input-group-append">
                                <span class="input-group-text text-muted bg-transparent border-left-0">
                                    <em class="fa fa-lock"></em>
                                </span>
                            </div>
                            <span v-show="errors.has('register.password2')" class="invalid-feedback">{{ errors.first('register.password2') }}</span>
                        </div>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" :class="{'custom-control-input':true, 'is-invalid': errors.has('register.agreements')}" v-model="registerInfo.agreements" v-validate="'required'" name="agreements" id="registeragree">
                        <label class="custom-control-label" for="registeragree">
                            I agree with the<a class="ml-1" href="#">terms</a>
                        </label>
                        <span v-show="errors.has('register.agreements')" class="invalid-feedback">{{ errors.first('register.agreements') }}</span>
                    </div>
                    <button class="btn btn-block btn-primary mt-3" type="submit">Create account</button>
                </form>
                <p class="pt-3 text-center">Have an account?</p>
                <router-link class="btn btn-block btn-secondary" to="/login">Signup</router-link>
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
                    agreements: false
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
                        console.log(`Agreed: ${this.registerInfo.agreements}`);
                        this.$router.push('/login');
                        return;
                    }
                    console.log('Correct them errors!');
                });
            },

            register(registerInfo){
                console.log('success');
                console.log(registerInfo.email);
                this.$axios({
                    method: "POST",
                    url: '',
                    transformRequest: [
                        function(data) {
                            // 对 data 进行任意转换处理
                            return qs.stringify(data);
                        }
                    ],
                    data: { email: registerInfo.email, password: registerInfo.password1 },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function(response) {
                        var data = response.data
                        //显示错误信息
                        console.log(data);

                    }, function(response) {
                        alert(response.status)
                    })
            },
        }
    }
</script>
