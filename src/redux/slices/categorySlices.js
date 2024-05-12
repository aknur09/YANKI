import { createSlice } from "@reduxjs/toolkit";




const categorySlices = createSlice({
    name:'category',
    initialState:{
        categoryData:[],
    },

    reducers:{
        setCategory(state,action){
            state.categoryData=action.payload

        }
    }
})

export const { setCategory } = categorySlices.actions

export default categorySlices.reducer