<template>
<nav>
  <ul>  
  <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/filter">Filter</router-link></li>
   </ul>
 <ul class="userDetail" v-if="checkUser">
            <li class="pull-right"><a href="">Hello! {{ checkUser }}</a></li>
            <li class="pull-right"><a href="" class="btn btn-danger" @click="logout">Logout</a></li>
        </ul>
</nav>
</template>


<script>
import { mapGetters } from "vuex"


export default {
     Name:"Nav",
  // ...
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'checkUser',
      'getUser'
    ])
  }
}
</script>

<style>
nav {
    width: 100%;
    display: flex;
    height: 60px;
    background: #fff;
    align-items: center;
    justify-content: center;
}
nav li {
    list-style: none;
}
nav li a {
    text-decoration: none;
    padding: 0 15px;
    outline: none;
}
</style>