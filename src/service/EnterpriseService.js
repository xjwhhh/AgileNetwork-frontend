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

    // updateAccountInfo(enterprise){
    //     return new Promise((resolve, reject) => {
    //         axios({
    //             url: '/account/'+'1',
    //             method: 'get',
    //             data: {
    //             }
    //         })
    //             .then((res) => {
    //                 resolve(res.data);
    //                 // console.log(res);
    //             })
    //             .catch(function (error) {
    //                 reject(error);
    //                 // console.log(error);
    //             });
    //     });
    // },

    updateAccountInfo(enterprise){
        return new Promise((resolve, reject) => {
            axios({
                url: '/account/'+'14',
                method: 'put',
                data: {
                    // enterpriseName:"南京大学",
                    // location:"南京市鼓楼区汉口路22号",
                    // description:"C9搞笑1",
                    // creditCode:"XXX123123123123123",
                    // licenseUrl:"http://www.mooctest.net/assets/img/mooctest.png"
                    avatar: ",,,",
                    mobile: "15895873758",
                    name: "test",
                },
                headers:{
                    'Content-Type':'application/json',
                }
            })
                .then((res) => {
                    resolve(res.data);
                    console.log(res);
                })
                .catch(function (error) {
                    reject(error);
                    // console.log(error);
                });
        });
    }
}
