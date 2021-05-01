<template>
<div class="container">
  <bar />

    <div class="form-main">
      <div class="box-test" v-if="LOGINSTATE"></div>
      
    <headerForm />

    <div class="form-body"> 
    <p class="paragraph"  > regresar al  <n-link  class="form-link"  to="/"> login </n-link></p>
    </div>

    <div class="form-body">
    <label class="form-label" for="email"> email </label>
    <input class="form-input"  v-model="email" id="email" type="email" placeholder="jhonDoe@email.com"  >
    </div> 
    <div class="form-body">
    <label class="form-label" for="contraseña"> Contraseña </label>
    <input class="form-input" v-model="password" id="contraseña" type="password" placeholder="*******"  >
    </div>

    <div class="form-body">
    <button @click="loginProfile()" class="button-small bg-gradient-2 max-content"> Listo! crear cuenta </button>
    </div>

    </div>

    <buttonsLogins />

</div>
</template>
<script>
import headerForm from "~/components/headerForm"
import buttonsLogins from "~/components/buttonsLogins"
import bar  from "../components/header/bar"; 

import { logins } from "../plugins/firebaseAuth/firebase";
import { ERROR_AUTH } from "~/plugins/errors/errorAuthentication";
import { mapState } from "vuex";
 
export default {

  components:{
  headerForm,
  buttonsLogins,
  bar
  
  },

  data(){
  return {
  loader:false,
  warning:false,
  email : '',
  password : '',
  restext : '',
  }
  },

  beforeDestroy(){
  this.email,this.password, this.loader, this.warning = null

  },

   computed:{
    ...mapState({
    LOGINSTATE : state => state.logins.loginState

    })
    },

  methods:{


 loginProfile(){

  this.warning = false
  logins.createUserWithEmailAndPassword(this.email,this.password).then((result) => {

  if(result){
  // this.loader = false
  this.email= ''
  this.password = ''

  }

  }).catch( (error)=>{
   self.warning = true
   self.loader = true
  console.log(error);
  this.sendError(error.code)

  })


  },

  sendError (errorCode){

  ERROR_AUTH(errorCode).then( res =>{

  this.restext = res
  setTimeout(() => {
  //  this.warning = true

  }, 4000);

  })
  },

  }

}

</script>