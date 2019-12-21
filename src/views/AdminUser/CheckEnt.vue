<template>
    <ContentWrapper>
        <div class="content-heading">企业审核
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
                                            <th>地址</th>
                                            <th>税号</th>
                                            <th>认证文件</th>
                                            <th>创建时间</th>
                                            <th>更新时间</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="enterprise of uncheckedEntList">
                                            <td>
                                                <router-link :to="{name:'showEntInfo',params:{entId:enterprise.accountId}}">
                                                    <label>{{enterprise.enterpriseName}}</label>
                                                </router-link>
                                            </td>
                                            <td>
                                                <label>{{enterprise.location}}</label>
                                            </td>
                                            <td>
                                                <label>{{enterprise.creditCode}}</label>
                                            </td>
                                            <td>
                                                <a v-bind:href="enterprise.licenseUrl">认证文件</a>
                                            </td>
                                            <td><label>{{enterprise.createTime.split("T")[0]}}</label></td>
                                            <td><label>{{enterprise.updateTime.split("T")[0]}}</label></td>
                                            <td>
                                                <div class="badge badge-success" v-on:click="entPass(enterprise.accountId)">通过</div>
                                            </td>
                                            <td>
                                                <div class="badge bg-gray-dark" v-on:click="entRefuse(enterprise.accountId)">拒绝</div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Datatable>
<!--                                </div>-->
                            </div>
                    </b-tab>
                    <b-tab title="已审核" >
                        <div class="card-body">
                            <Datatable :options="dtOptions1" class="table table-striped my-4 w-100" id="datatable1">
                                <thead>
                                <tr>
                                    <th data-priority="1">公司名称</th>
                                    <th>地址</th>
                                    <th>税号</th>
                                    <th>认证文件</th>
                                    <th>创建时间</th>
                                    <th>更新时间</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="enterprise of checkedEntList">
                                    <td>
                                        <router-link :to="{name:'showEntInfo',params:{entId:enterprise.accountId}}">
                                            <label>{{enterprise.enterpriseName}}</label>
                                        </router-link>
                                    </td>
                                    <td>
                                        <label>{{enterprise.location}}</label>
                                    </td>
                                    <td>
                                        <label>{{enterprise.creditCode}}</label>
                                    </td>
                                    <td>
                                        <a v-bind:href="enterprise.licenseUrl">认证文件</a>
                                    </td>
                                    <td><label>{{enterprise.createTime.split("T")[0]}}</label></td>
                                    <td><label>{{enterprise.updateTime.split("T")[0]}}</label></td>
                                    <td>
                                        <div class="col-xl-10 col-md-9 col-8" v-if="enterprise.authStatus===1">
                                            <div class="float-left">
                                                    <div class="badge badge-success">已认证</div>
                                            </div>
                                        </div>
                                        <div class="col-xl-10 col-md-9 col-8" v-if="enterprise.authStatus===0">
                                            <div class="float-left">
                                                    <div class="badge badge-info">审核中</div>
                                            </div>
                                        </div>
                                        <div class="col-xl-10 col-md-9 col-8" v-if="enterprise.authStatus===-1">
                                            <div class="float-left">
                                                    <div class="badge bg-gray-dark">认证失败</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </Datatable>
                            <!--                                </div>-->
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
    import Datatable from '@/components/Tables/Datatable';
    import EnterpriseUser from "../../model/EnterpriseUser";
    import AdminAPI from '../../service/AdminService';
    import Layout from "../../components/Layout/Layout";

    Vue.use(VeeValidate, {
        fieldsBagName: 'formFields'  // fix issue with b-table
    });

    export default {
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

                enterpriseList:[],

                uncheckedEntList:[],
                checkedEntList:[],
            }
        },

        components:{
            Layout,
            Datatable,
        },

        created(){
            this.getEnterpriseList();
        },
        methods: {


            getEnterpriseList(){

                this.uncheckedEntList=[];
                this.checkedEntList=[];

                AdminAPI.getUncheckedEntInfo().then(data=>{
                    console.log(data);
                    for(let i=0;i<data.length;i++){
                        let ent=new EnterpriseUser();
                        ent.transfer(data[i]);
                        this.uncheckedEntList.push(ent);
                    }
                });

                AdminAPI.getCheckedEntInfo().then(data=>{
                    console.log(data);
                    for(let i=0;i<data.length;i++){
                        let ent=new EnterpriseUser();
                        ent.transfer(data[i]);
                        this.checkedEntList.push(ent);
                    }
                });


            },

            entPass:function (accountId) {
                AdminAPI.enterprisePass(accountId).then(data=>{
                    console.log(data);
                    this.getEnterpriseList();
                })
            },

            entRefuse:function (accountId) {
                AdminAPI.enterpriseRefuse(accountId).then(data=>{
                    console.log(data);
                    this.getEnterpriseList();
                })
            }

            // getApp
        }
    }
</script>
