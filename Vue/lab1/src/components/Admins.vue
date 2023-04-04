<template>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="admin in this.admins" v-bind:key="admin.name">
      <th scope="row">{{ this.admins.indexOf(admin) + 1 }}</th>
      <td>{{ admin.name }}</td>
      <td><button @click="$event => $emit ('delete', this.admins.indexOf(admin))" class="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</table>
</template>

<script>
    export default {
        name: "adminsTable",
        props: ['admins'],
        emits: ['delete']

    }
</script>

<style scoped>

</style>