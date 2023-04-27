<script setup>
</script>

<template>
  <navBar v-if="!$route.meta.hideNavbar"></navBar>
  <router-view></router-view>
</template>
<script>
import navBar from './components/navBar.vue'
export default {
  name: 'App',
  components: {
    navBar
  }
}
</script>
<style scoped>
/* router-view {
  height: 100vh;
} */
</style>
