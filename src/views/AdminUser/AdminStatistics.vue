<template>
   <p>kkkkkkkk</p>
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
                login: {
                    email: '',
                    password: '',
                    rememberme: false
                }
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
            }
        }
    }
</script>
