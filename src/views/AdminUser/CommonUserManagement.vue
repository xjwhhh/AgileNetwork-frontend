<template>
    <ContentWrapper>
        <div class="content-heading">个人管理

        </div>

        <!-- Zero Configuration-->
        <div class="card card-default">
            <!--            <div class="card-header">Blog articles manager</div>-->
            <div class="card-body">
                <Datatable :options="dtOptions1" class="table table-striped my-4 w-100" id="datatable1">
                    <thead>
                    <tr>
                        <th data-priority="1">姓名</th>
                        <th>邮箱</th>
                        <th>大学</th>
                        <th>手机</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>创建时间</th>
                        <th>更新时间</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="user of commonUserList">
                        <td>
                            <router-link :to="{name:'showCommonInfo',params:{commonId:1}}">
                                <label>{{user.name}}</label>
                            </router-link>
                        </td>
                        <td>
                            <label>{{user.email}}</label>
                        </td>
                        <td>
                            <label>{{user.university}}</label>
                        </td>
                        <td>
                            <label>{{user.mobile}}</label>
                        </td>
                        <td>
                            <label>{{user.age}}</label>
                        </td>
                        <td>
                            <label>{{user.gender}}</label>
                        </td>
                        <td>
                            <label>{{user.createTime.split("T")[0]}}</label>
                        </td>
                        <td><label>{{user.updateTime.split("T")[0]}}</label></td>
                        <td>
                            <button class="badge bg-gray-dark" v-on:click="deleteUser(user.id)">删除</button>
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
    import CommonUser from "../../model/CommonUser";
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
                commonUserList:[],
            }
        },


        created(){
            this.getUserList();

        },

        methods:{
            getUserList(){
                // this.commonUserList=[];
                AdminAPI.getCommonUser().then(data=>{
                    console.log(data);
                    for(let i=0;i<data.length;i++){
                        let user=new CommonUser();
                        user.transfer(data[i]);
                        this.commonUserList.push(user);
                    }
                })
            },


            deleteUser:function (userId) {
                console.log(userId);
            }
        }
    }
</script>
