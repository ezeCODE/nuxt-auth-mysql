<template>
<div class="container">
  <bar />

    <div class="form-main">
    <div class="box-test" v-if="LOGINSTATE"></div>

   <headerForm />

    <div class="form-body"> 
    <p class="paragraph"  > ¿ No tienes cuenta ? <n-link  class="form-link"  to="/createUser"> crea una  </n-link></p>
    </div>
 
     <div class="form-body"> 
    <label class="form-label" for="email"> email </label>
    <input class="form-input" v-model="email" id="email" type="email" placeholder="jhonDoe@email.com"  >
   </div>
    <div class="form-body"> 
    <label class="form-label" for="contraseña"> Contraseña </label>
    <input class="form-input" id="contraseña"  v-model="password" type="password" placeholder="*******" /> 
    <n-link class="form-link"  to="/passwordLost"> olvide mi contraseña </n-link>
    </div>
 
    <div class="form-body">
    <button @click="loginProfile()" class="button-small bg-gradient-1 max-content"> Ingresar </button>
    </div>
    {{restext}}

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
import { mapState, mapActions } from 'vuex';
 

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
  // ...mapActions({
    
  // }),
 

  loginProfile(){

  this.warning = false
  logins.signInWithEmailAndPassword(this.email,this.password).then((result) => {

  if(result){
  console.log(result.user);
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
  
  },

 

  head(){
    return {
    title:'Ingresar'
    }
  }


}
</script>
