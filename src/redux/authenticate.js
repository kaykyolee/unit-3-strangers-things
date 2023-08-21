import {createSlice } from '@reduxjs/toolkit'

const initialState={
    username:null,
    password:null,    
}

const accountSlice=createSlice({
    name:"account",
    initialState,
    reducers:{
        register:(state,action)=>{
            const {username,token}=action.payload;
            state.user=username;
            state.token=token;
        },
        logout:(state,action) =>{
            state.user=null;
            state.token=null;
        },
    },
});

export const {register} = accountSlice.actions;

export default accountSlice.reducer;

export const currentUser=(state)=> state.account.user;

export const currentToken=(state)=> state.account.token;