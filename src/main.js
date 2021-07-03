import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from "./store"
import Names from "./components/Names"
import About from "./components/About"
import Hello from "./components/Hello"
import Login from "./components/Login"

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: "", redirect: "/names" },
        
        
        
//     ]
// })


const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    //redirect: "/about"
  },
    {
      path: "/addtask",
      name: "Names",
      component: Names,
      //redirect: "/about"
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/filter",
      component: Hello
    }, 
    {
      path: "/login",
      component: Login
    }, 
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
    
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });

  
  export default router;

  createApp(App)
.use(router)
.use(store)
.mount('#app')