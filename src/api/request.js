//对axios二次分装
import store from '@/store';
import axios from 'axios';

//引入进度条    start开始 done结束
import nprogress from 'nprogress';
//引入相关进度条的样式
import "nprogress/nprogress.css";

const requests = axios.create({
    //基础路径
    baseURL: "/api",

    timeout: 5000
})


// 请求拦截器
requests.interceptors.request.use((config) => {
    //添加游客
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //需要携带token带给服务器
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    //进度条开始
    nprogress.start()

    //config中有headers请求头
    return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
    // 进度条结束
    nprogress.done()

    return res.data
}, () => {
    return Promise.reject(new Error('fail'))
})

export default requests;
