<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <img src="~assets/img/detail/kefu.png" alt="" class="icon service" />
        <span class="text">客服</span>
      </div>
      <div>
        <img src="~assets/img/detail/dianpu.png" alt="" class="icon shop" />
        <span class="text">店铺</span>
      </div>
      <div>
        <img src="~assets/img/detail/ziyuan.png" alt="" class="icon select" />
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  height: 49px;
  display: flex;
  background-color: #fff;
}
.bar-item {
  flex: 1;
  display: flex;
  text-align: center;
}
.bar-item > div {
  flex: 1;
}
.bar-left .text {
  font-size: 13px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
}
.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
  line-height: 49px;
}
.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}
.bar-right .buy {
  background-color: #f69;
}
</style>