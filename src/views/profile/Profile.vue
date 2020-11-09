<template>
  <div id="profile">
    <profile-nav-bar class="navbar"></profile-nav-bar>
    <scroll :probe-type="3" class="content">
      <profile-information></profile-information>
      <profile-function></profile-function>
    </scroll>
  </div>
</template>
<script>
import ProfileNavBar from "./childComps/ProfileNavBar";
import ProfileInformation from "./childComps/ProfileInformation";
import ProfileFunction from "./childComps/ProfileFunction";

import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Profile",
  components: {
    ProfileNavBar,
    ProfileInformation,
    ProfileFunction,
    Scroll,
  },
};
</script>
<style scoped>
#profile {
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
}
.navbar {
  position: relative;
  z-index: 11;
}
</style>