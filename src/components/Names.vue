<template>
  <h3>All Naames</h3>
  <form @submit.prevent="submitForm">
      <input type="text" name="" id="" class="control" v-model="namede" placeholder="Enter Name...">
    <input type="submit" value="Add Name" class="btn btn-name">
  </form>
  <div v-for="(allUserData, index) in allUserInfo" :key="index">
      <div class="name__list">
           <div class="name__list-name">
               {{allUserData.name}}
           </div>
           <div class="name__list-btn">
               <button @click="removeName(allUserData.id)" >Delete</button>
           </div>    
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from "vuex"
export default {
    name:'Names',
    data(){
        return{
            namede:''
            }
    },

    methods:{
        ...mapActions(['addName',"removeName"]),
    submitForm(){
        this.addName({id: new Date(), name:this.namede});
         this.namede = '';
    }

    },
    computed:mapGetters(["allUserInfo"])
}
</script>

<style scoped>
.name__list{
    width:600px;
    margin:10px auto;
    background:#42b983;
    border-left:4px solid #2c3e50;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 15px 10px;
    color:#fff;
}
form{ 
    width:600px;
    margin: 25px auto;
}
.control{
    width:100%;
    border:none;
    padding:15px 5px;
    outline: none;
    margin-bottom:15px;
}
.btn-name{
    width:100%;
    background:blue;
    padding:13px 5px;
    text-align: center;
    outline:none;
    border: none;
    color:#fff;
}
</style>