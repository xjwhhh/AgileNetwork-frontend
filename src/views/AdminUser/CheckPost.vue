<template>
    <ContentWrapper>
        <div class="content-heading">招聘信息审核
        </div>
        <div class="card card-default">
            <form class="card">
                <b-tabs nav-class="nav-justified" class="ie-fix-flex">
                    <b-tab title="未审核" active>
                        <div class="card-body">
                            <Datatable :options="dtOptions1" class="table table-striped my-4 w-100" id="datatable1">
                                <thead>
                                <tr>
                                    <th data-priority="1">公司名称</th>
                                    <th>标题</th>
                                    <th>工作地点</th>
                                    <th>薪酬</th>
                                    <th>招聘人数</th>
                                    <th>创建时间</th>
                                    <th>更新时间</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="post of unauthPosts">
                                    <td>
                                        <router-link :to="{name:'showEntInfo',params:{entId:post.enterpriseAccountId}}">
                                            <label>{{post.enterpriseName}}</label>
                                        </router-link>
                                    </td>
                                    <td>
                                        <router-link :to="{name:'showPostInfo',params:{postId:post.id}}">

                                            <label>{{post.title}}</label>
                                        </router-link>
                                    </td>
                                    <td>
                                        <label>{{post.workLocation}}</label>
                                    </td>
                                    <td><label>{{post.salary}}</label></td>
                                    <td><label>{{post.headCount}}</label></td>
                                    <td><label>{{post.createTime.split("T")[0]}}</label></td>
                                    <td><label>{{post.updateTime.split("T")[0]}}</label></td>
                                    <td>
                                        <div class="badge badge-success" v-on:click="postPass(post.id)">通过</div>
                                    </td>
                                    <td>
                                        <div class="badge bg-gray-dark" v-on:click="postRefuse(post.id)">拒绝</div>
                                    </td>
                                </tr>
                                </tbody>
                            </Datatable>
                        </div>
                    </b-tab>
                    <b-tab title="已审核">
                        <div class="card-body">
                            <Datatable :options="dtOptions1" class="table table-striped my-4 w-100" id="datatable2">
                                <thead>
                                <tr>
                                    <th data-priority="1">公司名称</th>
                                    <th>标题</th>
                                    <th>工作地点</th>
                                    <th>薪酬</th>
                                    <th>招聘人数</th>
                                    <th>创建时间</th>
                                    <th>更新时间</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="post of authedPosts">
                                    <td>
                                        <router-link :to="{name:'showEntInfo',params:{entId:post.enterpriseAccountId}}">

                                            <label>{{post.enterpriseName}}</label>
                                        </router-link>
                                    </td>
                                    <td>
                                        <router-link :to="{name:'showPostInfo',params:{postId:post.id}}">

                                            <label>{{post.title}}</label>
                                        </router-link>
                                    </td>
                                    <td>
                                        <label>{{post.workLocation}}</label>
                                    </td>
                                    <td><label>{{post.salary}}</label></td>
                                    <td><label>{{post.headCount}}</label></td>
                                    <td><label>{{post.createTime.split("T")[0]}}</label></td>
                                    <td><label>{{post.updateTime.split("T")[0]}}</label></td>
                                    <td>
                                        <div class="badge bg-gray-dark" v-if="post.status===-1">已拒绝</div>
                                        <div class="badge badge-success" v-if="post.status===1">已通过</div>
                                    </td>
                                </tr>
                                </tbody>
                            </Datatable>
                        </div>
                    </b-tab>
                </b-tabs>
            </form>
        </div>
    </ContentWrapper>
</template>
<script>
    import Vue from 'vue'
    import VeeValidate from 'vee-validate';
    import AdminAPI from '../../service/AdminService';
    import Datatable from '@/components/Tables/Datatable';
    import Post from "../../model/Post";

    Vue.use(VeeValidate, {
        fieldsBagName: 'formFields'  // fix issue with b-table
    });

    export default {
        data() {
            return {

                postList: [],
                dtOptions1: {
                    'paging': true, // Table pagination
                    'ordering': true, // Column ordering
                    'info': true, // Bottom left status text
                    responsive: true,
                    // Text translation options
                    // Note the required keywords between underscores (e.g _MENU_)
                    oLanguage: {
                        sSearch: '<em class="fa fa-search"></em>',
                        sLengthMenu: '_MENU_ records per page',
                        info: 'Showing page _PAGE_ of _PAGES_',
                        zeroRecords: 'Nothing found - sorry',
                        infoEmpty: 'No records available',
                        infoFiltered: '(filtered from _MAX_ total records)',
                        oPaginate: {
                            sNext: '<em class="fa fa-caret-right"></em>',
                            sPrevious: '<em class="fa fa-caret-left"></em>'
                        }
                    }
                },

                authedPosts: [],
                unauthPosts: [],
            }
        },

        components: {
            Datatable
        },

        created() {
            this.getAllPosts();


        },
        methods: {

            getAllPosts: function () {
                this.authedPosts=[];
                this.unauthPosts=[];
                AdminAPI.getPosts().then(data => {
                    console.log(data);

                    for (let i = 0; i < data['authedPosts'].length; i++) {
                        let post = new Post();
                        post.transfer(data['authedPosts'][i]);
                        console.log(post);
                        this.authedPosts.push(post);
                    }
                    for (let i = 0; i < data['unauthPosts'].length; i++) {
                        let post = new Post();
                        post.transfer(data['unauthPosts'][i]);
                        console.log(post);
                        this.unauthPosts.push(post);
                    }


                })
            },


            postPass: function (postId) {
                AdminAPI.postPass(postId).then(data=>{
                    console.log(data);
                    this.getAllPosts();
                })

            },

            postRefuse: function (postId) {
                AdminAPI.postRefuse(postId).then(data=>{
                    console.log(data);
                    this.getAllPosts();
                })
            }
        }
    }
</script>
