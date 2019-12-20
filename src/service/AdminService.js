

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
    /**
     * 用户登录
     */
    login (params) {
        return fetch('/login', params)
    },
    register (params) {
        return fetch('/register', params)
    },

    /**
     * 管理员界面方法
     */
    getUsers (key, page) {
        return axios.get('/manager/getUser?page=' + page + '&key=' + key)
    },
    deleteUserInformation (uid) {
        return axios.get('/manager/deleteUser?uid=' + uid)
    },

    /**
     * 相册方法
     */
    deleteAlbum(aid,currentUid){
        return axios.get('/deleteAlbum?aid='+aid+'&currentUid='+currentUid)
    },
    addAlbum(albumName,tags,currentUid){
        return axios.get('/addAlbum?albumName='+albumName+'&tags='+tags+'&currentUid='+currentUid)
    },
    getAlbumList(currentUid){
        return axios.get('/getAlbums'+'?currentUid='+currentUid)
    },
    changeAlbum(aid,albumName,tags,currentUid){
        return axios.get('/changeAlbums?aid+'+aid+'&title='+albumName+'&tag'+tags+'&currentUid='+currentUid)
    },

    /**
     * 照片方法
     */
    addNewPhoto(formdata){

        return fetch('/addNewPhoto',formdata);
    },

    deletePhoto(pid,currentUid){
        return axios.get('/deletePhoto?pid='+pid+'&currentUid='+currentUid)
    },
    changePhoto(pid,currentUid){
        return axios.get('/changeHeadPhoto?pid='+pid+'&currentUid='+currentUid)
    },
    getPhotoList(aid,currentUid){
        return axios.get('/getAllPhoto?aid='+aid+'&currentUid='+currentUid)
    },
    sharePhoto(pid,currentUid) {
        return axios.get('/sharePhoto?pid=' + pid+'&currentUid='+currentUid)
    },


    getMyInformation(currentUid){
        return axios.get('/getMyInformation?currentUid='+currentUid)
    },
    updateInformation(params,currentUid){
        return fetch('/update',params+'?currentUid='+currentUid)
    },
    addShareWork(pid,currentUid){
        return axios.get('/addShareWork?pid='+pid+'&currentUid='+currentUid)
    },

    getShareWork(uid,currentUid){
        return axios.get('/getShareWork?uid='+uid+'&currentUid='+currentUid)
    },
    addLike(pid,currentUid){
        return axios.get('/addLike?pid='+pid+'&currentUid='+currentUid)
    },
    getLikes(pid,currentUid){
        return axios.get('/getLikes?pid='+pid+'&currentUid='+currentUid)
    },
    sharePic(pid,currentUid){
        return axios.get('/sharePic?pid='+pid+'&currentUid='+currentUid)
    },
    addComment(pid,comment,currentUid){
        return axios.get('/addComment?pid='+pid+'&comment='+comment+'&currentUid='+currentUid)
    },
    getComment(pid,currentUid){
        return axios.get('/getComment?pid='+pid+'&currentUid='+currentUid)
    },
    getFriendPicture(currentUid){
        return axios.get('/getFriendPicture'+'?currentUid='+currentUid)
    },



    getTopPhoto(){
        return axios.get('/getTopPhoto')
    },


    getOtherUserInformation(uid,currentUid){
        return axios.get('/getOtherUserInformation?uid='+uid+'&currentUid='+currentUid)
    },

    isFriend(uid,currentUid){
        return axios.get('/isFriend?uid='+uid+'&currentUid='+currentUid)
    },
    beFriend(uid,group,currentUid){
        return axios.get('/beFriend?uid='+uid+'&group='+group+'&currentUid='+currentUid)
    },
    getFriends(currentUid){
        return axios.get('/getFriends'+'?currentUid='+currentUid)
    },
    beNotFriend(uid,currentUid){
        return axios.get('/beNotFriend?uid='+uid+'&currentUid='+currentUid)
    },

    search(key){
        return axios.get('/search?key='+key)
    }
}
