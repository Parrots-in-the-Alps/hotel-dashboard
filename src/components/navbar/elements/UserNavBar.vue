<template>
   <div v-if="this.$userStore.logged" class="">
        <div id="username">
            {{ this.$userStore.user.name }}
        </div>
        <div @click="this.$userStore.logOut()" id="logout">
            logout
        </div>
   </div>
   <div v-else class="">
    <router-link to="/login" class="login">
        Login
    </router-link>
   </div>
</template>
    
<script>
import { mapState } from 'pinia';

export default {
    name: "UserNavBar",
    emits: [],
    data(){
        return {
        
        }
    },
    // computed : {
    //     ...mapState(app.config.globalProperties.$userStore, ['logged', 'user'])
    // },
    // methods: {
    //     ...mapState(useUserStrore, ['logOut'])
    //     }
}
</script>
    
<style scoped>
.login{
    color: #FF9800;
}

#logout{
    font-size: 0.6rem;
    text-decoration: underline dotted;

}

#username{
    font-size: 1rem;
}

</style>