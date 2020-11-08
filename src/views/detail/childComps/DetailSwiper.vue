<template>
  <swiper>
    <swiper-item v-for="item in topImages" :key="item" class="swiper-item">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.swiper-item {
  height: 300px;
  overflow: hidden;
}
</style>