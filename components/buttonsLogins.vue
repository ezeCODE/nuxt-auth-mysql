<template>
  <div class="form-main">

     <div class="box-test" v-if="LOGINSTATE" ></div>
    <div class="form-body"> 
    <h3 class="title-h5"> Ingresa mediante</h3>
    </div>
    <ul class="grid grid-col-3  margin-auto">
    <li @click="logFacebook()"> <img class="img-icon-button" src="../assets/images/iconfinder_square-facebook_317727.png" alt="facebook">  </li>
    <li @click="logTwitter()"> <img class="img-icon-button" src="../assets/images/iconfinder_square-twitter_317723.png" alt="twitter">  </li>
    <li @click="logGoogle()"> <img class="img-icon-button" src="../assets/images/iconfinder_Google_1298745.png" alt="google"></li>
    </ul>
    </div>
</template>
<script>
import { mapState , mapActions } from "vuex";


export default {

   
   computed:{
    ...mapState({
    LOGINSTATE : state => state.logins.loginState

    })
    },

  methods : {
    ...mapActions({
     logFacebook : 'logins/logFacebook',
     logTwitter : 'logins/logTwitter',
     logGoogle : 'logins/logGoogle'

    })

  },
 


}
</script>