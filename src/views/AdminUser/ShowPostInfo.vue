<template>
    <ContentWrapper>
        <div class="content-heading">
            招聘信息
                <div class="ml-auto">
                    <router-link :to="{name:'checkPost'}">
                        <button class="btn btn-secondary btn-sm" type="button">返回</button>
                    </router-link>
                </div>
        </div>
        <div class="row"></div>
        <!-- START card-->


        <div class="card card-default">
            <!--            <div class="card-header">Horizontal form</div>-->
            <div class="card-body">
                <form class="form-horizontal">
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">公司名称</label>
                        <div class="col-xl-10">
                            <label class="form-control" >{{post.enterpriseName}}</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">招聘标题</label>
                        <div class="col-xl-10">
                            <label class="form-control" >{{post.title}}</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-2 col-form-label">位置</label>
                        <div class="col-md-10">
                            <label class="form-control" >{{post.workLocation}}</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">薪酬(RMB/M)</label>
                        <div class="col-xl-10">
                            <label class="form-control" >{{post.salary}}</label>

                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">描述</label>
                        <div class="col-xl-10">
                            <label class="form-control" >{{post.description}}</label>

                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">招聘人数</label>
                        <div class="col-xl-10">
                            <label class="form-control" >{{post.headCount}}</label>

                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label class="col-md-2 col-form-label mb-2">开始时间</label>
                        <div class="col-xl-6 col-10">
                            <label class="form-control" >{{post.startTime.split("T")[0]}}</label>


                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label class="col-md-2 col-form-label mb-2">结束时间</label>
                        <div class="col-xl-6 col-10">
                            <label class="form-control" >{{post.endTime.split("T")[0]}}</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- END card-->
    </ContentWrapper>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'
    import Post from "../../model/Post";
    import EntAPI from "../../service/EnterpriseService";

    export default {
        data() {
            return {

                post:new Post(),


            }
        },
        components: {
            Datepicker,
        },

        created(){
            this.post.id=this.$route.params['postId'];
            this.getPostInfo();

        },

        methods: {
            //获取招聘信息
            getPostInfo(){
                EntAPI.getPostById(this.post.id).then(data=>{
                    console.log(data);
                    this.post.transfer(data);
                })
            }
        }


    }
</script>
