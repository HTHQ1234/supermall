<template>
  <div>
    <div
      v-for="(item, index) in categoryitem"
      :key="index"
      class="item"
      @click="
        actived(index);
        getMaitKey(item.maitKey);
      "
      :class="{ active: currentIndex === index }"
    >
      {{ item.title }}
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryLeftBar",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    categoryitem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    actived(index) {
      this.currentIndex = index;
    },
    getMaitKey(maitkey) {
      this.$emit("changeMaitKey", maitkey);
    },
  },
};
</script>
<style scoped>
.item {
  height: 46px;
  width: 100%;
  text-align: center;
  line-height: 46px;
  font-size: 16px;
}
.active {
  color: var(--color-tint);
  font-weight: bolder;
  background-color: #fff;
  border-left: 4px #e46a77 solid;
}
</style>