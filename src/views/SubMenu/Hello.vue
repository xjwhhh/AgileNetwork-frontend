<template>
    <ContentWrapper>
        <p>hello</p>
        <input style="height:35px;width:200px" type="button" class="btn-register" name="reigsterButton" value="注册" v-on:click="register">
    </ContentWrapper>
</template>

<script>
    import axios from 'axios'
    import Vue from 'Vue'
    import qs from 'qs'
    Vue.prototype.$axios = axios

    export default {
        data () {
            return {
                aboutMsg: '我是hello组件'
            }
        },
        methods: {
            register: function(event) {
                //判断是否输入必填项
                    this.$axios({
                        method: "POST",
                        url: 'http://127.0.0.1:8090/Bug/api/history/test',
                        transformRequest: [
                            function(data) {
                                // 对 data 进行任意转换处理
                                return qs.stringify(data);
                            }
                        ],

                        data: { case_take_id: "105-166", page: "出行服务-时刻表查询",start:"0",count:"10" },
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    })
                        .then(function(response) {
                            var data = response.data
                            //显示错误信息
                            console.log(data);
                        }, function(response) {
                            alert(response.status)
                        })

            },

        }
    }
</script>
