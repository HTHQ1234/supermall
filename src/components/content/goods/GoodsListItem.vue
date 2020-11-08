<template>
  <div class="goods-list-item" @click="itemClick">
    <!-- 安装插件之后的图片懒加载方式 -->
    <!-- <img v-lazy="showImage" alt="" @load="imageLoad" /> -->
    <img :src="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">⭐{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage: {
      get() {
        return this.goodsItem.image || this.goodsItem.show.img;
      },
      set() {},
    },
    /* iid:{
      get(){
        return this.goodsItem.item_id || this.goodsItem.iid;
      },
      return(){

      }
    } */
  },
  methods: {
    imageLoad() {
      /* this.$bus.$emit("itemImgLoad"); */

      if (this.$route.path.indexOf("home") === 1) {
        this.$bus.$emit("homeItemImageLoad");
      } else if (this.$route.path.indexOf("detail") === 1) {
        this.$bus.$emit("detailItemImageLoad");
      }
    },
    itemClick() {
      if (this.$route.path.indexOf("home") !== -1) {
        this.$router.push("/detail/" + this.goodsItem.iid);
      } else {
        this.$router.push("/detail/" + this.goodsItem.item_id);
      }
    },
  },
};
</script>
<style scoped>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-list-item img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
</style>