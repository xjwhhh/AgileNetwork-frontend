// import axios from 'axios'
// import qs from 'qs'
//
// // axios 配置
// axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.headers.post['Accept'] = 'application/json'
// axios.defaults.baseURL = 'http://118.25.180.45:8088/api'
// axios.defaults.withCredentials = true
//
// // POST传参序列化
// axios.interceptors.request.use((config) => {
//     if (config.method === 'post') {
//         config.data = qs.stringify(config.data)
//     }
//     return config
// }, (error) => {
//     return Promise.reject(error)
// })
//
// // 返回状态判断
// axios.interceptors.response.use((res) => {
//     console.log(res.data);
//     if (!res.data.success) {
//         // _.toast(res.data.msg);
//         console.log(11);
//         return Promise.resolve(res);
//     }
//     return res
// }, (error) => {
//     console.log(22);
//     return Promise.reject(error)
// })
//
// export function fetch (url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, params)
//             .then(response => {
//                 console.log(response.data);
//                 resolve(response.data)
//             }, err => {
//                 reject(err)
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }
// export default {
//
//     getUserInfo(uid){
//         let url = '/api/user/'+uid
//         return axios.get(url)
//     },
//
//
//     login (params) {
//         console.log("123")
//         console.log(params)
//         let url = '/api/login'
//         return axios.post(url,params)
//         // return fetch(url, params)
//     },
//
//     getLatestWork (username, notateType) {
//         let url = '/img/getLatestWork?username=' + username + '&notateType=' + notateType
//         return axios.get(url)
//     },
//
//     submmitNotation (sample) {
//         let url = '/notation/submitNotation'
//         return fetch(url, sample)
//     },
//
//     getSample (username, sequenceNum, notateType) {
//         let url = '/notation/getSample?username=' + username + '&sequenceNum=' + sequenceNum + '&notateType=' + notateType
//         return axios.get(url)
//     }
// }