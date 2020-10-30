<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "App",
  components: {
    MainTabBar,
    NavBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
