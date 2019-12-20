import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = '*/*';
axios.defaults.baseURL = 'http://118.25.180.45:8088/api';
axios.defaults.withCredentials = true;

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


    //todo 错的 name json
    registerEnterprise(enterpriseInfo){
        console.log(enterpriseInfo);
        return new Promise((resolve, reject) => {
            axios.post('http://118.25.180.45:8088/api/enterprise', {
                name:"徐佳炜",
                email:"920054996@qq.com",
                password:"123456",
            }, {withCredentials: true}).
            then((res) => {
                console.log(res);
                    resolve(res.data);
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
        });

    },

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
            axios.put('http://118.25.180.45:8088/api/account/' + enterprise.accountId,
                {
                    avatar: enterprise.headUrl,
                    mobile: enterprise.mobile,
                    name: enterprise.name
                }, {withCredentials: true}
            ).then(function (response) {
                resolve(response.data);
                // console.log(response.data);
                // let ent=new EnterpriseUser();
                // ent.transfer(response.data);
                // return ent;
            }).catch(function (error) {
                reject(error);

            });
        })
    },


    //todo 500 企业名称不能为空
    updateEnterpriseInfo(enterprise){
        return new Promise((resolve, reject) => {
            axios.put('http://118.25.180.45:8088/api/enterprise/' + enterprise.accountId,
                enterprise, {withCredentials: true}
            ).then(function (response) {
                console.log(response.data);
                resolve(response.data);

            }).catch(function (error) {
                reject(error);
            });
        });
    }
}
