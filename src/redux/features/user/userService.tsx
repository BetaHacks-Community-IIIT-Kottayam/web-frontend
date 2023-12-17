import { createAsyncThunk } from "@reduxjs/toolkit";
import { IErrorResponse, IGetUserProfileResponse } from "../../types/response.types";
import { AppDispatch, RootState } from "../../store/store";
import axios, { AxiosError } from "axios";


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