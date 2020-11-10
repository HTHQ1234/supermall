<template>
  <div class="toast" :style="{ opacity: isShow }">
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: 0,
    };
  },
  methods: {
    show(message = "默认文字", duration = 2000) {
      this.isShow = 1;
      this.message = message;

      setTimeout(() => {
        this.isShow = 0;
      }, duration);
    },
  },
};
</script>
<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 80px;
  margin-left: -75px;
  margin-top: -40px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 11;
  line-height: 80px;
  text-align: center;
  border-radius: 8px;
  color: #fff;
  transition: opacity 1s;
}
</style>