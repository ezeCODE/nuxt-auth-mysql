<template>
<div>
 
  <div class="margin-auto" v-if="LOGINSTATE">

  <ul class="grid grid-col-1" v-for="(items, index) in DATAUSER.dataProfile" :key="index">
  <li> uid {{ items.uid }}  </li>
  <li> perfil {{ items.displayName }}  </li>
  <li> 
     <img v-if="items.photoURL" :src="items.photoURL" alt="cover"> 
     <img v-else src="@/assets/images/cover.png" alt="defualt cover"> 
   </li>
  <li> ingreso mediante {{ items.providerId }}  </li>
  <li> email {{ items.email }}  </li>
  </ul>
  <button class="button-small" @click="outSession()"> log out </button>

  </div>


  <div v-else>
  <h5 class="title-h5">No login</h5>
  </div>


</div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex"
import { logins } from "../../plugins/firebaseAuth/firebase";

export default {


    beforeMount(){
    this.checkProfile()

    },

    computed:{
    ...mapState({
    DATAUSER : state => state.logins.datauser,
    LOGINSTATE : state => state.logins.loginState,
 
    })
    },

    methods:{
    ...mapActions({
    checkProfile : 'logins/checkProfile',


    }),
    ...mapMutations({
    clearDataUser : 'logins/clearDataUser'
    }),

    outSession (){

    logins.signOut().then( ()=> {
    this.clearDataUser()
    this.$router.push("/")

    }).catch(function(error) {

    alert(error)

    });

    }

  }

}
</script>