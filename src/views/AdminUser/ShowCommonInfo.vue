<template>
    <ContentWrapper>
        <div class="row">
            <div class="col-lg-4">
                <div class="card card-default" id="simpleInfo">
                    <div class="card-body text-center">
                        <div class="py-4">
                            <img class="img-fluid rounded-circle img-thumbnail thumb96" v-on:click="showChangeAtatar()"
                                 v-bind:src="user.avatar" alt="Contact"/>
                        </div>
                        <h3 class="m-0 text-bold">{{user.name}}</h3>
                        <div class="my-3">
                            <p>{{user.university}}<span>-</span>{{user.education}}</p>
                        </div>

                    </div>
                </div>

            </div>
            <div class="col-lg-8">
                <div class="card card-default" v-if="changeAtatar" id="changeAtatar">
                    <div class="card-header d-flex align-items-center">
                        <div class="d-flex justify-content-center col">
                            <div class="h4 m-0 text-center">修改头像</div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <a v-on:click="closeAtatar()" class="button">
                                <em class="fa-2x icon-close mr-2"></em>
                            </a>

                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row py-4 justify-content-center">
                            <div class="col-12 col-sm-10">
                                <div class="container-md">
                                    <div class="row">
                                        <div class="col-xl-7">
                                            <b-modal v-model="previewModalShow" :ok-only="true" ok-title="Close"
                                                     ok-variant="secondary" :hide-header="true">
                                                <img :src="previewImage" alt="Modal Preview Image"
                                                     class="img-fluid d-block mx-auto">
                                            </b-modal>
                                            <div class="mb-3" :class="{ 'd-none': !imageSrc }" style="height: 400px;">
                                                <vueCropper ref="cropper" :img="imageSrc" :outputSize="outputSize"
                                                            :outputType="outputType" :info="true"
                                                            @realTime="previewRealTime"/>
                                            </div>
                                            <div class="btn-group flex-wrap">
                                                <label class="btn btn-primary mb-2 mr-2" for="change-image">
                                                    <input class="sr-only" type="file" id="change-image"
                                                           accept="image/png, image/jpeg, image/gif, image/jpg"
                                                           @change="changeImage($event)">修改图片
                                                </label>
                                                <b-btn class="mr-2 mb-2" @click="startCrop" v-if="!crap"
                                                       :disabled="!imageSrc">开始裁剪
                                                </b-btn>
                                                <b-btn class="mr-2 mb-2" @click="stopCrop" variant="danger" v-else
                                                       :disabled="!imageSrc">停止裁剪
                                                </b-btn>
                                                <b-btn class="mr-2 mb-2" @click="clearCrop" :disabled="!imageSrc">清空
                                                </b-btn>
                                                <b-btn class="mr-2 mb-2" @click="changeScale(1)" :disabled="!imageSrc">
                                                    放大
                                                </b-btn>
                                                <b-btn class="mr-2 mb-2" @click="changeScale(-1)" :disabled="!imageSrc">
                                                    缩小
                                                </b-btn>
                                                <b-btn class="mr-2 mb-2" @click="rotateLeft" :disabled="!imageSrc">
                                                    向左旋转
                                                </b-btn>
                                                <b-btn class="mr-2 mb-2" @click="rotateRight" :disabled="!imageSrc">
                                                    向右旋转
                                                </b-btn>

                                            </div>


                                        </div>
                                        <div class="col-xl-5">
                                            <div class="mb-3" style="height: 400px">
                                                <p>预览</p>
                                                <div :style="{'width': realTimePreviewData.w + 'px', 'height': realTimePreviewData.h + 'px', 'overflow': 'hidden', 'margin': '5px'}">
                                                    <div :style="realTimePreviewData.div">
                                                        <img :src="realTimePreviewData.url"
                                                             :style="realTimePreviewData.img">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="btn-group flex-wrap">
                                                <div class="col-md-9">
                                                    <!--<button class="btn btn-info right " type="button" v-on:click="changeInfo()" >确认修改</button>-->
                                                </div>
                                                <div class="col-md-2">
                                                    <button class="btn btn-info right " type="button"
                                                            v-on:click="confirmChangeAtatar()">确认修改
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="card card-default" v-if="!changeInfo" id="showInfo">
                    <div class="card-header d-flex align-items-center">
                        <div class="d-flex justify-content-center col">
                            <div class="h4 m-0 text-center">个人信息</div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row py-4 justify-content-center">
                            <div class="col-12 col-sm-10">
                                <div class="form-horizontal">
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">名称</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left"
                                               v-text="user.name"></p>
                                            <!--<input class="form-control" id="inputContact1" type="text" placeholder="" v-model="user.name" />-->
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">邮箱</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left"
                                               v-text="user.email"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">大学</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left"
                                               v-text="user.university"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">学位</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left"
                                               v-text="user.education"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">年龄</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left"
                                               v-text="user.age"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">性别</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left"
                                               v-text="user.gender"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">手机</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left"
                                               v-text="user.mobile"></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="card card-default" v-if="changeInfo" id="changeInfo">
                    <div class="card-header d-flex align-items-center">
                        <div class="d-flex justify-content-center col">
                            <div class="h4 m-0 text-center">修改个人信息</div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <b-dropdown id="ddown1" variant="link" no-caret right>
                                <template slot="button-content">
                                    <em class="fa fa-ellipsis-v fa-lg text-muted"></em>
                                </template>
                                <b-dropdown-item v-on:click="changePass()">修改密码</b-dropdown-item>
                            </b-dropdown>
                            <a v-on:click="closeInfo()" class="button">
                                <em class="fa-2x icon-close mr-2"></em>
                            </a>

                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row py-4 justify-content-center">
                            <div class="col-12 col-sm-10">
                                <form class="form-horizontal">

                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">邮箱</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeEmail" type="email" placeholder=""
                                                   v-model="user.email" disabled/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">名称</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeName" type="text" placeholder=""
                                                   v-model="user.name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">大学</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeUniversity" type="text" placeholder=""
                                                   v-model="user.university"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">学位</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeEducation" type="text" placeholder=""
                                                   v-model="user.education"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">年龄</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeAge" type="text" placeholder=""
                                                   v-model="user.age"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">性别</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeGender" type="text" placeholder=""
                                                   v-model="user.gender"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right">手机</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeMobile" type="text" placeholder=""
                                                   v-model="user.mobile"/>
                                        </div>
                                    </div>
                                    <div class="form-group row text-right">
                                        <div class="col-md-10">

                                        </div>
                                        <div class="col-md-2">
                                            <button class="btn btn-info right " type="button"
                                                    v-on:click="confirmChangeInfo()">确认修改
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="card card-default" v-if="changePassword" id="changePassword">
                    <div class="card-header d-flex align-items-center">
                        <div class="d-flex justify-content-center col">
                            <div class="h4 m-0 text-center">修改密码</div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <a v-on:click="closePass()" class="button">
                                <em class="fa-2x icon-close mr-2"></em>
                            </a>

                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row py-4 justify-content-center">
                            <div class="col-12 col-sm-10">
                                <form class="form-horizontal">
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                                               for="oldPassword">旧密码</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="oldPassword" type="password" placeholder=""
                                                   v-model="oldPassword"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                                               for="newPassword">新密码</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="newPassword" type="password"
                                                   v-model="newPassword"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                                               for="retryPassword">确认密码</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="retryPassword" type="password"
                                                   v-model="retryPass"/>
                                        </div>
                                    </div>
                                    <div class="form-group row text-right">
                                        <div class="col-md-10">

                                        </div>
                                        <div class="col-md-2">
                                            <button class="btn btn-info right " type="button"
                                                    v-on:click="confirmChangePassword()">确认修改
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>
<script>
    import Vue from 'vue'
    import VeeValidate from 'vee-validate';
    import CommonUser from "../../model/CommonUser";
    import axios from 'axios';

    Vue.use(VeeValidate, {
        fieldsBagName: 'formFields'  // fix issue with b-table
    })

    export default {
        data() {
            return {
                user: new CommonUser(),
                changeInfo: false,
                changePassword: false,
                changeAtatar: false,

                uid: null,
                imageSrc: '',
                outputSize: 1,
                outputType: 'jpeg',
                realTimePreviewData: {},
                crap: false,
                previewImage: null,
                previewModalShow: false,
                tempData: null,
                newPassword: '',
                retryPass: '',
                oldPassword: '',
            }
        },

        created() {
            this.user.id = this.$route.params['commonId'];
            this.getUserInfo();
        },


        methods: {


            getUserInfo: function () {
                axios.get('http://47.98.174.59:8088/api/user/' + this.user.id).then(data => {
                    console.log(data);
                    this.user.transfer(data.data);
                    //console.log("--->user",this.user.avatar)
                    this.previewImage = this.user.avatar
                    this.imageSrc = this.user.avatar
                })
            }
        },
    }
</script>
