<template>
  <div class="container">

    <div class="login-form">
      <form  @submit.prevent="formSubmit">
          
        <h2 class="text-center">Log in</h2>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            required="required"
            v-model="username"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            required="required"
             v-model="password"
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">
            Log in
          </button>
        </div>
        <div class="clearfix">
          <label class="float-left form-check-label"
            ><input type="checkbox" /> Remember me</label
          >
          <a href="#" class="float-right">Forgot Password?</a>
        </div>
      </form>
     
    </div>
  </div>
</template>
<script>

import { mapGetters,mapActions} from "vuex"
//import { useRouter } from 'vue-router'
import axios from "axios";
export default{
    name:"Login",
 
    data(){
        return{ 
        username:"",
        password:"",
        }
    },
    methods:{
        ...mapActions(['updateLoginStatus','updateUserName']),
            formSubmit(){
              axios.get('db.json')
                .then((res) => {
            if((res.data.username === this.username) && (res.data.password === this.password)){
                    this.updateLoginStatus(true);
                    this.updateUserName(this.username);
                   // const router = useRouter();
                    this.$router.push('/addtask');

            }else{
                alert("Wrong Username and Password")
            }
            
        })
         //return this.name 
    }
       

 
},
  computed:mapGetters(["getUser"])

}
</script>
