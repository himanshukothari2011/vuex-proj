<template>
<div id="nav">
<Nav />
<router-view />
</div>
<!-- <login />   -->

</template>

<script>
//import Login from './components/Login.vue'
//import Hello from './components/Hello.vue'
//import Names from './components/Names.vue'
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  font-family:sans-serif;
  background: #c0c1e4;

}
</style>
