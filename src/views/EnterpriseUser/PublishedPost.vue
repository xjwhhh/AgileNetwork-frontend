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
                                    <h4 class="m-0">{{post.title}}</h4>
                                    <!--                        <small class="text-muted">Sed amet lectus id.</small>-->
                                </div>
                                <table class="table">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <strong>创建时间</strong>
                                        </td>
                                        <td>{{post.createTime.split("T")[0]}}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>开始时间</strong>
                                        </td>
                                        <td>{{post.startTime.split("T")[0]}}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>结束时间</strong>
                                        </td>
                                        <td>{{post.endTime.split("T")[0]}}</td>
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
<!--                                            <a class="inline mr-1"  v-for=" userInfo of post.userInfoList">-->
<!--                                                <img class="rounded-circle thumb24" v-bind:datasrc="userInfo.avatarUrl" alt="project member" />-->
<!--                                            </a>-->

                                            <img class="rounded-circle thumb24"  v-for="userInfo of post.userInfoList" v-bind:datasrc="userInfo.avatarUrl"  v-on:click="showResumeInfo(post.id,userInfo.commonId,userInfo.resumeUrl)" />


                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
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
                                        <h4 class="m-0">{{post.title}}</h4>
                                        <!--                        <small class="text-muted">Sed amet lectus id.</small>-->
                                    </div>
                                    <table class="table">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <strong>创建时间</strong>
                                            </td>
                                            <td>{{post.createTime.split("T")[0]}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>开始时间</strong>
                                            </td>
                                            <td>{{post.startTime.split("T")[0]}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>结束时间</strong>
                                            </td>
                                            <td>{{post.endTime.split("T")[0]}}</td>
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
                                                <img class="rounded-circle thumb24"  v-for="userInfo of post.userInfoList" v-bind:datasrc="userInfo.avatarUrl"  v-on:click="showResumeInfo(post.id,userInfo.commonId,userInfo.resumeUrl)" />


<!--                                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" v-on:click="showResumeInfo('postId','workerId')" />-->
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
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
<!--                                    <div class="card-footer text-center">-->
<!--                                        <button class="btn btn-secondary" type="button">编辑招聘信息</button>-->
<!--                                    </div>-->
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
                                        <h4 class="m-0">{{post.title}}</h4>
                                        <!--                        <small class="text-muted">Sed amet lectus id.</small>-->
                                    </div>
                                    <table class="table">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <strong>创建时间</strong>
                                            </td>
                                            <td>{{post.createTime.split("T")[0]}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>开始时间</strong>
                                            </td>
                                            <td>{{post.startTime.split("T")[0]}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>结束时间</strong>
                                            </td>
                                            <td>{{post.endTime.split("T")[0]}}</td>
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
                                                <img class="rounded-circle thumb24"  v-for="userInfo of post.userInfoList" v-bind:datasrc="userInfo.avatarUrl"  v-on:click="showResumeInfo(post.id,userInfo.commonId,userInfo.resumeUrl)" />
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
                                        <h4 class="m-0">{{post.title}}</h4>
                                        <!--                        <small class="text-muted">Sed amet lectus id.</small>-->
                                    </div>
                                    <table class="table">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <strong>创建时间</strong>
                                            </td>
                                            <td>{{post.createTime.split("T")[0]}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>开始时间</strong>
                                            </td>
                                            <td>{{post.startTime.split("T")[0]}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>结束时间</strong>
                                            </td>
                                            <td>{{post.endTime.split("T")[0]}}</td>
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

                                                <img class="rounded-circle thumb24"  v-for="userInfo of post.userInfoList" v-bind:datasrc="userInfo.avatarUrl"  v-on:click="showResumeInfo(post.id,userInfo.commonId,userInfo.resumeUrl)" />

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
    import EntAPI from '../../service/EnterpriseService';
    import EnterpriseUser from "../../model/EnterpriseUser";
    import CommonUser from "../../model/CommonUser";
    export default {
        data(){
            return{
                enterprise:new EnterpriseUser(),
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

            this.enterprise.accountId=this.$route.params['id'];

            this.getPostList(this.enterprise.accountId);
        },

        methods:{


            showResumeInfo(postId,commonId,resumeUrl){
                console.log(postId);
                console.log(commonId);
                this.$router.push({name:'entResumeInfo',params:{postId:postId,commonId:commonId,resumeUrl:resumeUrl}})
            },

            getPostList:function(accountId){
                EntAPI.getEnterprisePostAll(accountId).then(data=>{
                    console.log(data);
                    let authIng=data['authIng'];
                    let notStarted=data['notStarted'];
                    let processing=data['processing'];
                    let ended=data['ended'];
                    for(let i=0;i<authIng.length;i++){
                        let post=new Post();
                        post.transferToEntPostManage(authIng[i]);
                        let userResume=authIng[i]['userResumeInfos'];
                        console.log(userResume);
                        let userInfoList=[];
                        for(let j=0;j<userResume.length;j++){
                            let temp=userResume[j];
                            let userInfo={};
                            userInfo.commonId=temp['userVO']['id'];
                            userInfo.avatarUrl=temp['userVO']['avatar'];
                            userInfo.resumeUrl=temp['resume']['annexUrl'];
                            userInfoList.push(userInfo);
                        }
                        post.userInfoList=userInfoList;
                        this.postListCheck.push(post);
                    }
                    for(let i=0;i<notStarted.length;i++){
                        let post=new Post();
                        post.transferToEntPostManage(notStarted[i]);
                        let userResume=notStarted[i]['userResumeInfos'];
                        console.log(userResume);
                        let userInfoList=[];
                        for(let j=0;j<userResume.length;j++){
                            let temp=userResume[j];
                            let userInfo={};
                            userInfo.commonId=temp['userVO']['id'];
                            userInfo.avatarUrl=temp['userVO']['avatar'];
                            userInfo.resumeUrl=temp['resume']['annexUrl'];
                            userInfoList.push(userInfo);
                        }
                        post.userInfoList=userInfoList;
                        this.postListBefore.push(post);
                    }
                    for(let i=0;i<processing.length;i++){
                        let post=new Post();
                        post.transferToEntPostManage(processing[i]);
                        let userResume=processing[i]['userResumeInfos'];
                        console.log(userResume);
                        let userInfoList=[];
                        for(let j=0;j<userResume.length;j++){
                            let temp=userResume[j];
                            let userInfo={};
                            userInfo.commonId=temp['userVO']['id'];
                            userInfo.avatarUrl=temp['userVO']['avatar'];
                            userInfo.resumeUrl=temp['resume']['annexUrl'];
                            userInfoList.push(userInfo);
                        }
                        post.userInfoList=userInfoList;
                        this.postListNow.push(post);
                    }
                    for(let i=0;i<ended.length;i++){
                        let post=new Post();
                        post.transferToEntPostManage(ended[i]);
                        let userResume=ended[i]['userResumeInfos'];
                        console.log(userResume);
                        let userInfoList=[];
                        for(let j=0;j<userResume.length;j++){
                            let temp=userResume[j];
                            let userInfo={};
                            userInfo.commonId=temp['userVO']['id'];
                            userInfo.avatarUrl=temp['userVO']['avatar'];
                            userInfo.resumeUrl=temp['resume']['annexUrl'];
                            userInfoList.push(userInfo);
                        }
                        post.userInfoList=userInfoList;
                        this.postListAfter.push(post);
                    }


                })
            }


        }
    }
</script>
