import { createSlice } from "@reduxjs/toolkit";
import { IContentSliceState } from "../../types/states.types";
import { RootState } from "../../store/store";
import { getAllBlogsService } from "./contentService";


const initialState: IContentSliceState = {
    blogs: undefined,
    isFetched: false,
    isFetchedAll: false,
    currentBlog: undefined,
    status: {
        isLoading: false,
        isError: false,
        errorMessage: undefined
    }
}

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        retryFetch:(state)=>{
             state=initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogsService.pending, (state) => {
                state.status.isLoading = true;
                state.status.isError = false;
                state.status.errorMessage = undefined;
            })
            .addCase(getAllBlogsService.fulfilled, (state, action) => {
                state.isFetchedAll = true;
                state.blogs = action.payload.blogs;
                state.status.isLoading = false;
                state.status.isError = false;
                state.status.errorMessage = undefined;
            })
            .addCase(getAllBlogsService.rejected, (state, action) => {
                state.status.isError = true;
                state.status.errorMessage = action.payload;
                state.status.isLoading = false;
            })

    }

});

export const {retryFetch}=contentSlice.actions;
export const selectContent = (state: RootState) => state.content;
export default contentSlice.reducer;