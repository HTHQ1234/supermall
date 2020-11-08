<template>
  <div id="profile">
    <profile-nav-bar></profile-nav-bar>
    <profile-information></profile-information>
    <profile-function></profile-function>
  </div>
</template>
<script>
import ProfileNavBar from "./childComps/ProfileNavBar";
import ProfileInformation from "./childComps/ProfileInformation";
import ProfileFunction from "./childComps/ProfileFunction";

export default {
  name: "Profile",
  components: {
    ProfileNavBar,
    ProfileInformation,
    ProfileFunction,
  },
};
</script>
<style scoped>
</style>