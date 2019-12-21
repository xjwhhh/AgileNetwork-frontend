<template>
    <ContentWrapper>

        <div class="row">
            <!-- Blog Content-->
            <div class="col-xl-9">

                <!-- Search-->
                <div class="card card-default">
                    <div class="card-body">
                        <div class="form-horizontal" >
                            <div class="input-group">
                                <input class="form-control" type="search" v-model="searchKey" placeholder="请输入关键字"   @keyup.enter="search()"  />
                                <span class="input-group-btn">
                                    <button class="btn btn-secondary" type="button" v-on:click="search()">
                                        <em class="fa fa-search"></em>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card card-default"  id="">

                    <div class="card-body">


                        <li style=" list-style-type:none" class="multi-chosen">
                            <span class="title">
                                <b style="font-size: larger">
                                     学历要求：
                                </b>
                            </span>

                            <a rel="nofollow" href="javascript:;" class="active" data-lg-tj-id="8s00" data-lg-tj-no="
                                                            0001
                                                    " data-lg-tj-cid="idnull">不限
                            </a>
                            <a rel="nofollow" href="javascript:;" data-lg-tj-id="8s00" data-lg-tj-no="
                                                                    0002
                                                            " data-lg-tj-cid="idnull">大专
                                <i class="delete"></i>
                            </a>
                            <a rel="nofollow" href="javascript:;" data-lg-tj-id="8s00" data-lg-tj-no="
                                                                    0003
                                                            " data-lg-tj-cid="idnull">本科
                                <i class="delete"></i>
                            </a>
                            <a rel="nofollow" href="javascript:;" data-lg-tj-id="8s00" data-lg-tj-no="
                                                                    0004
                                                            " data-lg-tj-cid="idnull">硕士
                                <i class="delete"></i>
                            </a>
                            <a rel="nofollow" href="javascript:;" data-lg-tj-id="8s00" data-lg-tj-no="
                                                                    0005
                                                            " data-lg-tj-cid="idnull">博士
                                <i class="delete"></i>
                            </a>
                            <a rel="nofollow" href="javascript:;" data-lg-tj-id="8s00" data-lg-tj-no="
                                                                    0006
                                                            " data-lg-tj-cid="idnull">不要求
                                <i class="delete"></i>
                            </a>

                        </li>
                        <li style=" list-style-type:none" class="multi-chosen"><span class="title"><b style="font-size: larger">
                            学历要求：
                        </b></span>

                            <a rel="nofollow" v-for="item in showEducation" href="javascript:;" v-on:click="chooseEducation($event)" class="active" data-lg-tj-id="8s00" data-lg-tj-no="
                                                            0001
                                                    " data-lg-tj-cid="idnull">{{item}}
                            </a>
                        </li>
                    </div>
                </div>
                <div class="card-columns">



                    <div class="card">
                        <div class="card-body" :class="getRandomColor()">
                            <!--<a :href="'/common/' + this.user.id + '/postInfo/1'">-->
                                <!--<h3 class="my-3">急招聘Java工程师</h3>-->
                            <!--</a>-->
                            <router-link  :to="{name:'postInfo', params: { pid: 1 }}"><h3 class="my-3">急招聘Java工程师</h3></router-link>

                        </div>
                        <div class="card-body">
                            <p class="d-flex">
                                <span>
                                    <small class="mr-1">by
                                        <router-link :to="{name:'enterpriseInfo', params: { eid: 1 }}" class="ml-1" style="color: #6c757d">华为</router-link>
                                    </small>
                                    <small class="mr-1">2018/23/23</small>
                                </span>
                                <span class="ml-auto">

                                </span>

                            </p>
                            <p>
                                华为公司几招一个是阿斯顿发，工作地点在算法，饱餐三，阿迪舒服哈死的份 啥傻傻打发时间的飞机啊 等哈发哈点话费
                            </p>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-body" :class="getRandomColor()">
                            <h3 class="my-3">急招聘Java工程师</h3>
                        </div>
                        <div class="card-body">
                            <p class="d-flex">
                                <span>
                                    <small class="mr-1">by
                                        <a class="ml-1" href="#">华为</a>
                                    </small>
                                    <small class="mr-1">2018/23/23</small>
                                </span>
                                <span class="ml-auto">

                                </span>

                            </p>
                            <p>
                                华为公司几招一个是阿斯顿发，工作地点在算法，饱餐三，阿迪舒服哈死的份 啥傻傻打发时间的飞机啊 等哈发哈点话费
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <!-- Blog Sidebar-->
            <div class="col-xl-3">

                <!-- Tag Cloud-->
                <div class="card card-default">
                    <div class="card-header">Tag Cloud</div>
                    <div class="card-body">
                        <div class="mw-100" ref="jqcloud"></div>
                    </div>
                </div>
                <!-- Ads-->
                <div class="card card-default">
                    <div class="card-header">广告</div>
                    <div class="card-body ie-fix-flex">
                        <a href="http://www.jd.com">
                            <img class="img-fluid img-thumbnail" src="https://file.adbug.cn/m/image/bf33e7cd1f184deb973c3b5c7651a42a.jpg?x-oss-process=image/resize,w_650/watermark,type_d3F5LXplbmhlaQ,size_22,text_QURCVUc=,color_FFFFFF,t_5,g_sw,x_10,y_10,p_10,fill_1,interval_80,rotate_45" alt="demo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>
