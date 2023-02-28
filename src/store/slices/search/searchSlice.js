import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers:{
        toggleSearch(state, { payload }){
            return payload
        }
    }
})

export const selectSearch = state => state.search

export const { toggleSearch } = searchSlice.actions

export const searchReducer = searchSlice.reducer