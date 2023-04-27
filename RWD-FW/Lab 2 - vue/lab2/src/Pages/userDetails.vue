<template>
    <!-- component -->
<div class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl my-16">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center mt-8">
                <div class="relative">
                    <img :src="profile" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                </div>
            </div>
            <div class="w-full text-center mt-20">
                <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                    
                </div>
            </div>
        </div>
        <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">{{ first_name + ' ' + last_name }}</h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{{ gender }}
            </div>
        </div>
        <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4">
                    <p class="font-light leading-relaxed text-slate-600 mb-4">{{ email }}</p>
                </div>
            </div>
        </div>
    </div>
</div>



</template>

<script>
import axios from 'axios';

    export default {
        name: "userDetails",
        data(){
            return{
                first_name:'',
                last_name:'',
                email:'',
                gender:'',
                profile:''
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
        this.email = res.data.email;
        this.profile = res.data.profile


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