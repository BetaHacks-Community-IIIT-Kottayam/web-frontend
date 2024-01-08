import { createSlice } from "@reduxjs/toolkit";
import { IAuthSliceState } from "../../types/states.types";
import { sendOtpService, userLogin, userRegister, verifyOtpService, verifyTokenService } from "./authService";
import { RootState } from "../../store/store";


const initialState:IAuthSliceState={
    isAuth:false,
    token:undefined,
    status:{
        isLoading:false,
        isError:false,
        isEmailVerified:false,
        isOtpSent:false,
        errorMessage:undefined
    },
    lastLocation:"/"
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
            state.status.isOtpSent=false;
            state.status.isEmailVerified=false;
            state.status.errorMessage=undefined;
        },
        setLastLocation:(state,action)=>{
            state.lastLocation=action.payload;
        },
        userLoginRetry:(state)=>{
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
        .addCase(userLogin.rejected,(state,action)=>{
            state.status.isError=true
            state.status.errorMessage=action.payload;
            state.status.isLoading=false
        })
        .addCase(userRegister.pending,(state)=>{
            state.status.isLoading=true;
            state.status.isError=false;
            state.status.errorMessage=undefined;
        })
        .addCase(userRegister.fulfilled,(state,action)=>{
            const {token}=action.payload;
            state.isAuth=true;
            state.token=token;
            state.status.isLoading=false;
        })
        .addCase(userRegister.rejected,(state,action)=>{
            state.status.isError=true
            state.status.errorMessage=action.payload;
            state.status.isLoading=false
        })
        .addCase(verifyTokenService.pending,(state)=>{
            state.status.isLoading=true;
            state.status.isError=false;
            state.status.errorMessage=undefined;
        })
        .addCase(verifyTokenService.fulfilled,(state,action)=>{
            const {token}=action.payload;
            state.isAuth=true;
            state.token=token;
            state.status.isLoading=false;
        })
        .addCase(verifyTokenService.rejected,(state,action)=>{
            state.isAuth=false;
            state.status.isError=true;
            state.status.errorMessage=action.payload;
            state.status.isLoading=false;
            state.token=undefined;
        })
        .addCase(sendOtpService.pending,(state)=>{
            state.status.isLoading=true;
            state.status.isError=false;
            state.status.errorMessage=undefined;
        })
        .addCase(sendOtpService.fulfilled,(state)=>{
            state.status.isLoading=false;
            state.status.isOtpSent=true;
        })
        .addCase(sendOtpService.rejected,(state,action)=>{
            state.status.isError=true;
            state.status.errorMessage=action.payload;
            state.status.isLoading=false;
        })
        .addCase(verifyOtpService.pending,(state)=>{
            state.status.isLoading=true;
            state.status.isError=false;
            state.status.errorMessage=undefined;
        })
        .addCase(verifyOtpService.fulfilled,(state,action)=>{
            state.status.isLoading=false;
            state.status.isEmailVerified=true;
        })
        .addCase(verifyOtpService.rejected,(state,action)=>{
            state.status.isError=true;
            state.status.errorMessage=action.payload;
            state.status.isLoading=false;
        })
    }

});

export const {userLogout,setLastLocation,userLoginRetry}=authSlice.actions;
export const selectAuth=(state:RootState)=>state.auth;
export default authSlice.reducer;