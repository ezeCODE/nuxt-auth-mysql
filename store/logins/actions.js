import { logins ,  facebookAuth  ,  twitterAuth, googleAuth } from "~/plugins/firebaseAuth/firebase";
// importar conexcion de base de datos mysql

export default {


    logFacebook  : async ({ commit } )=>{ 

    logins.signInWithPopup(facebookAuth)  .then(() => {
 
    }).catch((error) => {
      console.log(error);
    });


    },   
    
    logTwitter  : async ({ commit } )=>{ 

    logins.signInWithPopup(twitterAuth).then(() => {
 
    }).catch((error) => {
      console.log(error);
    });


    }, 
    
    logGoogle  : async ({ commit } )=>{ 

    logins.signInWithPopup(googleAuth).then(() => {
 
    }).catch((error) => {
      console.log(error);
    });


    },

    checkProfile : async ({ commit } )=>{

    logins.onAuthStateChanged( (user)=>{

    if(user){
 
    commit('clearDataUser')
    let obj = {

     dataProfile : user.providerData , 
        
    }
    commit('chargedDataUser', obj)
    commit('loginStateOn')
    // enviar data a la base de datos mysql

    }else {

    commit('loginStateOff')
    console.log("not login")

    }

    })

    
    },

    profileDataBase : async ({ commit } )=>{ 

    // query mysql


    }

}