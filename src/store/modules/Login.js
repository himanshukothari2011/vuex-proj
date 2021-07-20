const Login ={
    state:{
        isLoggedin:"false",
        username:"Null"
        
    },
    getters:{
       
        checkUser: (state) =>{
            return state.isLoggedin != "false";
        },
        getUser:(state) =>{
            
            return state.username !='Null';
           
        }
    },
    mutations:{
        
        newLoginStatus: (state,newLoginStatusValue) =>{
            state.isLoggedin = newLoginStatusValue
        },
        newUserName:(state,usernameValue) =>{
            state.username = usernameValue;
            
        }
    },
    actions:{
        //this.addName({id: new Date(), name:this.namede});
        updateLoginStatus: (context,newLoginStatusValue) => {
            //console.log(context);
            context.commit("newLoginStatus",newLoginStatusValue)
        },
        updateUserName: (context, usernameValue) =>{
            context.commit("newUserName",usernameValue)
        }

    }
}

export default Login;