<script>
    // JQ Cloud
    import 'jqcloud2/dist/jqcloud.css';
    import 'jqcloud2/dist/jqcloud.js';

    export default {
        data() {
            return {
                //Create an array of word objects, each representing a word in the cloud
                word_array: [
                    { text: 'Lorem', weight: 13 /*link: 'http://themicon.co'*/},
                    { text: 'Ipsum', weight: 10.5},
                    { text: 'Dolor', weight: 9.4},
                    { text: 'Sit', weight: 8},
                    { text: 'Amet', weight: 6.2},
                    { text: 'Consectetur', weight: 5},
                    { text: 'Adipiscing', weight: 5},
                    { text: 'Sit', weight: 8},
                    { text: 'Amet', weight: 6.2},
                    { text: 'Consectetur', weight: 5},
                    { text: 'Adipiscing', weight: 5
                    }],
                educations: new Array(),
                showEducation:new Array(),
                randomColor :['bg-purple' , 'bg-green', 'bg-primary','bg-warning'],
                searchKey:'',
            }
        },


        created(){
              this.init();
        },
        methods:{
            init:function(){
                this.showEducation=["dayiyi","daerer","wfwer"]
            },
            getPosts(){

            },
            getRandomColor:function () {
                return this.randomColor[Math.floor(Math.random() * 1)]
            },

            getPostsByCondition(){

            },
            search:function () {
                this.$router.push({name: 'square', query: {search: this.searchKey}})
            },

            chooseEducation:function (event) {

                var el = event.target;//哈哈
                if(this.educations.includes(el.innerText)){
                    this.educations = this.educations.filter(t => t != el.innerText)
                    alert("nonon")
                }else{
                    this.educations.push(el.innerText);
                    alert(el.innerText);
                }

            }

        },

        // mounted() {
        //     $(this.$refs.jqcloud).jQCloud(this.word_array, {
        //         width: 240,
        //         height: 200,
        //         steps: 7
        //     });
        // }
    }
</script>

<style scoped>
    .multi-chosen a{
        padding: 5px;
    }
    .multi-chosen a:link{
        text-decoration: none;
        color: #656565;
    }
    .multi-chosen a:hover{
        background: #00bfe4;
        color: white;
    }
    .multi-chosen a:active{
        background: #00bfe4;
        color: white;
    }
    .multi-chosen{
        /*float: left;*/
        margin-right: 5px;
        padding: 5px 8px;
        height: 34px;
        line-height: 14px;
    }
    .card-body a{
        text-decoration: none;
        color: white;
    }



</style>