<template>
    <ContentWrapper>

        <div class="row">
            <!-- Blog Content-->
            <div class="col-xl-9">

                <!-- Search-->
                <div class="card card-default">
                    <div class="card-body">
                        <div class="form-horizontal">
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
                                     工作地点：
                                </b>
                            </span>
                            <a rel="nofollow" v-for="item in workLocationStr" v-on:click="chooseLocation($event)" :class="{active : workLocationActive[item]}" href="javascript:;" data-lg-tj-id="8s00" data-lg-tj-no="
                                                                    0006
                                                            " data-lg-tj-cid="idnull">{{item}}
                                <i class="delete"></i>
                            </a>

                        </li>
                        <li style=" list-style-type:none" class="multi-chosen"><span class="title"><b style="font-size: larger">
                            期望薪资：
                        </b></span>

                            <a rel="nofollow" v-for="item in salaryExpectedStr" href="javascript:;" v-on:click="chooseSalary($event)" :class="{active : salaryActive[item]}" data-lg-tj-id="8s00" data-lg-tj-no="
                                                            0001
                                                    " data-lg-tj-cid="idnull">{{item}}
                            </a>
                        </li>
                    </div>
                </div>
                <div class="card-columns">



                    <div class="card" v-for="item in datas">
                        <div class="card-body" :class="getRandomColor()">
                            <!--<a :href="'/common/' + this.user.id + '/postInfo/1'">-->
                                <!--<h3 class="my-3">急招聘Java工程师</h3>-->
                            <!--</a>-->
                            <router-link  :to="{name:'postInfo', params: { pid: item.postInfo.id }}"><h3 class="my-3">{{item.postInfo.title}}</h3></router-link>

                        </div>
                        <div class="card-body">
                            <p class="d-flex">
                                <span>
                                    <small class="mr-1">by
                                        <router-link :to="{name:'commonEnterpriseInfo', params: { eid: item.enterpriseInfo.accountId }}" class="ml-1" style="color: #6c757d">{{item.enterpriseInfo.enterpriseName}}</router-link>
                                    </small>
                                    <small class="mr-1">{{item.postInfo.createTime.substr(0,10)}}</small>
                                </span>
                                <span class="ml-auto">

                                </span>

                            </p>
                            <p>
                                {{item.postInfo.description}}
                            </p>
                        </div>
                    </div>




                </div>
            </div>
            <!-- Blog Sidebar-->
            <div class="col-xl-3">

                <!-- Tag Cloud-->
                <div class="card card-default d-none d-lg-block">
                    <div class="card-header">
                        <div class="card-title text-center">最近投递的简历</div>
                    </div>
                    <div class="card-body">
                        <Datatable  class="table table-striped my-4 w-100" id="datatable1">
                            <thead>
                            <tr>
                                <th data-priority="1">简历名称</th>
                                <th>公司</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr  v-for="item in postResume">
                                <td style="width: 150px;">
                                    <a :href="item.annexUrl">{{item.resumeName}}</a>
                                </td>
                                <td style="width: 150px;">
                                    <router-link :to="{name:'commonEnterpriseInfo', params: { eid: item.enterpriseId }}" class="ml-1" style="color: #6c757d">{{item.enterpriseName}}</router-link>
                                </td>
                            </tr>
                            </tbody>
                        </Datatable>
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
    import axios from 'axios'

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
                salarys: new Array(),
                locations:new Array(),
                randomColor :['bg-purple' , 'bg-green', 'bg-primary','bg-warning'],
                searchKey:'',
                workLocationStr:['南京','北京','上海','杭州','深圳','其他'],
                salaryExpectedStr:['1-5元',
                '5-10元',
                '10-20元',
                '20元以上'],
                salaryExpected:{
                    '1-5元':'0-5',
                    '5-10元':'5-10',
                    '10-20元':'10-20',
                    '20元以上':'20-1000000'
                },
                salaryActive:{
                    '1-5元':false,
                    '5-10元':false,
                    '10-20元':false,
                    '20元以上':false
                },
                workLocationActive:{
                    '南京':false,'北京':false,'上海':false,'杭州':false,'深圳':false,'其他':false
                },
                postResume:new Array(),
                posts:new Array(),
                datas:new Array()
            }
        },


        created(){
              this.init();
        },
        methods:{
            init:function(){
                this.getUserDeliveredResume();
                this.getInfo()
            },
            getInfo:function(){

                axios.post('http://47.98.174.59:8088/api/square/posts?search='+this.searchKey,{
                        'workLocations':this.locations,
                        'salaryScope':this.salarys
                    },
                    {withCredentials:true})
                    .then(function (response) {
                        // this.user.avatar = response.data.avatar
                        this.datas = response.data
                        console.log(this.datas)
                    }.bind(this)).catch(function (error) {
                    // console.log("ree",error)

                });
                this.posts = [];
            },
            //获取用户已投递简历
            getUserDeliveredResume:function () {
                axios.get('http://47.98.174.59:8088/api/user/'+this.$route.params.id+'/resumes/sent',{withCredentials:true}).then(data=>{
                    console.log("data=>",data.data);
                    if(data.data.length>=5){
                        this.postResume = data.data.slice(0,5)
                    }else{
                        this.postResume = data.data
                    }
                })
            },
            getPosts(){

            },
            getRandomColor:function () {
                return this.randomColor[Math.floor(Math.random() * 1)]
            },

            getPostsByCondition(){

            },


            search:function () {
                this.getInfo();
                // console.log('12312')
                // this.$router.push({name: 'square', query: {search: this.searchKey}})
                // console.log('1231qweq2')
            },

            chooseSalary:function (event) {
                var el = event.target;//哈哈
                if(this.salarys.includes(this.salaryExpected[el.innerText.trim()])){ // 包含就移除
                    this.salarys = this.salarys.filter(t => t != this.salaryExpected[el.innerText.trim()])
                    this.salaryActive[el.innerText.trim()]=false
                }else{
                    this.salarys.push(this.salaryExpected[el.innerText.trim()]);
                    console.log(el.innerText.trim())
                    console.log(this.salaryExpected[el.innerText.trim()]);
                    this.salaryActive[el.innerText.trim()]=true
                }
                this.getInfo()
            },
            chooseLocation:function (event) {
                var el = event.target;//哈哈
                if(this.locations.includes(el.innerText)){ // 包含就移除
                    this.locations = this.locations.filter(t => t != el.innerText)
                    this.workLocationActive[el.innerText.trim()]=false
                }else{
                    this.locations.push(el.innerText);
                    this.workLocationActive[el.innerText.trim()]=true
                }
                this.getInfo()
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
        margin: 5px;
    }
    .multi-chosen a:link{
        text-decoration: none;
        color: #656565;
    }

    .multi-chosen a:hover{
        background: #00bfe4;
        color: white;
    }
    .multi-chosen .active{
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
    .col-xl-9 a{
        text-decoration: none;
        color: white;
    }



</style>
