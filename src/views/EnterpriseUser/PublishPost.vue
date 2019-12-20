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
                            <input class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">职位</label>
                        <div class="col-xl-10">
                            <input class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-2 col-form-label">位置</label>
                        <div class="col-md-10">
                            <select class="custom-select">
                                <option v-for="location of locationOptionList">{{location}}</option>
                            </select>

                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">薪酬(RMB/M)</label>
                        <div class="col-xl-10">
                            <input class="form-control" type="number"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">描述</label>
                        <div class="col-xl-10">
                            <textarea class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-2 col-form-label">招聘人数</label>
                        <div class="col-xl-10">
                            <input class="form-control" type="number"/>
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label class="col-md-2 col-form-label mb-2">开始时间</label>
                        <div class="col-xl-6 col-10">
                            <div class="mb-3">
                                <datepicker
                                        v-model="startValue"
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
                                        v-model="endValue"
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
                    <div class="form-group row">
                        <div class="col-xl-12">
                            <button class="btn btn-sm btn-secondary" type="submit" style="float: right">提交审核</button>
                        </div>
                    </div>

                    <!--                    <div class="form-group row">-->
                    <!--                        <div class="col-xl-10">-->
                    <!--                            <div class="btn btn-sm btn-secondary" v-on:click="changelll()">test</div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->

                    <!--                    <div class="form-group row"  v-if="test">-->
                    <!--                        <div class="col-xl-10">-->
                    <!--                            <button class="btn btn-sm btn-secondary" >llll</button>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                </form>
            </div>
        </div>
        <!-- END card-->
    </ContentWrapper>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'
    import moment from 'moment'

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

            }
        },
        components: {
            Datepicker,
        },

        methods: {
            changelll() {
                this.test = true;
            }
        }


    }
</script>
