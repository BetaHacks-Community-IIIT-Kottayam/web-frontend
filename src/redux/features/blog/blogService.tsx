import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAddBlogServiceResponse, IErrorResponse } from "../../types/response.types";
import { IAddBlogState } from "../../types/states.types";
import { AppDispatch, RootState } from "../../store/store";
import axios, { AxiosError } from "axios";



export const addNewBlogService = createAsyncThunk<
    IAddBlogServiceResponse,
    IAddBlogState,
    {
        state: RootState,
        dispatch: AppDispatch,
        rejectVal: IErrorResponse
    }
>('addNewBlogService',async (newBlog:IAddBlogState,thunkAPI)=>{

    const config={
        headers:{
            Authorization:`Bearer ${thunkAPI.getState().auth.token}`
        }
      }
    try{
        const response = await axios.post(
            'http://localhost:5000/user/addBlog',
            newBlog,
            config
        );
        return response.data as IAddBlogServiceResponse;
    }catch(err){
        const error = err as AxiosError<IErrorResponse>;
        
        return thunkAPI.rejectWithValue(
            error.response?.data as IErrorResponse
        );
    }

});