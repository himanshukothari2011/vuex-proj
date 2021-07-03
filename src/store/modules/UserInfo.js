const UserInfo ={
    state: {
        userInfo:[{id: 1, name:"Himanshu Kothari"},{id: 2, name:"Prem khanna"},{id: 3, name:"Rohan kumar"}]
    },
    // Provide data to child compontents
    getters: {
        allUserInfo: (state) => {
            return state.userInfo
        }
    },
    mutations: {

        newName: (state,newUserInfo) =>{
            state.userInfo = [newUserInfo,...state.userInfo]
        },
        deleteName: (state,id) =>{
            console.log("delete");
            state.userInfo =  state.userInfo.filter(him => him.id != id);
        }
    },

    /***Must Use Context */
    actions:{
        addName: (context,newUserInfo) => {
            //console.log(context);
            context.commit("newName",newUserInfo)
        },
        removeName: (context,id) =>{
            context.commit("deleteName",id)
        }
    },
}

export default UserInfo;