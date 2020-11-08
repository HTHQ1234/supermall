<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
};
</script>
<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #aaa;
  width: 22px;
  height: 22px;
}

.check-button img {
  float: left;
  width: 23px;
  height: 23px;
  display: inline;
  transform: translateY(-4px);
}

.check {
  width: 22px;
  height: 22px;
  border-color: var(--color-tint);
  background-color: var(--color-tint);
}
</style>