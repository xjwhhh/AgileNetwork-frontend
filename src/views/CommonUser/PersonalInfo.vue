<template>
    <ContentWrapper>
        <div class="row">
            <div class="col-lg-4">
                <div class="card card-default" id="simpleInfo">
                    <div class="card-body text-center">
                        <div class="py-4">
                            <img class="img-fluid rounded-circle img-thumbnail thumb96" v-on:click="showChangeAtatar()" v-bind:src="user.avatar" alt="Contact" />
                        </div>
                        <h3 class="m-0 text-bold">{{user.name}}</h3>
                        <div class="my-3">
                            <p>{{user.university}}<span>-</span>{{user.education}}</p>
                        </div>
                        <div class="text-center">
                            <button  class="btn btn-primary" v-on:click="hello('fe')">修改个人信息</button>
                        </div>
                        <!--<div class="text-center">-->
                            <!--<a class="btn btn-primary" href="#">修改密码</a>-->
                        <!--</div>-->

                    </div>
                </div>
                <div class="card card-default d-none d-lg-block">
                    <div class="card-header">
                        <div class="card-title text-center">最近投递的简历</div>
                    </div>
                    <div class="card-body">
                        <div class="media">
                            <img class="align-self-center mr-2 rounded-circle img-thumbnail thumb48" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3672407583,4066110750&fm=26&gp=0.jpg" alt="Contact" />
                            <div class="media-body py-2">
                                <div class="text-bold">251技术优先公司
                                    <div class="text-sm text-muted">11天前</div>
                                </div>
                            </div>
                        </div>
                        <div class="media">
                            <img class="align-self-center mr-2 rounded-circle img-thumbnail thumb48" src="http://img5.imgtn.bdimg.com/it/u=109112484,3959150699&fm=26&gp=0.jpg" alt="Contact" />
                            <div class="media-body py-2">
                                <div class="text-bold">251技术优先公司
                                    <div class="text-sm text-muted">11天前</div>
                                </div>
                            </div>
                        </div>
                        <div class="media">
                            <img class="align-self-center mr-2 rounded-circle img-thumbnail thumb48" src="http://img5.imgtn.bdimg.com/it/u=109112484,3959150699&fm=26&gp=0.jpg" alt="Contact" />
                            <div class="media-body py-2">
                                <div class="text-bold">251技术优先公司
                                    <div class="text-sm text-muted">11天前</div>
                                </div>
                            </div>
                        </div>
                        <div class="media">
                            <img class="align-self-center mr-2 rounded-circle img-thumbnail thumb48" src="http://img5.imgtn.bdimg.com/it/u=109112484,3959150699&fm=26&gp=0.jpg" alt="Contact" />
                            <div class="media-body py-2">
                                <div class="text-bold">251技术优先公司
                                    <div class="text-sm text-muted">11天前</div>
                                </div>
                            </div>
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
                                <em  class="fa-2x icon-close mr-2"></em>
                            </a>

                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row py-4 justify-content-center">
                            <div class="col-12 col-sm-10">
                                <div class="container-md">
                                    <div class="row">
                                        <div class="col-xl-7">
                                            <b-modal v-model="previewModalShow" :ok-only="true" ok-title="Close" ok-variant="secondary" :hide-header="true">
                                                <img :src="previewImage" alt="Modal Preview Image" class="img-fluid d-block mx-auto">
                                            </b-modal>
                                            <div class="mb-3" :class="{ 'd-none': !imageSrc }" style="height: 400px;">
                                                <vueCropper ref="cropper" :img="imageSrc" :outputSize="outputSize" :outputType="outputType" :info="true" @realTime="previewRealTime" />
                                            </div>
                                            <div class="btn-group flex-wrap">
                                                <label class="btn btn-primary mb-2 mr-2" for="change-image">
                                                    <input class="sr-only" type="file" id="change-image" accept="image/png, image/jpeg, image/gif, image/jpg" @change="changeImage($event)">修改图片
                                                </label>
                                                <b-btn class="mr-2 mb-2" @click="startCrop" v-if="!crap" :disabled="!imageSrc">开始裁剪</b-btn>
                                                <b-btn class="mr-2 mb-2" @click="stopCrop" variant="danger" v-else :disabled="!imageSrc">停止裁剪</b-btn>
                                                <b-btn class="mr-2 mb-2" @click="clearCrop" :disabled="!imageSrc">清空</b-btn>
                                                <b-btn class="mr-2 mb-2" @click="changeScale(1)" :disabled="!imageSrc">放大</b-btn>
                                                <b-btn class="mr-2 mb-2" @click="changeScale(-1)" :disabled="!imageSrc">缩小</b-btn>
                                                <b-btn class="mr-2 mb-2" @click="rotateLeft" :disabled="!imageSrc">向左旋转</b-btn>
                                                <b-btn class="mr-2 mb-2" @click="rotateRight" :disabled="!imageSrc">向右旋转</b-btn>

                                            </div>

                                            <!--<div class="btn-group flex-wrap">-->
                                                <!--<b-btn class="mr-2 mb-2" variant="info" @click="previewImg('base64')" :disabled="!imageSrc">Preview (base64)</b-btn>-->
                                                <!--<b-btn class="mr-2 mb-2" variant="info" @click="previewImg('blob')" :disabled="!imageSrc">Preview (blob)</b-btn>-->
                                            <!--</div>-->
                                            <!--<b-form-group label="Output Format" class="p-0 my-4">-->
                                                <!--<b-radio-group-->
                                                        <!--v-model="outputType"-->
                                                        <!--:disabled="!imageSrc"-->
                                                        <!--:options="[{ text: 'jpeg', value: 'jpeg' }, { text: 'png', value: 'png' }, { text: 'webp', value: 'webp' }]" />-->
                                            <!--</b-form-group>-->
                                            <!--<div class="btn-group flex-wrap">-->
                                                <!--<b-btn class="mr-2 mb-4" @click="downloadImg('base64')" :disabled="!imageSrc">Download (base64)</b-btn>-->
                                                <!--<b-btn class="mr-2 mb-4" @click="downloadImg('blob')" :disabled="!imageSrc">Download (blob)</b-btn>-->
                                            <!--</div>-->
                                        </div>
                                        <div class="col-xl-5">
                                            <div class="mb-3" style="height: 400px">
                                                <p>预览</p>
                                                <div :style="{'width': realTimePreviewData.w + 'px', 'height': realTimePreviewData.h + 'px', 'overflow': 'hidden', 'margin': '5px'}">
                                                    <div :style="realTimePreviewData.div">
                                                        <img :src="realTimePreviewData.url" :style="realTimePreviewData.img">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="btn-group flex-wrap">
                                                <div class="col-md-9">
                                                    <!--<button class="btn btn-info right " type="button" v-on:click="changeInfo()" >确认修改</button>-->
                                                </div>
                                                <div class="col-md-2">
                                                    <button class="btn btn-info right " type="button" v-on:click="confirmChangeAtatar()" >确认修改</button>
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
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >名称</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.name"></p>
                                            <!--<input class="form-control" id="inputContact1" type="text" placeholder="" v-model="user.name" />-->
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >邮箱</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.email"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >大学</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.university"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >学位</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.education"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >年龄</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.age"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >性别</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.gender"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >手机</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <p class="text-bold col-xl-10 col-md-9 col-8 col-form-label text-left" v-text="user.mobile"></p>
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
                                <em  class="fa-2x icon-close mr-2"></em>
                            </a>

                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row py-4 justify-content-center">
                            <div class="col-12 col-sm-10">
                                <form class="form-horizontal">

                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >邮箱</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeEmail" type="email" placeholder="" v-model="user.email" disabled />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"  >名称</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeName" type="text" placeholder="" v-model="user.name" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >大学</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeUniversity" type="text" placeholder="" v-model="user.university" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >学位</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeEducation" type="text" placeholder="" v-model="user.education" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >年龄</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeAge" type="text" placeholder="" v-model="user.age" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >性别</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeGender" type="text" placeholder="" v-model="user.gender" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" >手机</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="changeMobile" type="text" placeholder="" v-model="user.mobile" />
                                        </div>
                                    </div>
                                    <div class="form-group row text-right">
                                        <div class="col-md-10">

                                        </div>
                                        <div class="col-md-2">
                                            <button class="btn btn-info right " type="button" v-on:click="confirmChangeInfo()" >确认修改</button>
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
                                <em  class="fa-2x icon-close mr-2"></em>
                            </a>

                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row py-4 justify-content-center">
                            <div class="col-12 col-sm-10">
                                <form class="form-horizontal">
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" for="oldPassword" >旧密码</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="oldPassword" type="password" placeholder="" v-model="oldPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" for="newPassword">新密码</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="newPassword" type="password" v-model="newPassword"  />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" for="retryPassword">确认密码</label>
                                        <div class="col-xl-10 col-md-9 col-8">
                                            <input class="form-control" id="retryPassword" type="password" v-model="retryPass" />
                                        </div>
                                    </div>
                                    <div class="form-group row text-right">
                                        <div class="col-md-10">

                                        </div>
                                        <div class="col-md-2">
                                            <button class="btn btn-info right " type="button" v-on:click="confirmChangePassword()">确认修改</button>
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
    import axios from 'axios'
    import swal from 'sweetalert2'
    import Notifications from 'vue-notification'
    // import Vue from 'Vue'
    import qs from 'qs'
    // Vue.prototype.$axios = axios

    import CommonUser from "../../model/CommonUser";
    import Vue from 'vue'
    import VueCropper from 'vue-cropper'

    Vue.use(VueCropper)


    export default {
        name:'personalInfo',
        data () {
            return {
                aboutMsg: '我是personal组件',
                user:new CommonUser(),
                changeInfo:false,
                changePassword:false,
                changeAtatar:false,

                uid:null,
                imageSrc: '',
                outputSize: 1,
                outputType: 'jpeg',
                realTimePreviewData: {},
                crap: false,
                previewImage: null,
                previewModalShow: false,
                tempData:null,
                newPassword:'',
                retryPass:'',
                oldPassword:'',
            }
        },

        created(){
            this.getUserPersonalInfo();
            console.log(this.user.avatar)
            this.imageSrc = 'img/logonju.png';
            console.log("imageSrc=>",this.imageSrc)
        },
        methods: {
            closeAtatar:function(){
                this.changeAtatar=false;
            },

            showChangeAtatar:function(){
                this.changeAtatar = true;
            },

            hello:function(info){
                this.changeInfo = true;
            },

            changePass:function(){
                this.changePassword = true;
            },

            closePass:function(  ){
                this.changePassword = false;
            },

            closeInfo:function(){
                this.changeInfo=false;
            },


            //获取用户信息
            getUserPersonalInfo: function() {
                console.log(this.$route.params.id);
                this.user.id=this.$route.params.id;
                axios.get('http://47.98.174.59:8088/api/user/'+this.$route.params.id).then(data=>{
                    // console.log(data);
                    this.user.transfer(data.data);
                    //console.log("--->user",this.user.avatar)
                    this.previewImage = this.user.avatar
                    this.imageSrc = this.user.avatar
                })
                this.imageSrc = this.user.avatar
                // console.log(this.user)
            },

            //更新用户信息
            confirmChangeInfo:function () {
                // console.log(this.user);
                axios.put('http://47.98.174.59:8088/api/user/'+this.$route.params.id, this.user,{withCredentials:true})
                    .then(function (response) {
                        // do something...
                        // console.log("my",response)
                        this.closeInfo();
                        // swal({
                        //     title: "更新失败意格式问题",
                        //     heightAuto: false
                        // })
                    }.bind(this)).catch(function (error) {
                        // console.log("ree",error)
                        swal({
                            title: "更新失败，请注意格式问题",
                            heightAuto: false
                        })
                    });
            },

            //修改用户的密码
            confirmChangePassword:function(){
                if(this.retryPass != this.newPassword){
                    swal({
                        title:"新密码不一致，请检查",
                        heightAuto:false
                    });
                    // this.$notify({
                    //     group: 'notifdemo',
                    //     title: '123123',
                    //     text: '234234'
                    //     // type: this.getNotificationVariantClass()
                    // });

                }
                let info ={
                    'oldPass':this.oldPassword,
                    'newPass':this.newPassword,
                    'retryPass':this.retryPass
                }
            },

            //获取用户已投递简历
            getUserDeliveredResume:function () {

            },

            confirmChangeAtatar(){
                this.$refs.cropper.getCropData((data) => {
                    // console.log(data);
                    let pa = {
                        'accountId':this.user.id,
                        'base64str':data
                    }
                    axios.put('http://47.98.174.59:8088/api/account/'+this.$route.params.id+"/avatar", pa,{withCredentials:true})
                        .then(function (response) {
                            this.user.avatar = response.data.avatar
                            this.changeImage = false;
                        }.bind(this)).catch(function (error) {
                        // console.log("ree",error)
                        swal({
                            title: "更新失败",
                            heightAuto: false
                        })
                    });
                })


            },


            startCrop () {
                this.crap = true
                this.$refs.cropper.startCrop()
            },
            stopCrop () {
                this.crap = false
                this.$refs.cropper.stopCrop()
            },
            clearCrop () {
                this.$refs.cropper.clearCrop()
            },
            changeScale (num) {
                this.$refs.cropper.changeScale(num || 1)
            },
            rotateLeft () {
                this.$refs.cropper.rotateLeft()
            },
            rotateRight () {
                this.$refs.cropper.rotateRight()
            },
            previewRealTime (data) {
                this.realTimePreviewData = data
            },
            previewImg (type) {
                if (type === 'blob') {
                    this.$refs.cropper.getCropBlob(data => {
                        this.previewImage = window.URL.createObjectURL(data)
                        this.previewModalShow = true
                    })
                } else { // type === 'base64'
                    this.$refs.cropper.getCropData(data => {
                        this.previewImage = data
                        this.previewModalShow = true
                    })
                }
            },
            downloadImg (type) {
                let aLink = document.createElement('a')
                aLink.download = 'demo'

                if (type === 'blob') {
                    this.$refs.cropper.getCropBlob((data) => {
                        this.downloadImgData = window.URL.createObjectURL(data)
                        aLink.href = window.URL.createObjectURL(data)
                        aLink.click()
                    })
                } else {
                    this.$refs.cropper.getCropData((data) => {
                        console.log("----------------")
                        console.log(data);
                        this.downloadImgData = data
                        aLink.href = data
                        // aLink.click()
                    })
                }
            },
            changeImage (e) {
                let file = e.target.files[0]
                if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                    alert('Please one of the following extensions: gif, jpeg, jpg, png, bmp')
                    return false
                }
                let reader = new FileReader()
                reader.onload = (e) => {
                    let data
                    if (typeof e.target.result === 'object') {
                        data = window.URL.createObjectURL(new Blob([e.target.result]))
                    } else {
                        data = e.target.result
                    }
                    this.imageSrc = data
                }
                reader.readAsArrayBuffer(file)
            }

        },
    }
</script>
