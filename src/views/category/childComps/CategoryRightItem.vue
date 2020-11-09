<template>
  <div>
    <div v-for="(item, index) in categoryshop" :key="index" class="content">
      <a :href="item.link"
        ><img :src="item.image" alt="" @load="refresh" />
        <div>{{ item.title }}</div></a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryRightItem",
  data() {
    return {};
  },
  props: {
    categoryshop: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    refresh() {
      this.$emit("refresh");
    },
  },
};
</script>
<style scoped>
.content {
  text-align: center;
  width: calc(50%);
  float: left;
}
.content img {
  margin-top: 15px;
  margin-bottom: 12px;
  height: 80px;
  width: 80px;
}
</style>