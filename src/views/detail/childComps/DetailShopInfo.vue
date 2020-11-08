<template>
  <div v-if="Object.keys(shop).length !== 0" class="shop">
    <div class="logo">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="mid">
      <div class="sell">
        <div>
          <span class="price">{{ (shop.sells / 10000).toFixed(1) }}万</span>
          <span>总销量</span>
        </div>
        <div>
          <span class="count">{{ shop.goodsCount }}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="score">
        <div v-for="index in shop.score.length" :key="index">
          <div class="scorebox">
            <div>{{ shop.score[index - 1].name }}</div>
            <div>{{ shop.score[index - 1].score.toFixed(2) }}</div>
            <div
              v-if="shop.score[index - 1].isBetter"
              style="background-color: red; color: white"
            >
              高
            </div>
            <div v-else style="background-color: green; color: white">低</div>
          </div>
        </div>
      </div>
    </div>
    <div class="inshop">
      <div class="in">进店逛逛</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.logo {
  margin-top: 5px;
  padding-left: 5px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}

.logo span {
  margin-left: 10px;
  font-size: 17px;
}

.logo img {
  width: 15%;
  height: 100%;
  border-radius: 6px;
}

.sell {
  display: flex;
  text-align: center;
  width: 50%;
  justify-content: space-around;
  align-content: space-between;
  height: 45px;
  border-right: 1px rgb(218, 218, 218) solid;
  padding-left: 10px;
  margin-top: 30px;
  font-size: 14px;
}

.price {
  display: block;
  margin-bottom: 7px;
}

.count {
  display: block;
  margin-bottom: 7px;
}

.score {
  width: 50%;
  text-align: center;
  font-size: 14px;
  padding-top: 18px;
}

.scorebox {
  display: flex;
  justify-content: space-around;
}

.scorebox div {
  margin-bottom: 8px;
}
.mid {
  display: flex;
}
.inshop {
  margin: 18px 0;
  text-align: center;
}
.in {
  width: 150px;
  padding: 5px 10px;
  margin: 0 auto;
  background-color: #eee;
  border-radius: 10px;
}

.shop {
  border-bottom: 5px #eee solid;
}
</style>