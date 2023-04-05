<template>
  <navBar v-if="!$route.meta.hideNavbar"></navBar>
  <router-view></router-view>
</template>

<script>
import navBar from "./components/navbar.vue"
export default {
  name: 'App',
  components: {
    navBar
  }
}
</script>

<style>
router-view {
  height: 100vh;
}
</style>
