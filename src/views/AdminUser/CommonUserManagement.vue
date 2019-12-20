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
                        <th>创建时间</th>
                        <th>更新时间</th>
                        <th>已投简历</th>
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
                            <label>{{user.createTime}}</label>
                        </td>
                        <td>{{user.updateTime}}</td>
                        <td>{{user.deliveredResume}}</td>
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
            this.getUserInfo();

        },

        methods:{
            getUserList(){
                this.commonUserList=[];
            },

            getUserInfo:function () {
                for(let i=0;i<10;i++){
                    let user=new CommonUser();
                    user.id=i;
                    user.name='testuser';
                    user.university='njdx';
                    user.headUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576742745082&di=139aaf86c89d1c21698da6fd57cd1be6&imgtype=0&src=http%3A%2F%2F787823.s21i.faiusr.com%2F2%2FABUIABACGAAg-ZmKwwUowL7X5AUwigU41AQ.jpg';
                    this.commonUserList.push(user);
                }
            }
        }
    }
</script>
