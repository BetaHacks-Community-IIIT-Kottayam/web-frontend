import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthenticationResponse, IErrorResponse } from "../../types/response.types";
import { ILoginFormState, IRegisterFormState } from "../../types/states.types";
import { AppDispatch, RootState } from "../../store/store";
import axios, { AxiosError } from "axios";



//Login-Service 
export const userLogin = createAsyncThunk<
    IAuthenticationResponse,
    ILoginFormState,
    {
        state: RootState;
        dispatch: AppDispatch,
        rejectVal: IErrorResponse
    }
>('userLogin', async (loginCredentials: ILoginFormState, thunkAPI) => {
    try {
        const baseUrl=process.env.REACT_APP_API_URL;
        // console.log(baseUrl);
        // console.log(process.env.NODE_ENV);
        const response = await axios.post(
            `${baseUrl}/user/signin`,
            loginCredentials
        );
        return response.data as IAuthenticationResponse;
    } catch (err) {
        const error = err as AxiosError<IErrorResponse>;
        
        return thunkAPI.rejectWithValue(
            error.response?.data as IErrorResponse
        );
    }
});


//Register-Service 
export const userRegister = createAsyncThunk<
    IAuthenticationResponse,
    IRegisterFormState,
    {
        state: RootState;
        dispatch: AppDispatch,
        rejectVal: IErrorResponse
    }
>('userRegister', async (newUserCredentials: IRegisterFormState, thunkAPI) => {
    try {
        const baseUrl=process.env.REACT_APP_API_URL;
        const response = await axios.post(
            `${baseUrl}/user/signup`,
            newUserCredentials
        );
        return response.data as IAuthenticationResponse;
    } catch (err) {
        const error = err as AxiosError<IErrorResponse>;

        return thunkAPI.rejectWithValue(
            error.response?.data as IErrorResponse
        );
    }
});

//verify Token-Service 
export const verifyTokenService = createAsyncThunk<
    IAuthenticationResponse,
    undefined,
    {
        state: RootState;
        dispatch: AppDispatch,
        rejectVal: IErrorResponse
    }
>('verifyTokenService', async (_, thunkAPI) => {
    const config={
        headers:{
            Authorization:`Bearer ${thunkAPI.getState().auth.token}`
        }
      }
    try {
        const baseUrl=process.env.REACT_APP_API_URL;

        const response = await axios.get(
            `${baseUrl}/user/verifyToken`,
            config
        );

        return response.data as IAuthenticationResponse;
    } catch (err) {
        console.log(err)

        const error = err as AxiosError<IErrorResponse>;

        return thunkAPI.rejectWithValue(
            error.response?.data as IErrorResponse
        );
    }
});

