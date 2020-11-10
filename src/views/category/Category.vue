<template>
  <div id="category">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="box">
      <scroll :probe-type="3" class="content1">
        <category-left-bar
          class="leftbar"
          :categoryitem="categoryitem"
          @changeMaitKey="changeMaitKey"
        ></category-left-bar>
      </scroll>
      <scroll :probe-type="3" class="content2" ref="scroll">
        <category-right-item
          :categoryshop="categoryshop"
          class="rightitem"
          @refresh="refresh"
        ></category-right-item>
      </scroll>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import CategoryLeftBar from "./childComps/CategoryLeftBar";
import CategoryRightItem from "./childComps/CategoryRightItem";

import Scroll from "components/common/scroll/Scroll";

import { debounce } from "common/utils";

import { getCategoryText, getSubcategory } from "network/category";

export default {
  name: "Category",
  data() {
    return {
      categoryitem: [],
      categoryshop: [],
      newRefresh: null,
      maitkey: "3627",
    };
  },
  components: {
    NavBar,
    Scroll,
    CategoryLeftBar,
    CategoryRightItem,
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  // 组件渲染完后调用
  created() {
    this.getCategoryText();
    getSubcategory(this.maitkey).then((res) => {
      this.categoryshop = res.data.data.list;
    });
  },
  mounted() {
    // 防抖
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
  },
  methods: {
    getCategoryText() {
      getCategoryText().then((res) => {
        this.categoryitem = res.data.data.category.list;
      });
    },
    changeMaitKey(maitkey) {
      getSubcategory(maitkey).then((res) => {
        this.categoryshop = res.data.data.list;
      });
    },
    refresh() {
      this.newRefresh();
    },
  },
};
</script>
<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
  position: relative;
  z-index: 11;
}
#category {
  height: 100vh;
}
.content1 {
  width: 115px;
  height: calc(100%);
  overflow: hidden;
}
.leftbar {
  width: 115px;

  background-color: #eee;
}

.content2 {
  flex: 1;
  height: calc(100%);
  overflow: hidden;
}
.box {
  height: calc(100% - 44px - 49px);
  display: flex;
}
.rightitem {
  width: 260px;
  overflow: hidden;
}
</style>