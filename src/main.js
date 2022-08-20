import Vue from 'vue'
import App from './App.vue'



Vue.config.productionTip = false

//全局组件
import TypeNav from '@/components/TypeNav'//三级联动组件
import Carousel from '@/components/Carousel'//轮播图
import Pagination from "@/components/Pagination"//分页器
import { Button, MessageBox } from 'element-ui';
//第一个参数:全局组件的名字第二个参数:哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

Vue.component(Button.name, Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//引入路由  
import router from '@/router'
//引入仓库
import store from '@/store'
//引入mock模拟数据
import '@/mock/mockServer'
//统一接口api文件夹里面全部请求函数
import * as API from '@/api'
// console.log(API);
// 引入插件
import VueLazyload from 'vue-lazyload'
import atm from '@/assets/1.gif'
Vue.use(VueLazyload, {
  //懒加载默认图片
  loading: atm,
})
// //测试
// import { reqCategoryList } from '@/api'
// reqCategoryList()

//引入表单校验插件
import "@/plugins/validate"


import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),
  //全局事件总线$bus配置  
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
