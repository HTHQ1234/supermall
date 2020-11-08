<template>
  <nav-bar class="title">
    <div slot="center">我的档案</div>
  </nav-bar>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "ProfileNavBar",
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.title {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
}
</style>