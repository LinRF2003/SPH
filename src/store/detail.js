import { reqAddOrUpdateShopCart, reqGoodsInfo } from "@/api"
//
import { getUUID } from "@/utils/uuid_token"
//detail的小仓库
const state = {
    goodINfo: {},
    uuid_token: getUUID()
}
const mutations = {
    GETGOODINFO(state, goodINfo) {
        state.goodINfo = goodINfo
    }
}
const actions = {
    //获取产品信息
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code === 200) {
            commit("GETGOODINFO", result.data)
        }
    },
    //加入购物车或修改购物车的某个产品个数
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        // console.log(result);
        if (result.code === 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}
const getters = {
    //路径导航
    categoryView(state) {
        return state.goodINfo.categoryView || {}
    },
    //产品信息
    skuInfo(state) {
        return state.goodINfo.skuInfo || {}
    },
    //产品售卖属性
    spuSaleAttrList(state) {
        return state.goodINfo.spuSaleAttrList || {}
    },
}


//对外暴露Store类的一个实例
export default ({
    state,
    mutations,
    actions,
    getters
})