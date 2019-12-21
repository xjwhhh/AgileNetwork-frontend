<template>
    <ContentWrapper>
        <div class="content-heading">企业管理

        </div>

        <!-- Zero Configuration-->
        <div class="card card-default">
            <div class="card-body">
                <Datatable :options="dtOptions1" class="table table-striped my-4 w-100" id="datatable1">
                    <thead>
                    <tr>
                        <th data-priority="1">公司名称</th>
                        <th>地址</th>
                        <th>邮箱</th>
                        <th>手机</th>
                        <th>税号</th>
                        <th>创建时间</th>
                        <th>更新时间</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="enterprise of enterpriseList">
                        <td>
                            <router-link :to="{name:'showEntInfo',params:{entId:enterprise.accountId}}">
                                <label>{{enterprise.name}}</label>
                            </router-link>
                        </td>
                        <td>
                            <label>{{enterprise.location}}</label>
                        </td>
                        <td>
                            <label>{{enterprise.email}}</label>
                        </td>
                        <td>
                            <label>{{enterprise.mobile}}</label>
                        </td>
                        <td>
                            <label>{{enterprise.creditCode}}</label>
                        </td>
                        <td>
                            <label>{{enterprise.createTime.split("T")[0]}}</label>
                        </td>
                        <td>
                            <label>{{enterprise.updateTime.split("T")[0]}}</label>
                        </td>
                        <td>
                            <button class="badge bg-gray-dark" v-on:click="deleteEnterprise(enterprise.accountId)">删除</button>

                        </td>
                    </tr>
                    </tbody>
                </Datatable>
            </div>
        </div>
    </ContentWrapper>
</template>
<script>
    import Datatable from '@/components/Tables/Datatable';
    import EnterpriseUser from "../../model/EnterpriseUser";
    import AdminAPI from '../../service/AdminService';

    export default {
        components: {
            Datatable
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
                enterpriseList: [],
            }
        },

        created() {
            this.getEnterpriseList();

        },

        methods: {
            getEnterpriseList() {
                AdminAPI.getAuthPassedEnterprise().then(data => {
                    for (let i = 0; i < data.length; i++) {
                        let ent = new EnterpriseUser();
                        ent.transfer(data[i]);
                        this.enterpriseList.push(ent);
                    }
                })

            },
            deleteEnterprise(accountId) {
                console.log(accountId);
            }
        },


    }
</script>

