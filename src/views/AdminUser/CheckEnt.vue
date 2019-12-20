<template>
    <ContentWrapper>
        <div class="content-heading">招聘信息
            <div class="ml-auto">
                <router-link :to="{name:'publishPost'}">
                    <button class="btn btn-secondary btn-sm" type="button">创建招聘</button>
                </router-link>
            </div>
        </div>
        <div class="card card-default">
            <form class="card">
                <b-tabs nav-class="nav-justified" class="ie-fix-flex">
<!--                    <b-tab title="未审核" active>-->
<!--                        <div class="row">-->
<!--                            <div class="col-xl-4 col-lg-6" v-for="post in postListCheck">-->
<!--                                <div class="card b">-->
<!--                                    <div class="card-header">-->
<!--                                        <div class="float-right">-->
<!--                                            <div class="badge badge-warning">审核中</div>-->
<!--                                        </div>-->
<!--                                        <h4 class="m-0">{{post.name}}</h4>-->
<!--                                        &lt;!&ndash;                        <small class="text-muted">Sed amet lectus id.</small>&ndash;&gt;-->
<!--                                    </div>-->
<!--                                    <table class="table">-->
<!--                                        <tbody>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong>创建时间</strong>-->
<!--                                            </td>-->
<!--                                            <td>{{post.createTime}}</td>-->
<!--                                        </tr>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong>开始时间</strong>-->
<!--                                            </td>-->
<!--                                            <td>{{post.startTime}}</td>-->
<!--                                        </tr>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong>结束时间</strong>-->
<!--                                            </td>-->
<!--                                            <td>{{post.endTime}}</td>-->
<!--                                        </tr>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong>描述</strong>-->
<!--                                            </td>-->
<!--                                            <td>{{post.description}}</td>-->
<!--                                        </tr>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong>工作地点</strong>-->
<!--                                            </td>-->
<!--                                            <td>{{post.workLocation}}</td>-->
<!--                                        </tr>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong>薪酬</strong>-->
<!--                                            </td>-->
<!--                                            <td>{{post.salary}}</td>-->
<!--                                        </tr>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong> 已投人员</strong>-->
<!--                                            </td>-->
<!--                                            <td>-->
<!--                                                <a class="inline mr-1" href="#">-->
<!--                                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />-->
<!--                                                </a>-->
<!--                                                <a class="inline mr-1" href="#">-->
<!--                                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />-->
<!--                                                </a>-->
<!--                                                <a class="inline mr-1" href="#">-->
<!--                                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />-->
<!--                                                </a>-->
<!--                                                <a class="inline mr-1" href="#">-->
<!--                                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />-->
<!--                                                </a>-->
<!--                                                <a class="inline mr-1" href="#">-->
<!--                                                    <strong>+5</strong>-->
<!--                                                </a>-->
<!--                                            </td>-->
<!--                                        </tr>-->
<!--                                        </tbody>-->
<!--                                    </table>-->
<!--                                    <div class="card-footer text-center">-->
<!--                                        <button class="btn btn-secondary" type="button">编辑招聘信息</button>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </b-tab>-->
<!--                    <b-tab title="已审核" >-->
<!--                        <div class="row">-->
<!--                            <div class="col-xl-4 col-lg-6" v-for="post in postListBefore">-->
<!--                                <div class="card b">-->
<!--                                    <div class="card-header">-->
<!--                                        <div class="float-right">-->
<!--                                            <div class="badge badge-info">未开始</div>-->
<!--                                        </div>-->
<!--                                        <h4 class="m-0">{{post.name}}</h4>-->
<!--                                        &lt;!&ndash;                        <small class="text-muted">Sed amet lectus id.</small>&ndash;&gt;-->
<!--                                    </div>-->
<!--                                    <table class="table">-->
<!--                                        <tbody>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong>创建时间</strong>-->
<!--                                            </td>-->
<!--                                            <td>{{post.createTime}}</td>-->
<!--                                        </tr>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong>开始时间</strong>-->
<!--                                            </td>-->
<!--                                            <td>{{post.startTime}}</td>-->
<!--                                        </tr>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong>结束时间</strong>-->
<!--                                            </td>-->
<!--                                            <td>{{post.endTime}}</td>-->
<!--                                        </tr>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong>描述</strong>-->
<!--                                            </td>-->
<!--                                            <td>{{post.description}}</td>-->
<!--                                        </tr>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong>工作地点</strong>-->
<!--                                            </td>-->
<!--                                            <td>{{post.workLocation}}</td>-->
<!--                                        </tr>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong>薪酬</strong>-->
<!--                                            </td>-->
<!--                                            <td>{{post.salary}}</td>-->
<!--                                        </tr>-->
<!--                                        <tr>-->
<!--                                            <td>-->
<!--                                                <strong> 已投人员</strong>-->
<!--                                            </td>-->
<!--                                            <td>-->
<!--                                                <a class="inline mr-1" href="#">-->
<!--                                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />-->
<!--                                                </a>-->
<!--                                                <a class="inline mr-1" href="#">-->
<!--                                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />-->
<!--                                                </a>-->
<!--                                                <a class="inline mr-1" href="#">-->
<!--                                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />-->
<!--                                                </a>-->
<!--                                                <a class="inline mr-1" href="#">-->
<!--                                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />-->
<!--                                                </a>-->
<!--                                                <a class="inline mr-1" href="#">-->
<!--                                                    <strong>+5</strong>-->
<!--                                                </a>-->
<!--                                            </td>-->
<!--                                        </tr>-->
<!--                                        </tbody>-->
<!--                                    </table>-->
<!--                                    <div class="card-footer text-center">-->
<!--                                        <button class="btn btn-secondary" type="button">编辑招聘信息</button>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </b-tab>-->
                </b-tabs>
            </form>
        </div>
    </ContentWrapper>
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
            },

            // getApp
        }
    }
</script>
