<template>
  <div class="wrapper" ref="wrappera">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrappera, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    setTimeout(() => {
      this.scroll.refresh();
    }, 1000);

    // 2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        //console.log(position);
        this.$emit("scroll", position);
      });
    }

    this.scroll.refresh();
    // 3.监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // 调用父组件的getHomeGoods方法，进行网络请求
        this.$emit("pullingUp");
        // 由于dom发生改变，需要重新刷新scroll来获取图片的总高度

        // 设置上拉加载后一秒过后才能再次触发上拉加载
        // setTimeout(() => {
        //   this.scroll.finishPullUp();
        // }, 1000);
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>
<style scoped>
</style>