import { createSlice } from "@reduxjs/toolkit";
import { IUserSliceState } from "../../types/states.types";
import { getUserProfile } from "./userService";
import { RootState } from "../../store/store";


const initialState:IUserSliceState={
    userInfo:{
        name:undefined,
    email:undefined,
    blogs:[],
    imgUrl:'',
    upvotes:0,
    city:'',
    country: '',
    college: '',
    position:'',
    totalblogs:0,
    months:0
    },
    status:{
        isLoading:false,
        isError:false,
        errorMessage:undefined
    }
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getUserProfile.pending,(state)=>{
            state.status.isLoading=true;
            state.status.isError=false;
            state.status.errorMessage=undefined;
        })
        .addCase(getUserProfile.fulfilled,(state,action)=>{
            state.userInfo=action.payload.userProfile;
            state.status.isLoading=false;
            state.status.isError=false;
            state.status.errorMessage=undefined;
        })
        .addCase(getUserProfile.rejected,(state,action)=>{
            state.status.isError=true;
            state.status.errorMessage=action.payload;
            state.status.isLoading=false;
        })

    }
});


export const selectUser=(state:RootState)=>state.user;
export default userSlice.reducer;

