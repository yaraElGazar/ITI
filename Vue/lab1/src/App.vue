<template>
  <div class="container">
    <button @click="this.display='form'" class="btn btn-primary">Form</button>
    <button @click="this.display='users'" class="btn btn-primary">Users</button>
    <button @click="this.display='admins'" class="btn btn-primary">Admins</button>

      <formParent :display="this.display"/>
  </div>
</template>

<script>

import formParent from './components/Form.vue';

export default {
  name: 'App',
  components: {
    formParent
  },
  data () {
    return {
      display: '',
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn-primary{
  margin: 50px 10px;
}
</style>
