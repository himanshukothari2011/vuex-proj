<template>
    <div class="home"></div>
    <h1>Home</h1>
    <input type="text" name="" id="" v-model="search">
    <p>Search term -{{ search }}</p>
    <div class="ser" v-for="name in matchingNames" :key="name">{{name}}</div>
</template>
/* Vue Js is Started adding the sript (Export is the default functionality)*/
<script>
import { ref,computed,watch} from 'vue'
export default {
    name:"Hello",
    setup(){
        const search = ref('');
        const names = ref(['mario','rahul','gajni',"ram","rohan","chirag","Ankit"])

        watch(search, () => {
            console.log('Watch Function Ran');
        })

        
     

        const matchingNames = computed(() =>{
            return names.value.filter((na) => na.includes(search.value))
        })

        return{names,search,matchingNames}
    }
}
</script>