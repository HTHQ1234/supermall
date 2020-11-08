<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <!-- 安装插件之后的图片懒加载方式 -->
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        v-lazy="item"
        @load="imgLoad"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  methods: {
    imgLoad() {
      /* if (++this.counter === this.imagesLength) {
        console.log("图片加载完成了"); */
      this.$emit("detailImgLoad");
      /* } */
    },
  },
  /* watch可以监听某一个属性的变化 */
  watch: {
    detailInfo() {
      // 获取图片的个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>
<style scoped>
.start {
  width: 40%;
  height: 1px;
  background-color: rgb(173, 173, 173);
  padding-bottom: 2px;
  border-bottom: 2px rgb(0, 0, 0) solid;
  margin: 15px 0 0 15px;
}
.desc {
  width: 100%;
  padding: 20px;
}

.end {
  width: 40%;
  height: 1px;
  background-color: rgb(173, 173, 173);
  padding-bottom: 2px;
  border-bottom: 2px rgb(0, 0, 0) solid;
  margin-left: auto;
  margin-right: 15px;
}
.info-desc {
  font-size: 14px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.info-key {
  color: black;
  padding: 20px 20px;
}

.info-list img {
  width: 100%;
}
</style>