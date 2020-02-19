import axios from 'axios'
import qs from 'qs'
import swal from 'sweetalert2';

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Accept'] = '*/*';
axios.defaults.baseURL = 'http://47.98.174.59:8088/api';
axios.defaults.withCredentials = true;


// 返回状态判断
axios.interceptors.response.use((res) => {
    // console.log(res.data);
    if (!res.data.success) {
        // _.toast(res.data.msg);
        // console.log(11);
        return Promise.resolve(res);
    }
    return res
}, (error) => {
    // console.log(22);
    return Promise.reject(error)
})

export function fetch (url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                console.log(response.data);
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default {

    //获取所有企业招聘信息
    getPosts() {
        return new Promise((resolve, reject) => {
            axios({
                url: '/enterprise/posts/status/all',
                method: 'get',
                withCredentials:true,
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    //获取所有普通用户
    getCommonUser(){
        return new Promise((resolve, reject) => {
            axios({
                url: '/accounts/type/user',
                method: 'get',
                withCredentials:true,
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    //获取所有审核通过的企业用户
    getAuthPassedEnterprise(){
        return new Promise((resolve, reject) => {
            axios({
                url: '/accounts/type/enterprise',
                method: 'get',
                withCredentials:true,
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    //通过企业用户的认证申请
    enterprisePass(accountId){
        return new Promise((resolve, reject) => {
            axios({
                url: '/enterprise/'+accountId+"/auth_info/pass",
                method: 'put',
                data:JSON.stringify(""),
                withCredentials:true,
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    //拒绝企业用户的认证申请
    enterpriseRefuse(accountId){
        return new Promise((resolve, reject) => {
            axios({
                url: '/enterprise/'+accountId+"/auth_info/fail",
                method: 'put',
                data:JSON.stringify(""),
                withCredentials:true,
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },


    //通过招聘信息的发布申请
    postPass(postId){
        return new Promise((resolve, reject) => {
            axios({
                url: '/enterprise/post/'+postId+"/status/pass",
                method: 'put',
                data:JSON.stringify(""),
                withCredentials:true,
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    //通过企业用户的认证申请
    postRefuse(postId){
        return new Promise((resolve, reject) => {
            axios({
                url: '/enterprise/post/'+postId+"/status/fail",
                method: 'put',
                data:JSON.stringify(""),
                withCredentials:true,
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },


    //获取正在审核的企业认证信息
    getUncheckedEntInfo() {
        return new Promise((resolve, reject) => {
            axios({
                url: '/enterprises/status/unchecked',
                method: 'get',
                withCredentials:true,
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    //获取已通过审核的企业认证信息
    getCheckedEntInfo() {
        return new Promise((resolve, reject) => {
            axios({
                url: '/enterprises/status/checked',
                method: 'get',
                withCredentials:true,
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },





}
