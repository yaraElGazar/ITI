<template>
    <div class="container">
        <form v-if="this.display === 'form'">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name: </label>
    <input v-model="formValue.name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Age: </label>
    <input v-model="formValue.age" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Role: </label>
    <select v-model = "formValue.role" class="form-control" id="exampleFormControlSelect1">
      <option :value="{ role: 'user' }">user</option>
      <option :value="{ role: 'admin' }">admin</option>
    </select>
  </div>
  
  <button @click="formHandling" type="submit" class="btn btn-primary">Submit</button>
</form>

<adminsTable v-else-if="this.display === 'admins'" :admins="this.admins" @delete ='deleteAdmin'/>
<usersTable v-else-if="this.display === 'users'" :users="this.users" @delete ='deleteUser'/>
    </div>
    
</template>

<script>
import adminsTable from './Admins.vue';
import usersTable from './Users.vue'
    export default {
        name: "formParent",
        components: {
            adminsTable,
            usersTable
        },
        data () {
            return {
                formValue: {
                    name: '',
                    age: '',
                    role: ''
                },
                users: [],
                admins: []
                
            }
        },
        props: ['display'],
        methods: {
            formHandling (event) {
                event.preventDefault();
                let newUser = {
                    name: this.formValue.name,
                    age: this.formValue.age,
                    role: this.formValue.role.role,
                }
                if (newUser.role === 'admin') {
                    this.admins.push(newUser);
                } else {
                    this.users.push(newUser);
                }
            },
            deleteUser (data) {
                this.users.splice(data, 1);
            },
            deleteAdmin (data) {
                this.admins.splice(data, 1);
            }
        }
    }
</script>

<style scoped>

</style>