<template>
  <div class="function">
    <div class="top">
      <img src="~assets/img/profile/Shapecopy.svg" alt="" /><span
        >我的信息</span
      >
    </div>
    <div class="center">
      <img src="~assets/img/profile/jinbi.svg" alt="" /><span>积分商城</span>
    </div>
    <div class="bottom">
      <img src="~assets/img/profile/huangguan.svg" alt="" /><span>会员卡</span>
    </div>
    <div class="shop">
      <img src="~assets/img/profile/gouwuche.svg" alt="" /><span
        >我的购物车</span
      >
    </div>
    <div class="shopapp">
      <img src="~assets/img/profile/daizi.svg" alt="" /><span>下载购物APP</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileFunction",
};
</script>
<style scoped>
.function {
  font-size: 16px;
}

.function img {
  width: 26px;
  height: 26px;
  margin: 0 10px 0 10px;
}
.top {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 2px #eeeeee solid;
}
.center {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 2px #eeeeee solid;
}
.bottom {
  height: 55px;
  display: flex;
  align-items: center;
  border-bottom: 15px #eeeeee solid;
}

.shop {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 2px #eeeeee solid;
}

.shopapp {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 2px #eeeeee solid;
}
</style>