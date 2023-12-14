import { createSlice } from "@reduxjs/toolkit";
import { IBlogSliceState } from "../../types/states.types";
import { RootState } from "../../store/store";
import { addNewBlogService } from "./blogService";


const initialState:IBlogSliceState ={
    index:[0],
    content:[''],
    isAdded:false,
    status:{
        isLoading:false,
        isError:false,
        errorMessage:undefined
    }
}

const blogSlice=createSlice({
    name:'blog',
    initialState,
    reducers:{
        flushBlog:(state)=>{
            state.index=[0];
            state.content=[''];
            state.isAdded=false;
            state.status.isLoading=false;
            state.status.isError=false;
            state.status.errorMessage=undefined;
        },
        retrySubmit:(state)=>{
            state.status.isLoading=false;
            state.status.isError=false;
            state.status.errorMessage=undefined;
        },
        addContent:(state,action)=>{
            state.content.push(action.payload);
        },
        editContent:(state,action)=>{
            state.content[action.payload.i]=action.payload.value;
        },
        addIndex:(state,action)=>{
            state.index.push(action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(addNewBlogService.pending,(state)=>{
            state.status.isLoading=true;
            state.status.isError=false;
            state.status.errorMessage=undefined;
        })
        .addCase(addNewBlogService.fulfilled,(state)=>{
           state.isAdded=true;
        })
        .addCase(addNewBlogService.rejected,(state,action)=>{
            state.status.isError=true;
            state.status.errorMessage=action.payload;
            state.status.isLoading=false;
        })

    }

});

export const {flushBlog,retrySubmit,editContent,addContent,addIndex}=blogSlice.actions;
export const selectBlog=(state:RootState)=>state.blog;
export default blogSlice.reducer;