import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBlogCardResponse, IErrorResponse } from "../../types/response.types";
import { AppDispatch, RootState } from "../../store/store";
import axios, { AxiosError } from "axios";


export const getAllBlogsService = createAsyncThunk<
    IBlogCardResponse,
    undefined,
    {
        state: RootState,
        dispatch: AppDispatch,
        rejectVal: IErrorResponse
    }
>('getAllBlogsService',async (_,thunkAPI)=>{

    try{
        const response = await axios.get('http://localhost:5000/blog/getAllBlogs');
        console.log(response.data)
        console.log(response.status)

        return response.data as IBlogCardResponse;

    }catch(err){
        const error = err as AxiosError<IErrorResponse>
        return thunkAPI.rejectWithValue(
            error.response?.data as IErrorResponse
        );
    }

});