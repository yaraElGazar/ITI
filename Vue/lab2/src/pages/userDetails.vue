<template>
  <div class="row text-center d-flex justify-content-center align-items-center my-4" style="height: 60vh">
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="card testimonial-card">
        <div class="card-up" style="background-color: #9d789b;"></div>
        <div class="card-body">
          <h4 class="mb-4">{{ first_name + ' ' + last_name }}</h4>
          <hr />
          <div class="dark-grey-text mt-4">
            <div>
                <i class="fas fa-solid fa-user" style="color: #191e29;"></i>
                {{ gender }}
            </div>
            <div>
                <i class="fas fa-solid fa-envelope" style="color: #191e29;"></i>
                {{ email }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>

    
</template>

<script>
import axios from 'axios';
    export default {
        name: 'userDetails',
        data(){
            return{
                first_name:'',
                last_name:'',
                email:'',
                gender:''
            }
        },
        created () {
            this.getUserById();
        }, 
        methods: {
            getUserById() {
      this.id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/data/${this.id}`)
        .then((res) => {
        this.first_name=res.data.first_name;
        this.last_name = res.data.last_name;
        this.gender = res.data.gender;
        this.email = res.data.email

        })
        .catch((err) => {
          console.log(err);
        });
    }
        }
    }
</script>

<style scoped>

</style>