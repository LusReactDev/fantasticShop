import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function(){
        const response = await axios.get('https://fakestoreapi.com/users')
        const initialData = response.data
        const data = initialData.map(user =>({
                 id:user.id,
                 email:user.email,
                 fullName:user.name.firstname +' '+ user.name.lastname ,           
                 password:user.password,
                 cart:[],
                 wishList:[]
         }))
      return data
    }
 )