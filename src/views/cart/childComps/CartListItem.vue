<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton
        :is-checked="itemInfo.checked"
        @click.native="checkClick"
      ></CheckButton>
    </div>
    <div class="item-img" @click="detail">
      <img :src="itemInfo.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">{{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ itemInfo.price }}</div>
        <div class="deletebutton" @click="deleteItem(itemIndex)">删除</div>
        <div class="item-count right">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { DELETE } from "@/store/mutation-types";

export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    itemIndex: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  components: {
    CheckButton,
  },
  methods: {
    detail() {
      this.$router.push("/detail/" + this.itemInfo.iid);
    },
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked;
    },
    deleteItem(index) {
      this.$store.commit(DELETE, index);
    },
  },
};
</script>
<style scoped>
#shop-item {
  height: 120px;
  overflow: hidden;
  border-bottom: 1px #ccc solid;
}

.item-img img {
  height: 105px;
  width: 80px;
  border-radius: 6px;
  float: left;
  margin: 8px 12px 0 5px;
}
.item-selector {
  float: left;
}

.item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px 0 10px 0;
}

.item-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: rgb(141, 141, 141);
  margin-bottom: 35px;
}
.item-count {
  margin-right: 8px;
}

.item-price {
  color: #ff9a67;
  font-size: 16px;
}

.item-selector {
  margin: 45px 0 0 4px;
}
.deletebutton {
  transform: translate(110px, -4px);
  float: left;
  background: var(--color-tint);
  color: #fff;
  border-radius: 8px;
  padding: 4px 9px;
}
</style>