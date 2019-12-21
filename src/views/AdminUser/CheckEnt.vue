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
<!--                                            <th>描述</th>-->
                                            <th>税号</th>
                                            <th>认证文件</th>
                                            <th>创建时间</th>
                                            <th>更新时间</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="enterprise of enterpriseList">
                                            <td>
                                                <router-link :to="{name:'showEntInfo',params:{entId:enterprise.accountId}}">
                                                    <label>{{enterprise.enterpriseName}}</label>
                                                </router-link>
                                            </td>
                                            <td>
                                                <label>{{enterprise.location}}</label>
                                            </td>
<!--                                            <td>-->
<!--                                                <label>{{enterprise.description}}</label>-->
<!--                                            </td>-->
                                            <td>
                                                <label>{{enterprise.creditCode}}</label>
                                            </td>
                                            <td>
                                                <label>{{enterprise.licenseUrl}}</label>
                                            </td>
                                            <td>{{enterprise.createTime}}</td>
                                            <td>{{enterprise.updateTime}}</td>
                                        </tr>
                                        </tbody>
                                    </Datatable>
<!--                                </div>-->
                            </div>
                    </b-tab>
                    <b-tab title="已审核" >
                        <div class="row">
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
            }
        },

        components:{
            Datatable,
        },

        created(){
            this.getEnterpriseList();
        },
        methods: {


            getEnterpriseList(){
                this.enterpriseList=[];
                for(let i=0;i<10;i++){
                    let enterprise=new EnterpriseUser();
                    enterprise.id='1';
                    enterprise.accountId='1';
                    enterprise.enterpriseName='南京大学';
                    enterprise.email='nju@nju.edu.cn';
                    enterprise.headUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576742745082&di=139aaf86c89d1c21698da6fd57cd1be6&imgtype=0&src=http%3A%2F%2F787823.s21i.faiusr.com%2F2%2FABUIABACGAAg-ZmKwwUowL7X5AUwigU41AQ.jpg';

                    enterprise.description='南京大学（Nanjing University），简称南大，是中华人民共和国教育部直属的综合性全国重点大学，位列世界一流大学建设高校（A类）、211工程、985工程，是九校联盟、中国大学校长联谊会、环太平洋大学联盟、21世纪学术联盟、国际应用科技开发协作网、东亚研究型大学协会、新工科教育国际联盟、中国高校行星科学联盟、长三角研究型大学联盟成员，入选珠峰计划、111计划、2011计划、卓越工程师教育培养计划、卓越医生教育培养计划、卓越法律人才教育培养计划、国家建设高水平大学公派研究生项目、新工科研究与实践项目、全国深化创新创业教育改革示范高校、中国政府奖学金来华留学生接收院校、教育部来华留学示范基地、国家级双创示范基地。';
                    enterprise.location="南京";
                    enterprise.status='1';
                    enterprise.creditCode='税号';
                    enterprise.licenceUrl='认证文件url';
                    this.enterpriseList.push(enterprise);
                }
                console.log(this.enterpriseList);
            }

            // getApp
        }
    }
</script>
