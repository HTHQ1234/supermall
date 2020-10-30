<template>
  <div class="goods-list-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="" />
      <div class="goods-info">
        <p>{{ goodsItem.title }}</p>
        <span class="price">{{ goodsItem.price }}</span>
        <span class="collect">⭐{{ goodsItem.cfav }}</span>
      </div>
    </a>
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