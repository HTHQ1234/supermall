<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="price">
      <div class="info-new-price">{{ goods.newPrice }}</div>
      <div class="info-old-price">{{ goods.oldPrice }}</div>
      <div class="info-discount" v-if="goods.discount">
        {{ goods.discount }}
      </div>
    </div>
    <div class="colums">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="services">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
        v-show="goods.services[index - 1].icon"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.info-title {
  margin-top: 5px;
  padding: 5px;
  font-size: 18px;
  color: black;
}

.price {
  display: flex;
  align-items: center;
  padding-top: 5px;
}

.info-new-price {
  color: var(--color-tint);
  font-size: 25px;
  padding: 0 0 0 5px;
}
.info-old-price {
  color: rgb(141, 141, 141);
  text-decoration: line-through;
  align-self: flex-end;
  padding: 0 5px;
}
.info-discount {
  background-color: var(--color-tint);
  border-radius: 5px;
  color: rgb(255, 255, 255);
  padding: 1px 4px;
  align-self: flex-start;
}
.colums {
  padding: 0 5px 6px 5px;
  margin-top: 20px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-size: 13px;
  color: rgb(141, 141, 141);
  border-bottom: 3px #eee solid;
}

.services {
  border-bottom: 5px #eee solid;
  font-size: 13px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.services img {
  width: 15px;
  height: 15px;
  margin-left: 5px;
  vertical-align: text-top;
}

.services span {
  padding: 25px 5px 20px 0;
}
</style>