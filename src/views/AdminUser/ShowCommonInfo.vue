<template>
    <p>kkkkkkkk</p>
</template>
<script>
    import Vue from 'vue'
    import VeeValidate from 'vee-validate';
    import CommonUser from "../../model/CommonUser";

    Vue.use(VeeValidate, {
        fieldsBagName: 'formFields'  // fix issue with b-table
    })

    export default {
        data() {
            return {
                login: {
                    email: '',
                    password: '',
                    rememberme: false
                },
                userList:[],
            }
        },
        methods: {
            validateBeforeSubmit(scope) {
                this.$validator.validateAll(scope).then((result) => {
                    if (result) {
                        console.log('Form Submitted!');
                        console.log(`Email: ${this.login.email}`)
                        console.log(`Password: ${this.login.password}`)
                        console.log(`Remember Me: ${this.login.rememberme}`)
                        return;
                    }
                    console.log('Correct them errors!');
                });
            },

            getUserInfo:function () {
                for(let i=0;i<10;i++){
                    let user=new CommonUser();
                    user.id=i;
                    user.name='testuser';
                    user.university='njdx';
                    user.headUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576742745082&di=139aaf86c89d1c21698da6fd57cd1be6&imgtype=0&src=http%3A%2F%2F787823.s21i.faiusr.com%2F2%2FABUIABACGAAg-ZmKwwUowL7X5AUwigU41AQ.jpg';
                    this.recUserList.push(user);
                }
            }
        },
    }
</script>
