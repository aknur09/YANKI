import {configureStore} from "@reduxjs/toolkit" 
import signUpSlices from "./slices/signUpSlices"
import productsSlices from "./slices/productsSlices"
import categorySlices from "./slices/categorySlices"

 
 
 
const store=configureStore({ 
    reducer:{ 
        signUp: signUpSlices,
        products:productsSlices,
        category:categorySlices
    } 
}) 

export default store