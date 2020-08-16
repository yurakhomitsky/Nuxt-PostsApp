<template>
  <div class="menu-icon-wrapper" @click="toggle()">
    <div class="menu-icon" :class="{ 'menu-icon-active': isActive }"></div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    },
  },
}
</script>
<style scoped>
.menu-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
}
@media (min-width: 768px) {
  .menu-icon-wrapper {
    display: none;
  }
}
.menu-icon {
  width: 30px;
  height: 3px;
  background-color: #fff;
  position: relative;
}
.menu-icon::before {
  position: absolute;
  left: 0;
  top: -10px;
  content: '';
  display: block;
  width: 30px;
  height: 3px;
  background-color: #fff;
  transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
}
.menu-icon::after {
  position: absolute;
  left: 0;
  bottom: -10px;
  content: '';
  display: block;
  width: 30px;
  height: 3px;
  background-color: #fff;
  transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
}
.menu-icon.menu-icon-active {
  background-color: transparent;
}

.menu-icon.menu-icon-active::before {
  transform: rotate(45deg);
  top: 0;
  transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
}
.menu-icon.menu-icon-active::after {
  transform: rotate(-45deg);
  top: 0;
  transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
}
</style>
