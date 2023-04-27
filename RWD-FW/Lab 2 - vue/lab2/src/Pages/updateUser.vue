<template>
    <div class="grid p-16 place-items-center">
  <div class="w-11/12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
    <h1 class="text-xl font-semibold">Hello there ?, <span class="font-normal">please fill in your information to continue</span></h1>
    <form class="mt-6" @submit.prevent="updateUser">
      <div class="flex justify-between gap-3">
        <span class="w-1/2">
          <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
          <input id="firstname" v-model="first_name" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
        <span class="w-1/2">
          <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
        <input id="lastname" v-model="last_name" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
      </div>
      <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
      <input id="email" v-model="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <label for="gender" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">gender</label>
      <input id="gender" v-model="gender" type="text" name="gender" placeholder="Female" autocomplete="gender" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <label for="profile" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">profile image</label>
      <input id="profile" v-model="profile" type="text" name="profile" placeholder="image url" autocomplete="profile" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      
      <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Update User
      </button>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios';

    export default {
        name: "updateUser",
        data(){
   return{
       first_name:'',
       last_name:'',
       email:'',
       gender:'',
       profile:''
   }
 },
 created() {
    this.getUserById();
  },
  methods:{
    updateUser(){
        this.id = this.$route.params.id
        axios.put(`http://localhost:3000/data/${this.id}`,{
            first_name :this.first_name,
            last_name :this.last_name,
            gender :this.gender,
            email :this.email,
            profile :this.profile

        }).then((res)=>{
            console.log(res.data)
            this.$router.push('/')
        }).catch((err)=>{
            console.log(err)
        })
    },
    getUserById() {
      this.id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/data/${this.id}`)
        .then((res) => {
        this.first_name=res.data.first_name;
        this.last_name = res.data.last_name;
        this.gender = res.data.gender;
        this.email = res.data.email;
        this.profile = res.data.profile;


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