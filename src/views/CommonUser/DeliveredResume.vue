<template>
    <ContentWrapper>

        <div class="content-heading">简历管理</div>
        <!-- Zero Configuration-->
        <div class="row">
            <div class="col-lg-6">
                <div class="card card-default">
                    <!--            <div class="card-header">Blog articles manager</div>-->
                    <div class="card-header d-flex align-items-center">
                        <div class="d-flex justify-content-center col">
                            <div class="h4 m-0 text-center">投递列表</div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <!--<button  class="btn btn-primary" v-on:click="addResume('fe')">添加简历</button>-->
                        </div>
                    </div>
                    <div class="card-body">
                        <Datatable :options="dtOptions1" class="table table-striped my-4 w-100" id="datatable1">
                            <thead>
                            <tr>
                                <th data-priority="1">简历名称</th>
                                <th>投递时间</th>
                                <th>招聘信息</th>
                                <th>公司</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in postResume ">
                                <td>
                                    <a  :href="item.annexUrl" >{{item.resumeName}}</a>
                                </td>
                                <td>
                                    {{item.createTime}}
                                </td>
                                <td>
                                    <router-link  :to="{name:'postInfo', params: { pid: item.postId }}">{{item.postTitle}}</router-link>
                                <td>
                                    <router-link :to="{name:'commonEnterpriseInfo', params: { eid: item.enterpriseId }}" class="ml-1" style="color: #6c757d">{{item.enterpriseName}}</router-link>
                                </td>

                            </tr>
                            </tbody>
                        </Datatable>
                    </div>
                </div>


            </div>
            <div class="col-lg-6">
                <div class="card card-default" v-if="addFile">
                    <div class="card-header d-flex align-items-center">
                        <div class="d-flex justify-content-center col">
                            <div class="h4 m-0 text-center">添加简历</div>
                        </div>
                        <div class="d-flex justify-content-end">

                            <a v-on:click="closeAddFile()" class="button">
                                <em  class="fa-2x icon-close mr-2"></em>
                            </a>

                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row py-4 justify-content-center">
                            <div class="col-12 col-sm-10">
                                <form class="form-horizontal">
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-3 col-md-4 col-5 col-form-label text-right" >名称</label>
                                        <div class="col-xl-9 col-md-8 col-7">
                                            <input class="form-control" v-model="addName" id="addName" type="text" placeholder=""   />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-3 col-md-4 col-5 col-form-label text-right">简历文件</label>
                                        <div class="col-xl-9 col-md-8 col-7">
                                            <!-- Styled -->
                                            <b-form-file  v-model="file"  placeholder="选择一个文件"></b-form-file>
                                        </div>
                                    </div>
                                    <div class="form-group row text-right">
                                        <div class="col-md-9">

                                        </div>
                                        <div class="col-md-3">
                                            <button class="btn btn-info right " type="button" v-on:click="addResume()" >确认添加</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card card-default">
                    <!--            <div class="card-header">Blog articles manager</div>-->
                    <div class="card-header d-flex align-items-center">
                        <div class="d-flex justify-content-center col">
                            <div class="h4 m-0 text-center">简历列表</div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button  class="btn btn-primary" v-on:click="showAddResume()">添加简历</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <Datatable  class="table table-striped my-4 w-100" id="datatable1">
                            <thead>
                            <tr>
                                <th data-priority="1">简历名称</th>
                                <th>简历附件</th>
                                <th>创建时间</th>
                                <!--<th>更新时间</th>-->
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in resumes">
                                <td>
                                    <p >{{item.name}}</p>
                                </td>
                                <td>
                                    <a :href="item.annexUrl">下载</a>
                                </td>
                                <td>{{item.createTime}}</td>
                                <!--<td>{{// item.updateTime | formatDate}}</td>-->
                                <td>
                                    <div class="btn-group">
                                        <!--<button class="btn btn-secondary">修改</button>-->
                                        <button class="btn btn-secondary" @click="delResume(item.id)">删除</button>
                                    </div>
                                </td>
                            </tr>

                            </tbody>
                        </Datatable>
                    </div>
                </div>
            </div>
        </div>

    </ContentWrapper>
</template>
<script>
    import Datatable from '../../components/Tables/Datatable';
    import axios from 'axios'
    import qs from 'qs'
    import  swal from 'sweetalert2'
    // import { formatDate } from 'vux'

    export default {
        components: {
            // Datatable
        },
        data() {
            return {
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
                file:null,
                addFile:false,
                addName:'',
                postResume:new Array(),
                resumes:new Array(),
            }
        },

        created(){
            this.init();
        },
        methods:{
            delResume:function(id) {
               // alert("you want delete this "+id)
                axios.delete('http://118.25.180.45:8088/api/user/resume/'+id, {withCredentials:true})
                    .then(function (response) {
                        // console.log("2345678")
                        // alert("bbb")
                        swal({
                            title: "删除成功",
                            heightAuto: false
                        })
                    }.bind(this)).catch(function (error) {
                    // console.log("ree",error)
                    swal({
                        title: "上传失败，请注意格式问题",
                        heightAuto: false
                    })
                    return '';
                })
            },

            init:function(){
                axios.get('http://118.25.180.45:8088/api/user/'+this.$route.params.id+'/resumes',{withCredentials:true}).then(data=>{
                    this.resumes=data.data;
                    console.log(data.data)
                })
                this.getUserDeliveredResume()
            },



            showAddResume:function () {
                this.addFile = true;
            },
            //获取用户已投递简历
            getUserDeliveredResume:function () {
                axios.get('http://118.25.180.45:8088/api/user/'+this.$route.params.id+'/resumes/sent',{withCredentials:true}).then(data=>{
                    // console.log("data=>",data.data);
                    this.postResume = data.data
                })
            },
            closeAddFile:function () {
                this.addFile = false;
            },
            addResume:function () {
                // 添加简历
                let formData = new FormData();
                formData.append('file',this.file)
                axios.post('http://118.25.180.45:8088/api/common/general_file', formData,{withCredentials:true})
                    .then(function (response) {
                        console.log(response)
                        axios.post('http://118.25.180.45:8088/api/user/'+this.$route.params.id+'/resume', {
                            'name':this.addName,
                            'annexUrl':response.data
                        },{withCredentials:true})
                            .then(function (response) {
                                console.log("2345678")
                                // this.resumes = response.data
                                this.closeAddFile();
                            }.bind(this)).catch(function (error) {
                            // console.log("ree",error)
                            swal({
                                title: "上传失败，请注意格式问题",
                                heightAuto: false
                            })
                            return '';
                        })

                    }.bind(this)).catch(function (error) {
                    // console.log("ree",error)
                    swal({
                        title: "上传失败，请注意格式问题",
                        heightAuto: false
                    })
                    return '';
                });
            },
            uploadFile(){
                // 添加简历
                let formData = new FormData();
                formData.append('file',this.file)
                axios.post('http://118.25.180.45:8088/api/common/general_file', formData,{withCredentials:true})
                    .then(function (response) {
                        return response.data;
                    }.bind(this)).catch(function (error) {
                    // console.log("ree",error)
                    swal({
                        title: "上传失败，请注意格式问题",
                        heightAuto: false
                    })
                    return '';
                });
            }
        }
    }
</script>

<style scoped>




</style>
