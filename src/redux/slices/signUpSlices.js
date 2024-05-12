import {createSlice} from "@reduxjs/toolkit" 
 
const signUpSlice=createSlice({ 
    name:'signUp', 
    initialState:{ 
        userData:{}, 
        loading:false, 
        err:'' 
    }, 
    reducers:{ 
        createUser(state, action){ 
            state.userData=action.payload 
            localStorage.setItem("auth", JSON.stringify(state.userData)) 
        }, 
        getFromLS(){}, 
        signOut(){} 
    } 
}) 
 
export const {createUser}=signUpSlice.actions 
export default signUpSlice.reducer
