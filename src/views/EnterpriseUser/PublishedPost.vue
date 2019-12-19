<template>
    <ContentWrapper>
        <div class="content-heading">招聘信息
            <div class="ml-auto">
                <router-link :to="{name:'publishPost'}">
                <button class="btn btn-secondary btn-sm" type="button">创建招聘</button>
                </router-link>
            </div>
        </div>
        <div class="row">

            <div class="col-xl-4 col-lg-6" v-for="post in postList">
                <div class="card b">
                    <div class="card-header">
                        <div class="float-right">
<!--                            todo 根据post状态修改style-->
                            <div class="badge badge-info">started</div>
                        </div>
                        <h4 class="m-0">{{post.name}}</h4>
<!--                        <small class="text-muted">Sed amet lectus id.</small>-->
                    </div>
<!--                    <div class="card-body">-->
<!--                        <div class="d-flex align-items-center">-->
<!--                            <div class="w-100" v-b-tooltip.hover title="Health">-->
<!--                                <b-progress :value="22" :max="100" variant="warning" class="progress-xs m-0"></b-progress>-->
<!--                            </div>-->
<!--                            <div class="wd-xxs text-right">-->
<!--                                <div class="text-bold text-muted">22%</div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
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
<!--                        <tr>-->
<!--                            <td>-->
<!--                                <strong> Leader</strong>-->
<!--                            </td>-->
<!--                            <td>-->
<!--                                <a href="#" v-b-tooltip.hover title="Team leader">-->
<!--                                    <img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member" />-->
<!--                                </a>-->
<!--                            </td>-->
<!--                        </tr>-->
<!--                        <tr>-->
<!--                            <td>-->
<!--                                <strong>Metrics</strong>-->
<!--                            </td>-->
<!--                            <td>-->
<!--                                <Sparkline :values="[20,80]"-->
<!--                                           :options="{-->
<!--                                        type:'pie',-->
<!--                                        height:'24',-->
<!--                                        sliceColors:['#edf1f2', '#23b7e5']-->
<!--                                    }"-->
<!--                                           class="sparkline inline mr-2"/>-->
<!--                                <Sparkline :values="[60,40]"-->
<!--                                           :options="{-->
<!--                                        type:'pie',-->
<!--                                        height:'24',-->
<!--                                        sliceColors:['#edf1f2', '#27c24c']-->
<!--                                    }"-->
<!--                                           class="sparkline inline mr-2"/>-->
<!--                                <Sparkline :values="[90,10]"-->
<!--                                           :options="{-->
<!--                                        type:'pie',-->
<!--                                        height:'24',-->
<!--                                        sliceColors:['#edf1f2', '#ff902b']-->
<!--                                    }"-->
<!--                                           class="sparkline inline"/>-->
<!--                            </td>-->
<!--                        </tr>-->
                        </tbody>
                    </table>
                    <div class="card-footer text-center">
                        <button class="btn btn-secondary" type="button">编辑招聘信息</button>
                    </div>
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>
<script>
    import Sparkline from '@/components/Common/Sparklines';
    import Post from "../../model/Post";
    export default {
        data(){
            return{
                postList:[],
            }
        },
        components: {
            Sparkline
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
            }
        },

        methods:{
            getPostList(){

            }


        }
    }
</script>
