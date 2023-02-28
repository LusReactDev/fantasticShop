import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./categoriesAPI";

const categoriesSlice = createSlice({
    name:'categories',
    initialState:[],
    reducers:{
       toggleActiveCategory(state,{payload}){
          return [
            ...state.map(el =>{
                if(el.id !== payload) return el
                return {
                    ...el,
                    isActive:!el.isActive
                }
            })
          ]
       }
    },
    extraReducers:{
        [fetchCategories.fulfilled]:(state,{payload})=>{
           return [...payload]
        }
    }
})

export const selectCategories = state => state.categories
export const {toggleActiveCategory} = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer