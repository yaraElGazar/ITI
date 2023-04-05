<template>
    <div class="container mx-auto d-flex justify-content-center">
<form class="well form-horizontal col-md-6" action=" " method="post"  id="contact_form" @submit.prevent="updateUser">

<!-- Form Name -->
<legend class="my-4"><center><h2><b>Updating user</b></h2></center></legend><br>

<!-- Text input-->

<div class="form-group my-3">
<label class="col-md-4 control-label">First Name</label>  
<div class="col-md-12 inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input  name="first_name" placeholder="First Name" class="form-control"  type="text" v-model="first_name">
</div>
</div>
</div>

<!-- Text input-->

<div class="form-group my-3">
<label class="col-md-4 control-label" >Last Name</label> 
<div class="col-md-12 inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input name="last_name" placeholder="Last Name" class="form-control"  type="text" v-model="last_name">
</div>
</div>
</div>

<!-- Text input-->
  <div class="form-group my-3">
<label class="col-md-4 control-label">E-Mail</label>  
<div class="col-md-12 inputGroupContainer">
<div class="input-group">
   <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
<input name="email" placeholder="E-Mail Address" class="form-control"  type="text" v-model="email">
</div>
</div>
</div>

<div class="form-group my-3">
<label class="col-md-4 control-label">Gender</label>  
<div class="col-md-12 inputGroupContainer">
<div class="input-group">
   <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
<input name="gender" placeholder="Gender" class="form-control"  type="text" v-model="gender">
</div>
</div>
</div>

<!-- Button -->
<div class="form-group my-3">
<label class="col-md-4 control-label"></label>
<div class="col-md-12"><br>
<button type="submit" class="btn btn-success col-md-12" >SUBMIT <span class="glyphicon glyphicon-send"></span></button>
</div>
</div>

</form>
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
       gender:''
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
            email :this.email
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