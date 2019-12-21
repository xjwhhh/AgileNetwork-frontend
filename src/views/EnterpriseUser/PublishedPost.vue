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
                    <b-tab title="审核中" active>
                        <div class="row">
                        <div class="col-xl-4 col-lg-6" v-for="post in postListCheck">
                            <div class="card b">
                                <div class="card-header">
                                    <div class="float-right">
                                        <div class="badge badge-warning">审核中</div>
                                    </div>
                                    <h4 class="m-0">{{post.name}}</h4>
                                    <!--                        <small class="text-muted">Sed amet lectus id.</small>-->
                                </div>
                                <table class="table">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <strong>创建时间</strong>
                                        </td>
                                        <td>{{post.createTime}}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>开始时间</strong>
                                        </td>
                                        <td>{{post.startTime}}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>结束时间</strong>
                                        </td>
                                        <td>{{post.endTime}}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>描述</strong>
                                        </td>
                                        <td>{{post.description}}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>工作地点</strong>
                                        </td>
                                        <td>{{post.workLocation}}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>薪酬</strong>
                                        </td>
                                        <td>{{post.salary}}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong> 已投人员</strong>
                                        </td>
                                        <td>
                                            <a class="inline mr-1" href="#">
                                                <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />
                                            </a>
                                            <a class="inline mr-1" href="#">
                                                <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                            </a>
                                            <a class="inline mr-1" href="#">
                                                <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                            </a>
                                            <a class="inline mr-1" href="#">
                                                <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                            </a>
                                            <a class="inline mr-1" href="#">
                                                <strong>+5</strong>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="card-footer text-center">
                                    <button class="btn btn-secondary" type="button">编辑招聘信息</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </b-tab>
                    <b-tab title="未开始" >
                        <div class="row">
                            <div class="col-xl-4 col-lg-6" v-for="post in postListBefore">
                                <div class="card b">
                                    <div class="card-header">
                                        <div class="float-right">
                                            <div class="badge badge-info">未开始</div>
                                        </div>
                                        <h4 class="m-0">{{post.name}}</h4>
                                        <!--                        <small class="text-muted">Sed amet lectus id.</small>-->
                                    </div>
                                    <table class="table">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <strong>创建时间</strong>
                                            </td>
                                            <td>{{post.createTime}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>开始时间</strong>
                                            </td>
                                            <td>{{post.startTime}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>结束时间</strong>
                                            </td>
                                            <td>{{post.endTime}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>描述</strong>
                                            </td>
                                            <td>{{post.description}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>工作地点</strong>
                                            </td>
                                            <td>{{post.workLocation}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>薪酬</strong>
                                            </td>
                                            <td>{{post.salary}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong> 已投人员</strong>
                                            </td>
                                            <td>
                                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" v-on:click="showResumeInfo('postId','workerId')" />
                                                <a class="inline mr-1" href="#">
                                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                                </a>
                                                <a class="inline mr-1" href="#">
                                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                                </a>
                                                <a class="inline mr-1" href="#">
                                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                                </a>
                                                <a class="inline mr-1" href="#">
                                                    <strong>+5</strong>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div class="card-footer text-center">
                                        <button class="btn btn-secondary" type="button">编辑招聘信息</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="进行中">
                        <div class="row">
                            <div class="col-xl-4 col-lg-6" v-for="post in postListNow">
                                <div class="card b">
                                    <div class="card-header">
                                        <div class="float-right">
                                            <div class="badge badge-success">进行中</div>
                                        </div>
                                        <h4 class="m-0">{{post.name}}</h4>
                                        <!--                        <small class="text-muted">Sed amet lectus id.</small>-->
                                    </div>
                                    <table class="table">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <strong>创建时间</strong>
                                            </td>
                                            <td>{{post.createTime}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>开始时间</strong>
                                            </td>
                                            <td>{{post.startTime}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>结束时间</strong>
                                            </td>
                                            <td>{{post.endTime}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>描述</strong>
                                            </td>
                                            <td>{{post.description}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>工作地点</strong>
                                            </td>
                                            <td>{{post.workLocation}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>薪酬</strong>
                                            </td>
                                            <td>{{post.salary}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong> 已投人员</strong>
                                            </td>
                                            <td>
                                                <a class="inline mr-1" href="#">
                                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />
                                                </a>
                                                <a class="inline mr-1" href="#">
                                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                                </a>
                                                <a class="inline mr-1" href="#">
                                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                                </a>
                                                <a class="inline mr-1" href="#">
                                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                                </a>
                                                <a class="inline mr-1" href="#">
                                                    <strong>+5</strong>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="已结束">
                        <div class="row">
                            <div class="col-xl-4 col-lg-6" v-for="post in postListAfter">
                                <div class="card b">
                                    <div class="card-header">
                                        <div class="float-right">
                                            <div class="badge bg-gray-dark">已结束</div>
                                        </div>
                                        <h4 class="m-0">{{post.name}}</h4>
                                        <!--                        <small class="text-muted">Sed amet lectus id.</small>-->
                                    </div>
                                    <table class="table">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <strong>创建时间</strong>
                                            </td>
                                            <td>{{post.createTime}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>开始时间</strong>
                                            </td>
                                            <td>{{post.startTime}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>结束时间</strong>
                                            </td>
                                            <td>{{post.endTime}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>描述</strong>
                                            </td>
                                            <td>{{post.description}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>工作地点</strong>
                                            </td>
                                            <td>{{post.workLocation}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>薪酬</strong>
                                            </td>
                                            <td>{{post.salary}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong> 已投人员</strong>
                                            </td>
                                            <td>
                                                <a class="inline mr-1" href="#">
                                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />
                                                </a>
                                                <a class="inline mr-1" href="#">
                                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                                </a>
                                                <a class="inline mr-1" href="#">
                                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                                </a>
                                                <a class="inline mr-1" href="#">
                                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                                </a>
                                                <a class="inline mr-1" href="#">
                                                    <strong>+5</strong>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </form>
        </div>
    </ContentWrapper>
</template>
<script>
    import Post from "../../model/Post";
    export default {
        data(){
            return{
                postList:[],
                postListCheck:[],//审核中
                postListBefore:[],//未开始
                postListNow:[],//进行中
                postListAfter:[],//已结束
            }
        },
        components: {
        },

        created(){
            for(let i=0;i<10;i++){
                let post=new Post();
                post.id=i;
                post.name='iiii';
                post.description='testpost';
                post.workLocation='nanjing';
                post.salary='10000';
                post.status='0';
                post.createTime='2019/12/11';
                post.startTime='2019/12/11';
                post.endTime='2019/12/11';
                this.postList.push(post);
                this.postListCheck.push(post);
                this.postListBefore.push(post);
                this.postListNow.push(post);
                this.postListAfter.push(post);
            }
        },

        methods:{
            //根据企业id获取招聘信息
            getPostList(){

            },


            showResumeInfo(postId,commonId){
                console.log(postId);
                console.log(commonId);
                this.$router.push({name:'entResumeInfo',params:{postId:postId,commonId:commonId}})
            }


        }
    }
</script>
