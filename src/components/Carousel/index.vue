<template>
  <div class="swiper-container" ref="list">
    <div class="swiper-wrapper">
      <div
          class="swiper-slide"
          v-for="(carousel) in list"
          :key="carousel.id"
      >
        <img :src="carousel.imgUrl"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      immediate: true, //立即监听
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          new Swiper(this.$refs.list, {
            // direction: "vertical", // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true, //点击小球切换
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
              disableOnInteraction: false, //解决swiper操作后,不能自动轮播的问题
              delay: 2000, //1秒切换一次
            },
            // 如果需要滚动条
            // scrollbar: {
            //   el: ".swiper-scrollbar",
            // },
          });
        });
      },
    },
  },
};
</script>

<style scoped>
</style>