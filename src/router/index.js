import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter);

import routes from "./routes"
import store from "@/store"
// 重写push repalce方法 
//#region 

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}
//#endregion


let router = new VueRouter({
    //meta可以放一些函数 变量
    routes,
    //跳转路由滚动行为
    scrollBehavior(to, from, savePosition) {
        return { y: 0 }
    }
})

//全局守卫:前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {

    let token = store.state.user.token
    let name = store.state.user.userInfo.name;
    if (token) {
        if (to.path == "/login") {
            next('/home')
        } else {
            //如果用户名存在，之间进入
            if (name) {
                next()
            } else {
                //获取用户信息在首页展示
                try {
                    await store.dispatch("getUserInfo");
                    next()
                } catch (error) {
                    //token失效
                    store.dispatch("userLogout")
                    next("/login")
                }
            }
        }
    } else {
        let toPath = to.path;
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('pay') != -1 || toPath.indexOf('center') != -1) {
            next('/login?redirect='+toPath)
        } else {
            next()
        }

    }

})



export default router;