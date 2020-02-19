import axios from 'axios'
import qs from 'qs'
import swal from 'sweetalert2';

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Accept'] = '*/*';
axios.defaults.baseURL = 'http://47.98.174.59:8088/api';
axios.defaults.withCredentials = true;

// POST传参序列化
// axios.interceptors.request.use((config) => {
//     if (config.method === 'post') {
//         console.log(config.data);
//         config.data = qs.stringify(config.data)
//     }
//     return config
// }, (error) => {
//     return Promise.reject(error)
// })

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


    getEnterpriseById(id){
        return new Promise((resolve, reject) => {
            axios({
                url: '/enterprise/'+id,
                method: 'get',
                data: {
                }
            })
                .then((res) => {
                    resolve(res.data);
                    // console.log(res);
                })
                .catch(function (error) {
                    reject(error);
                    // console.log(error);
                });
        });
    },

    updateAccountInfo(enterprise) {
        return new Promise((resolve, reject) => {
            axios.put('http://47.98.174.59:8088/api/account/' + enterprise.accountId,
                {
                    avatar: enterprise.headUrl,
                    mobile: enterprise.mobile,
                    name: enterprise.name
                }, {withCredentials: true}
            ).then(function (response) {
                resolve(response.data);
            }).catch(function (error) {
                reject(error);

            });
        })
    },


    updateEnterpriseInfo(enterprise){
        return new Promise((resolve, reject) => {
            axios.put('http://47.98.174.59:8088/api/enterprise/' + enterprise.accountId,
                enterprise, {withCredentials: true}
            ).then(function (response) {
                console.log(response.data);
                resolve(response.data);

            }).catch(function (error) {
                reject(error);
            });
        });
    },

    publishPost(id,post){
        console.log(JSON.stringify(post));
        return new Promise((resolve, reject) => {
            axios({
                url: '/enterprise/' + id + '/post',
                method: 'post',
                data: JSON.stringify(post),
                withCredentials: true,
            }).then((res) => {
                resolve(res.data);
            })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    getPostById(id){
        return new Promise((resolve, reject) => {
            axios({
                url: '/enterprise/post/'+id,
                method: 'get',
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    getEnterprisePostAll(accountId){
        return new Promise((resolve, reject) => {
            axios({
                url: '/enterprise/'+accountId+'/posts/manage',
                method: 'get',
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    showInfo(title){
        swal({
            title: title,
            heightAuto: false
        });
    },
}
