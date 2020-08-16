<template>
  <div class="header__container">
    <header class="header">
      <TheSideNavToggle :is-active="isActive" @toggle="onToggle" />
      <div class="header__logo">
        <nuxt-link to="/">WD BLOG</nuxt-link>
      </div>
      <div class="spacer"></div>
      <nav class="header__menu">
        <ul class="header__list">
          <li class="header__item">
            <nuxt-link to="/posts">Blog</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/admin">Admin</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: 'TheHeader',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onToggle() {
      this.$emit('sidenavToggle')
    },
  },
}
</script>
<style scoped>
.header__container {
  height: 60px;
}
.header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  align-items: center;
  height: 60px;
  background-color: black;
  padding: 0 20px;
}
.header__logo {
  margin: 0 10px;
}
.spacer {
  flex: 1;
}
.header__menu {
  display: none;
}
@media (min-width: 768px) {
  .header__menu {
    display: block;
  }
}
.header__list {
  display: flex;
}
.header__item:not(:last-child) {
  margin-right: 10px;
}
.header__item a,
.header__logo a {
  text-decoration: none;
  color: white;
}
.header__item:hover a,
.header__logo:hover a,
.header__logo:hover a {
  text-decoration: underline;
}
.header__item a.nuxt-link-active {
  color: red;
}
</style>
