<template>
<div class="container">
     <div class="form-main">
    <headerForm />

    <div class="form-body"> 
    <p class="paragraph"> regresar al  login <n-link  class="form-link"  to="/"> login </n-link></p>
    <p class="paragraph">
    Te enviarmes un link a tu email
    </p>
    </div>

 
    <div class="form-body">
    <label class="form-label" for="email"> email </label>
    <input class="form-input" id="email" type="email" placeholder="jhonDoe@email.com"  >
    </div> 
 

    <div class="form-body">
    <button class="button-small bg-gradient-1 max-content"> enviarme link </button>
    </div>

    </div>

</div>
</template>
<script>
import headerForm from "~/components/headerForm"

export default {

components:{
    headerForm,
     
  }

}

</script>