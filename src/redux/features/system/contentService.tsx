import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAddBlogServiceResponse,
  IBlogCardResponse,
  IErrorResponse,
  IGetBlogResponse,
} from "../../types/response.types";
import { AppDispatch, RootState } from "../../store/store";
import axios, { AxiosError } from "axios";

export const getAllBlogsService = createAsyncThunk<
  IBlogCardResponse,
  undefined,
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectVal: IErrorResponse;
  }
>("getAllBlogsService", async (_, thunkAPI) => {
  try {
    const baseUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get(`${baseUrl}/blog/getAllBlogs`);
    return response.data as IBlogCardResponse;
  } catch (err) {
    const error = err as AxiosError<IErrorResponse>;
    return thunkAPI.rejectWithValue(error.response?.data as IErrorResponse);
  }
});

export const getRecentBlogsService = createAsyncThunk<
  IBlogCardResponse,
  undefined,
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectVal: IErrorResponse;
  }
>("getRecentBlogsService", async (_, thunkAPI) => {
  try {
    const baseUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get(`${baseUrl}/blog/getRecentBlogs`);
    return response.data as IBlogCardResponse;
  } catch (err) {
    const error = err as AxiosError<IErrorResponse>;
    return thunkAPI.rejectWithValue(error.response?.data as IErrorResponse);
  }
});

export const getBlogService = createAsyncThunk<
  IGetBlogResponse,
  string,
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectVal: IErrorResponse;
  }
>("getBlogService", async (id: string, thunkAPI) => {
  try {
    const baseUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get(`${baseUrl}/blog/getBlog/${id}`);

    return response.data as IGetBlogResponse;
  } catch (err) {
    const error = err as AxiosError<IErrorResponse>;
    return thunkAPI.rejectWithValue(error.response?.data as IErrorResponse);
  }
});

export const upvoteBlogService = createAsyncThunk<
  IGetBlogResponse,
  string | undefined,
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectVal: IErrorResponse;
  }
>("upvoteBlogService", async (id: string | undefined, thunkAPI) => {
  const config = {
    headers: {
      Authorization: `Bearer ${thunkAPI.getState().auth.token}`,
    },
  };
  try {
    const baseUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get(`${baseUrl}/blog/${id}/upvote`, config);
    return response.data as IGetBlogResponse;
  } catch (err) {
    const error = err as AxiosError<IErrorResponse>;

    return thunkAPI.rejectWithValue(error.response?.data as IErrorResponse);
  }
});
