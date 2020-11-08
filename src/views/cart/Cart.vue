<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    // 两种语法
    // 1.数组语法用法
    //...mapGetters(["cartLength", "cartList"]),

    // 2.对象语法用法
    ...mapGetters({
      length: "cartLength",
    }),
  },
};
</script>
<style scoped>
.cart-nav {
  position: relative;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
  font-size: 16px;
}
.cart {
  height: 100vh;
}
</style>