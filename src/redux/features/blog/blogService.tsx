import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAddBlogServiceResponse, IErrorResponse, IUploadImgBlogServiceResponse } from "../../types/response.types";
import { IAddBlogState, IUploadImgState } from "../../types/states.types";
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
        const baseUrl=process.env.REACT_APP_API_URL;
        const response = await axios.post(
            `${baseUrl}/user/addBlog`,
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

export const uploadImgBlogService = createAsyncThunk<
    IUploadImgBlogServiceResponse,
    IUploadImgState,
    {
        state: RootState,
        dispatch: AppDispatch,
        rejectVal: IErrorResponse
    }
>('uploadImgBlogService',async (newImg:IUploadImgState,thunkAPI)=>{
    try{
        const baseUrl=process.env.REACT_APP_API_URL;
        const formData=newImg.formData
        const response = await axios.post(
            `${baseUrl}/blog/img`,
            formData,
            {
                headers:{
                    'Content-Type':'multipart/form-data'
                }
              }
        );
        return response.data as IUploadImgBlogServiceResponse;
    }catch(err){
        const error = err as AxiosError<IErrorResponse>;
        
        return thunkAPI.rejectWithValue(
            error.response?.data as IErrorResponse
        );
    }

});