<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommenditem">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommend {
  display: flex;
  text-align: center;
  height: 130px;
  width: 100%;
  font-size: 12px;
  padding: 10px 0 20px 0;
  border-bottom: 10px solid #eee;
}

.recommenditem {
  flex: 1;
}

.recommenditem img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>