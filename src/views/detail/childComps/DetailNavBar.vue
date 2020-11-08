<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.png" alt="" />
    </div>
    <div slot="center" class="title" @click="scrollTo">
      <div
        v-for="(item, index) in titles"
        :key="item"
        class="title-item"
        @click="changeIndex(index)"
        :class="{ active: currentIndex === index }"
      >
        <span>{{ item }}</span>
      </div>
    </div>
  </nav-bar>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
    scrollTo() {
      this.$emit("scrollTo");
    },
  },
};
</script>
<style scoped>
.title {
  display: flex;
  font-size: 15px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 2px var(--color-high-text) solid;
  padding: 5px;
}

.back {
  height: 100%;
  width: 100%;
}

.back img {
  margin-top: 11px;
  height: 55%;
  width: 55%;
}
</style>