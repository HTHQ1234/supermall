<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        @click.native="checkClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计:{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">结算:{{ checkLength }}</div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice: {
      get() {
        return (
          "￥" +
          this.cartList
            .filter((item) => {
              return item.checked;
            })
            .reduce((preValue, item) => {
              return preValue + item.price * item.count;
            }, 0)
            .toFixed(2)
        );
      },
      set() {},
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      // 1.使用filter
      // if (this.cartList.length === 0) return false;
      // return !this.cartList.filter((item) => !item.checked).length;
      // 2.使用find
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        // 全部选中
        for (let item of this.cartList) {
          item.checked = false;
        }
      } else {
        // 全部不选中
        for (let item of this.cartList) {
          item.checked = true;
        }
      }
      //这种方法不行
      // this.cartList.forEach((item) => (item.checked = !this.isSelectAll));
    },
    calcClick() {
      if (this.checkLength !== 0) {
        this.$toast.show("进入结算页面", 1500);
      } else {
        this.$toast.show("请选择要购买的物品", 1500);
      }
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  position: relative;
  height: 40px;
  background-color: #eee;
  line-height: 40px;
  display: flex;
  font-size: 15px;
}
.check-button {
  float: left;
  margin-right: 5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.check-button span {
  float: left;
}
.price {
  margin-left: 30px;
  flex: 1;
}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 6px;
  width: 60px;
}
.calculate {
  background: var(--color-tint);
  width: 80px;
  text-align: center;
}
</style>