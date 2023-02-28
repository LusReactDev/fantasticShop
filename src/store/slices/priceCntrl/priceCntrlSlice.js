import { createSlice } from "@reduxjs/toolkit";

const priceCntrlSlice = createSlice({
     name:'priceCntrl',
     initialState: {
        min:0,
        max:0
     },
     reducers:{
        toggleMin(state,{payload}){
          state.min = payload
        },
        toggleMax(state,{payload}){
          state.max = payload
        }
     },
})
 export const selectPriceCntrl = state => state.priceCntrl
 export const { toggleMin,toggleMax } = priceCntrlSlice.actions
 export const priceCntrlReducer = priceCntrlSlice.reducer