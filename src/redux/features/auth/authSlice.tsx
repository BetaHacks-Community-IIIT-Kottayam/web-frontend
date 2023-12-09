import { createSlice } from "@reduxjs/toolkit";
import { IAuthSliceState } from "../../types/states.types";
import { userLogin } from "./authService";
import { RootState } from "../../store/store";


const initialState:IAuthSliceState={
    isAuth:false,
    token:undefined,
    status:{
        isLoading:false,
        isError:false,
        errorMessage:undefined
    }
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        userLogout:(state)=>{
            state.isAuth=false;
            state.token=undefined;
            state.status.isLoading=false;
            state.status.isError=false;
            state.status.errorMessage=undefined;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(userLogin.pending,(state)=>{
            state.status.isLoading=true;
            state.status.isError=false;
            state.status.errorMessage=undefined;
        })
        .addCase(userLogin.fulfilled,(state,action)=>{
            const {token}=action.payload;
            state.isAuth=true;
            state.token=token;
            state.status.isLoading=false;
        })
    }

});

export const {userLogout}=authSlice.actions;
export const selectAuth=(state:RootState)=>state.auth;
export default authSlice.reducer;