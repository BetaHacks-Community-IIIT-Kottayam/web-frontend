import { createAsyncThunk } from "@reduxjs/toolkit";
import { IErrorResponse, IGetUserProfileResponse, IUploadImgBlogServiceResponse } from "../../types/response.types";
import { AppDispatch, RootState } from "../../store/store";
import axios, { AxiosError } from "axios";
import { IUploadImgState } from "../../types/states.types";


//Get user profile service
export const getUserProfile = createAsyncThunk<
    IGetUserProfileResponse,
    undefined,
    {
        state: RootState;
        dispatch: AppDispatch,
        rejectVal: IErrorResponse
    }
>('getUserProfile', async (_, thunkAPI) => {
    const config = {
        headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.token}`
        }
    }
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const response = await axios.get(
            `${baseUrl}/user/getUserProfile`,
            config,
        );
        return response.data as IGetUserProfileResponse;

    } catch (err) {
        const error = err as AxiosError<IErrorResponse>;

        return thunkAPI.rejectWithValue(
            error.response?.data as IErrorResponse
        );
    }
});

//Get user profile service
export const uploadProfileImage = createAsyncThunk<
IUploadImgBlogServiceResponse,
IUploadImgState,
{
    state: RootState,
    dispatch: AppDispatch,
    rejectVal: IErrorResponse
}
>('uploadProfileImage', async (newImg:IUploadImgState,thunkAPI) => {
    try{
        const baseUrl=process.env.REACT_APP_API_URL;
        const formData=newImg.formData
        const response = await axios.post(
            `${baseUrl}/user/uploadImg`,
            formData,
            {
                headers:{
                    'Content-Type':'multipart/form-data',
                    'Authorization': `Bearer ${thunkAPI.getState().auth.token}`
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