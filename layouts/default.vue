<template>
  <div>
    <TheHeader
      :is-active="displaySidenav"
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      displaySidenav: false,
    }
  },
}
</script>
<style>
html {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
}
ul > li {
  list-style: none;
}
</style>
