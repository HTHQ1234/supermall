<template>
  <div id="app">
    <!-- 不想让哪个router里面的哪个跳转的组件keepalive就用exclude -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
