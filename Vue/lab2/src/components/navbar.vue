<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link" href="#">All Users</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/create" class="nav-link" href="#">Create User</router-link>
      </li>
    </ul>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        name: "navBar"
    }
</script>

<style scoped>

</style>