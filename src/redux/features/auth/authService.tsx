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
        const response = await axios.post(
            'http://localhost:5000/user/signin',
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
        const response = await axios.post(
            'http://localhost:5000/user/signup',
            newUserCredentials
        );
        console.log(response.data);
        return response.data as IAuthenticationResponse;
    } catch (err) {
        const error = err as AxiosError<IErrorResponse>;

        return thunkAPI.rejectWithValue(
            error.response?.data as IErrorResponse
        );
    }
});

