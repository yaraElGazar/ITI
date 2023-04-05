<template>
    <section class="intro">
  <div class="bg-image h-100" style="background-image: url('https://images.unsplash.com/photo-1590586016218-5f80e3201fc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')">
    <div class="mask d-flex align-items-center h-100" style="background-color: rgba(0,0,0,.25);">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="card bg-dark shadow-2-strong">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-dark table-borderless mb-0">
                    <thead>
                      <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in this.users" :key="user.id">
                        <th scope="row">{{ user.first_name }}</th>
                        <td>{{ user.last_name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.gender }}</td>
                        <td><i @click="onGetDetails(user.id)" class="fas fa-solid fa-plus"></i></td>
                        <td><i @click="onUpdate(user.id)" class="fas fa-edit" style="color: #8198c1;"></i></td>
                        <td><i @click="onDelete(user.id)" class="fas fa-times"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios';

    export default {
        name: "allUsers",
        created () {
            this.getAllUsers();
        },
        data () {
            return {
                users: [],
            }
        },
        methods: {
           getAllUsers () {
            axios.get("http://localhost:3000/data")
            .then((res) => this.users = res.data)
            .catch((error) => console.log(error))
        },
        onDelete (id) {
            axios.delete(`  http://localhost:3000/data/${id}`)
                .then((res)=>{
                    console.log(res.data)
                    this.getAllUsers()
                }).catch((err)=>{
                    console.log(err)
                })
        },
        onUpdate (id) {
            this.$router.push('/users/update/' + id);
            console.log(id);
        },
        onGetDetails (id) {
          this.$router.push('/users/' + id);
            console.log(id);
        }
        
        }
        
    }
</script>

<style scoped>
.intro {
  height: 92vh;
}
.fa-times {
  color: red;
}

table td,
table th {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

thead th,
tbody th {
  color: #fff;
}

tbody td {
  font-weight: 500;
  color: rgba(255,255,255,.65);
}

.card {
  border-radius: .5rem;
}
</style>