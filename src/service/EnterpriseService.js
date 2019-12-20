// import axios from 'axios';
// import Vue from 'Vue';
// import qs from 'qs';
// Vue.prototype.$axios = axios;
// import API from "../model/api";
//
//
//
// export default {
//
//     name:'EnterpriseService',
//     getEnterpriseInfo() {
//         axios({
//             method: "GET",
//             url: API.ENTERPRISE.GET_ENTERPRISE_INFO+'/'+'8',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(function(response) {
//                 //显示错误信息
//                 console.log(response.data);
//             }).catch( function (response) {
//                 console.log(response.data);
//                 alert(response.status)
//             });
//
//         // axios.get('http://118.25.180.45:8088/api/enterprise/8');
//
//
//
//     }
//
// }

import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.baseURL = 'http://118.25.180.45:8088/api'
axios.defaults.withCredentials = true

// POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
    console.log(res.data);
    if (!res.data.success) {
        // _.toast(res.data.msg);
        console.log(11);
        return Promise.resolve(res);
    }
    return res
}, (error) => {
    console.log(22);
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
    enterpriseLogin(){
        axios.get('/enterprise/8').then(
            function (response) {
                console.log(response.data)
            },function (error) {
                console.log(error.data)
            }

        )
    },
}
