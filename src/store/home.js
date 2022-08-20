import { reqCategoryList, reqBannerList, reqFloorList } from "@/api"

//home的小仓库
const state = {
    //三级菜单数据
    categoryList: [],
    // 轮播图数据
    bannerList: [],
    //底部轮播图
    floorList: []

}
const mutations = {
    GETEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
}
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            commit("GETEGORYLIST", result.data)
        }
    },
    async getBannerList({ commit }) {
        //获取首页数据
        let result = await reqBannerList();
        if (result.code == 200) {
            // console.log('actions发请求')
            commit("GETBANNERLIST", result.data);
        }
    },
    async getFloorList({ commit }) {
        //获取首页数据
        let result = await reqFloorList();
        if (result.code == 200) {
            // console.log('actions发请求')
            commit("GETFLOORLIST", result.data);
        }
    }
}
const getters = {}


//对外暴露Store类的一个实例
export default ({
    state,
    mutations,
    actions,
    getters
})