<template>
    <ContentWrapper>
        <div class="content-heading">简历管理</div>
        <!-- Zero Configuration-->
        <div class="card card-default">
<!--            <div class="card-header">Blog articles manager</div>-->
            <div class="card-body">
                <Datatable :options="dtOptions1" class="table table-striped my-4 w-100" id="datatable1">
                    <thead>
                    <tr>
                        <th data-priority="1">简历名称</th>
                        <th>公司</th>
                        <th>创建时间</th>
                        <th>更新时间</th>
                        <th>投递时间</th>
                        <th>Updated</th>
                        <th>Comments</th>
                        <th data-priority="2">状态</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <a href="">AngularJS</a>
                        </td>
                        <td>
                            <a href="">Keith Gutierrez</a>
                        </td>
                        <td>
                            <a class="mr-2" href="">HTML5</a>
                            <a href="">JAVASCRIPT</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">angularjs</a>
                            <a class="mr-1 badge badge-primary" href="">mvc</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>1251</td>
                        <td>
                            <a class="mr-1 badge badge-success" href="">Public</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">MeteorJs and Angularjs</a>
                        </td>
                        <td>
                            <a href="">Carlos Wilson</a>
                        </td>
                        <td>
                            <a class="mr-2" href="">WEB</a>
                            <a href="">JAVASCRIPT</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">angularjs</a>
                            <a class="mr-1 badge badge-primary" href="">node</a>
                            <a class="mr-1 badge badge-primary" href="">meteor</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>1361</td>
                        <td>
                            <a class="mr-1 badge badge-warning" href="">Pending</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">Working with ExpressJS</a>
                        </td>
                        <td>
                            <a href="">Carlos Wilson</a>
                        </td>
                        <td>
                            <a class="mr-2" href="">SERVER</a>
                            <a href="">JAVASCRIPT</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">expressJS</a>
                            <a class="mr-1 badge badge-primary" href="">node</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td>
                            <a class="mr-1 badge badge-success" href="">Public</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">Abstract object styles</a>
                        </td>
                        <td>
                            <a href="">Carlos Wilson</a>
                        </td>
                        <td>
                            <a href="">JAVASCRIPT</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">coding</a>
                            <a class="mr-1 badge badge-primary" href="">node</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td>
                            <a class="mr-1 badge badge-success" href="">Public</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">Animating progress bars</a>
                        </td>
                        <td>
                            <a href="">Clyde Bailey</a>
                        </td>
                        <td>
                            <a class="mr-2" href="">BOOTSTRAP</a>
                            <a href="">WEB</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">coding</a>
                            <a class="mr-1 badge badge-primary" href="">css</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td>
                            <a class="mr-1 badge badge-danger" href="">Deleted</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">Contextual alternatives</a>
                        </td>
                        <td>
                            <a href="">Tracy Black</a>
                        </td>
                        <td>
                            <a class="mr-2" href="">BOOTSTRAP</a>
                            <a href="">WEB</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">coding</a>
                            <a class="mr-1 badge badge-primary" href="">less</a>
                            <a class="mr-1 badge badge-primary" href="">sass</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td>
                            <a class="mr-1 badge badge-warning" href="">Pending</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">Responsive embed</a>
                        </td>
                        <td>
                            <a href="">Brittany Harrison</a>
                        </td>
                        <td>
                            <a class="mr-2" href="">FOUNDATION</a>
                            <a href="">WEB</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">coding</a>
                            <a class="mr-1 badge badge-primary" href="">techniques</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td>
                            <a class="mr-1 badge" href="">Draft</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">Digging into AngularJS</a>
                        </td>
                        <td>
                            <a href="">Keith Gutierrez</a>
                        </td>
                        <td>
                            <a class="mr-2" href="">HTML5</a>
                            <a href="">JAVASCRIPT</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">angularjs</a>
                            <a class="mr-1 badge badge-primary" href="">mvc</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td>
                            <a class="mr-1 badge badge-success" href="">Public</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">Application with MeteorJs and Angularjs</a>
                        </td>
                        <td>
                            <a href="">Nevaeh Hunter</a>
                        </td>
                        <td>
                            <a class="mr-2" href="">WEB</a>
                            <a href="">SERVER</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">angularjs</a>
                            <a class="mr-1 badge badge-primary" href="">node</a>
                            <a class="mr-1 badge badge-primary" href="">meteor</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td>
                            <a class="mr-1 badge badge-warning" href="">Pending</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">Introduction to ExpressJS</a>
                        </td>
                        <td>
                            <a href="">Carlos Wilson</a>
                        </td>
                        <td>
                            <a class="mr-2" href="">SERVER</a>
                            <a href="">JAVASCRIPT</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">expressJS</a>
                            <a class="mr-1 badge badge-primary" href="">node</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td>
                            <a class="mr-1 badge badge-success" href="">Public</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">Optional classes</a>
                        </td>
                        <td>
                            <a href="">Peter Lucas</a>
                        </td>
                        <td>
                            <a href="">WEB</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">coding</a>
                            <a class="mr-1 badge badge-primary" href="">node</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td>
                            <a class="mr-1 badge badge-success" href="">Public</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">Typical user actions</a>
                        </td>
                        <td>
                            <a href="">Clyde Bailey</a>
                        </td>
                        <td>
                            <a class="mr-2" href="">BOOTSTRAP</a>
                            <a href="">WEB</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">coding</a>
                            <a class="mr-1 badge badge-primary" href="">css</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>1471</td>
                        <td>
                            <a class="mr-1 badge badge-danger" href="">Deleted</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">A lightweight, flexible component</a>
                        </td>
                        <td>
                            <a href="">Brittany Harrison</a>
                        </td>
                        <td>
                            <a class="mr-2" href="">BOOTSTRAP</a>
                            <a href="">WEB</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">coding</a>
                            <a class="mr-1 badge badge-primary" href="">less</a>
                            <a class="mr-1 badge badge-primary" href="">sass</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>1581</td>
                        <td>
                            <a class="mr-1 badge badge-warning" href="">Pending</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="">Highlight new or unread items</a>
                        </td>
                        <td>
                            <a href="">Abigail Phillips</a>
                        </td>
                        <td>
                            <a class="mr-2" href="">FOUNDATION</a>
                            <a href="">WEB</a>
                        </td>
                        <td>
                            <a class="mr-1 badge badge-primary" href="">coding</a>
                            <a class="mr-1 badge badge-primary" href="">techniques</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>1691</td>
                        <td>
                            <a class="mr-1 badge" href="">Draft</a>
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
                }
            }
        }
    }
</script>
