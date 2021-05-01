

export default {
   
    loginStateOff : async (state)=>{  state.loginState = false },
    loginStateOn : async (state)=>{   state.loginState = true },
    clearDataUser : async (state)=>{  state.datauser = [] },


    chargedDataUser : async (state , data)=>{

    state.datauser = data
   
    },


    
}
