import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";

const usersSlice = createSlice({
    name:'users',
    initialState:{
        usersData :[],
        currentUser:null
    },
    reducers:{
       toggleCurrentUser(state,{payload}){
         state.currentUser = state.usersData.find(user =>user.email === payload.email && user.password === payload.password)
       },

       addToCart(state,{payload}){
        let idx = state.usersData.findIndex(el => el.id === state.currentUser.id)
        if(state.currentUser.cart.some(el =>el.id === payload.id)){
          let productIdx = state.currentUser.cart.findIndex(el =>el.id === payload.id)
            state.currentUser.cart[productIdx].count++
            state.currentUser.cart[productIdx].price =  state.currentUser.cart[productIdx].count * payload.price
            state.usersData[idx].cart[productIdx].count++
            state.usersData[idx].cart[productIdx].price = state.usersData[idx].cart[productIdx].count* payload.price
        }else{
            let obj = {
                ...payload,
                count:1,
    
            }
            state.currentUser.cart.push(obj)
            state.usersData[idx].cart.push(obj)
            
        }
        
       },

       addToWishList(state, {payload}){
        let idx = state.usersData.findIndex(el => el.id === state.currentUser.id)

        if(!state.currentUser.wishList.some(el => el.id === payload.id)){

            state.currentUser.wishList.push(payload)
            state.usersData[idx].wishList.push(payload)

            }        
        },
        removeWishItem(state,{payload}){
            let idx = state.usersData.findIndex(el => el.id === state.currentUser.id)
            state.currentUser.wishList = [...state.currentUser.wishList.filter(el => el.id !== payload)]
            state.usersData[idx].wishList = [...state.currentUser.wishList.filter(el => el.id !== payload)]
        },

       register(state,{ payload }){
   
        return{
            ...state,
            usersData: [            
                {
                  id: new Date().getTime().toString(),
                  ...payload
                },
                ...state.usersData
            ]
        } 
 
    },
       removeFromCart(state,{payload}){
        let idx = state.usersData.findIndex(el => el.id === state.currentUser.id)
         state.currentUser.cart = [...state.currentUser.cart.filter(el => el.id !== payload)]
         state.usersData[idx].cart = [...state.currentUser.cart.filter(el => el.id !== payload)]
       },
       incCartItemCount(state,{payload}){
        let idx = state.usersData.findIndex(el => el.id === state.currentUser.id)
        let productIdx = state.currentUser.cart.findIndex(el =>el.id === payload)
      
        state.currentUser.cart[productIdx].price += state.currentUser.cart[productIdx].price / state.currentUser.cart[productIdx].count
        state.currentUser.cart[productIdx].count++
         
        state.usersData[idx].cart[productIdx].price += state.usersData[idx].cart[productIdx].price / state.usersData[idx].cart[productIdx].count
        state.usersData[idx].cart[productIdx].count++ 
       },

       decCartItemCount(state,{payload}){        
        let idx = state.usersData.findIndex(el => el.id === state.currentUser.id)
        let productIdx = state.currentUser.cart.findIndex(el =>el.id === payload)

        if (state.currentUser.cart[productIdx].count > 1){
        state.currentUser.cart[productIdx].price -= state.currentUser.cart[productIdx].price / state.currentUser.cart[productIdx].count
            state.currentUser.cart[productIdx].count--

        state.usersData[idx].cart[productIdx].price -= state.usersData[idx].cart[productIdx].price / state.usersData[idx].cart[productIdx].count             
            state.usersData[idx].cart[productIdx].count-- 
        }

            
       },
    },

    extraReducers:{
        [fetchUsers.fulfilled]:(state,{payload}) =>{
            return{
                ...state,
                usersData:[...payload]
            }
        }
    }
})

export const selectUsers = state => state.users
export const {toggleCurrentUser,addToCart,addToWishList,removeWishItem,removeFromCart,incCartItemCount,decCartItemCount,register} = usersSlice.actions
export const usersReducer = usersSlice.reducer