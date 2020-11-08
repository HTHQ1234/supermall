<template>
  <div class="cart-list">
    <scroll class="content" :probe-type="3" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :item-info="item"
      >
      </cart-list-item>
    </scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  activated() {
    this.refresh();
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  methods: {
    refresh() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>
<style scoped>
.content {
  height: 100%;
  overflow: hidden;
}
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}
</style>