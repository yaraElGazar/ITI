<template>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in this.users" v-bind:key="user.name">
      <th scope="row">{{ this.users.indexOf(user) + 1 }}</th>
      <td>{{ user.name }}</td>
      <td><button @click="$event => $emit ('delete', this.users.indexOf(user))" class="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</table>

</template>

<script>
    export default {
        name: "usersTable",
        props: ['users'],
        emits: ['delete']
    }
</script>

<style scoped>

</style>