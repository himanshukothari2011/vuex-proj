import { createStore } from "vuex";
import UserInfo from "./modules/UserInfo";
import About from "./modules/About";
import Login from "./modules/Login";
export default createStore({
   
    modules:{
        UserInfo,About,Login
    }
})