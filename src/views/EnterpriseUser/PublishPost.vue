<template>
    <ContentWrapper>
        <div class="content-heading">
            <div>发布招聘信息
                <small>为您的公司寻找需要的人才吧</small>
            </div>
        </div>
        <!-- START card-->


        <div class="card card-default">
            <!--            <div class="card-header">Horizontal form</div>-->
            <div class="card-body">
                <form class="form-horizontal">
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">招聘标题</label>
                        <div class="col-xl-10">
                            <input class="form-control" v-model="post.name"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">职位</label>
                        <div class="col-xl-10">
                            <input class="form-control" v-model="post.job"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-2 col-form-label">位置</label>
                        <div class="col-md-10">
                            <select class="custom-select" v-model="post.workLocation">
                                <option v-for="location of locationOptionList">{{location}}</option>
                            </select>

                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">薪酬(RMB/M)</label>
                        <div class="col-xl-10">
                            <input class="form-control" type="number" v-model="post.salary"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">描述</label>
                        <div class="col-xl-10">
                            <textarea class="form-control" v-model="post.description"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">招聘人数</label>
                        <div class="col-xl-10">
                            <input class="form-control" type="number" v-model="post.peopleNum"/>
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label class="col-md-2 col-form-label mb-2">开始时间</label>
                        <div class="col-xl-6 col-10">
                            <div class="mb-3">
                                <datepicker
                                        v-model="post.startTime"
                                        :bootstrapStyling="true"
                                        :monday-first="true"
                                        :full-month-name="true"
                                        placeholder="Select date"
                                        :calendar-button="true"
                                        calendar-button-icon="far fa-calendar"
                                        :clear-button="true"
                                        :disabled-dates="disabledStart"
                                        :highlighted="highlightedDates"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label class="col-md-2 col-form-label mb-2">结束时间</label>
                        <div class="col-xl-6 col-10">
                            <div class="mb-3">
                                <datepicker
                                        v-model="post.endTime"
                                        :bootstrapStyling="true"
                                        :monday-first="true"
                                        :full-month-name="true"
                                        placeholder="Select date"
                                        :calendar-button="true"
                                        calendar-button-icon="far fa-calendar"
                                        :clear-button="true"
                                        :disabled-dates="disabledEnd"
                                        :highlighted="highlightedDates"/>
                            </div>
                        </div>
                    </div>

                </form>
                <div class="form-group row">
                    <div class="col-xl-12">
                        <button class="btn btn-sm btn-secondary" v-on:click="publishPost()" style="float: right">提交审核</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- END card-->
    </ContentWrapper>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'
    import moment from 'moment'
    import Post from "../../model/Post";

    export default {
        data() {
            return {
                locationOptionList: ['北京', '上海', '南京'],

                startValue: moment().toDate(),
                endValue: moment().add(1, 'd').toDate(),
                disabledStart: {
                    days: [0] // Disable sunday
                },
                disabledEnd: {
                    days: [0] // Disable sunday
                },
                highlightedDates: {
                    dates: [
                        moment().add(1, 'd').toDate(),
                        moment().add(2, 'd').toDate(),
                        moment().add(3, 'd').toDate()
                    ]
                },

                test: false,

                post:new Post(),

            }
        },
        components: {
            Datepicker,
        },

        methods: {

            //发布招聘信息
            publishPost(){
                console.log(this.post);

            }
        }


    }
</script>
