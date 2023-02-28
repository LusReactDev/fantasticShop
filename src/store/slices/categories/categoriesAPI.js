import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async function(){
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        const data = response.data.map(el => ({
            id:el + Math.random(),
            title:el,
            isActive:false
        }))
        
        return data
    }
)