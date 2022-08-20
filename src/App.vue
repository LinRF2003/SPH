<template>
  <div>
    <SphHeader></SphHeader>

    <router-view></router-view>

    <SphFooter v-show="$route.meta.show"></SphFooter>
  </div>
</template> 
<script>
import SphHeader from "./components/SphHeader";
import SphFooter from "./components/SphFooter";
export default {
  name: "App",
  components: {
    SphHeader,
    SphFooter,
  },
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库中
    this.$store.dispatch("categoryList");

  },
};
</script>
<style lang="css">
</style>