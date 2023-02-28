import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
     async function(){
       const response = await axios.get('https://fakestoreapi.com/products')
       const data = response.data.map(product =>({
            ...product,
            id:product.id.toString(),
            price:Math.floor(product.price),
            oldPrice:Math.floor(product.price) + Math.floor(Math.random() * 70 + 20)
       }))
       return data
 
    }
)