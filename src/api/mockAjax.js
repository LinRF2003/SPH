//对axios二次分装
import axios from 'axios';

//引入进度条    start开始 done结束
import nprogress from 'nprogress';
//引入相关进度条的样式
import "nprogress/nprogress.css";

const requests = axios.create({
    //基础路径
    baseURL: "/mock",

    timeout: 5000
})


// 请求拦截器
requests.interceptors.request.use((config) => {
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
