import { createSlice } from "@reduxjs/toolkit";
import { IContentSliceState } from "../../types/states.types";
import { RootState } from "../../store/store";
import {
  getAllBlogsService,
  getBlogService,
  getRecentBlogsService,
  upvoteBlogService,
} from "./contentService";

const initialState: IContentSliceState = {
  blogs: undefined,
  recentBlogs: undefined,
  query: "",
  isFetched: false,
  isFetchedRecent: false,
  isFetchedAll: false,
  currentBlog: undefined,
  status: {
    isLoading: false,
    isError: false,
    errorMessage: undefined,
  },
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    retryFetch: (state) => {
      state = initialState;
    },
    resetStatus: (state) => {
      state.status = initialState.status;
    },
    newFetch: (state) => {
      state.isFetched = false;
    },
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
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
      .addCase(getRecentBlogsService.pending, (state) => {
        state.status.isLoading = true;
        state.status.isError = false;
        state.status.errorMessage = undefined;
      })
      .addCase(getRecentBlogsService.fulfilled, (state, action) => {
        state.isFetchedRecent = true;
        state.recentBlogs = action.payload.blogs;
        state.status.isLoading = false;
        state.status.isError = false;
        state.status.errorMessage = undefined;
      })
      .addCase(getRecentBlogsService.rejected, (state, action) => {
        state.status.isError = true;
        state.status.errorMessage = action.payload;
        state.status.isLoading = false;
      })
      .addCase(getBlogService.pending, (state) => {
        state.status.isLoading = true;
        state.status.isError = false;
        state.status.errorMessage = undefined;
      })
      .addCase(getBlogService.fulfilled, (state, action) => {
        state.isFetched = true;
        state.currentBlog = action.payload.blog;
        state.status.isLoading = false;
        state.status.isError = false;
        state.status.errorMessage = undefined;
      })
      .addCase(getBlogService.rejected, (state, action) => {
        state.status.isError = true;
        state.status.errorMessage = action.payload;
        state.status.isLoading = false;
      })
      .addCase(upvoteBlogService.pending, (state) => {
        state.status.isLoading = true;
        state.status.isError = false;
        state.status.errorMessage = undefined;
      })
      .addCase(upvoteBlogService.fulfilled, (state, action) => {
        state.isFetched = true;
        state.currentBlog = action.payload.blog;
        state.status.isLoading = false;
        state.status.isError = false;
        state.status.errorMessage = undefined;
      })
      .addCase(upvoteBlogService.rejected, (state, action) => {
        state.status.isError = true;
        state.status.errorMessage = action.payload;
        state.status.isLoading = false;
      });
  },
});

export const { retryFetch, resetStatus, newFetch, setSearchQuery } =
  contentSlice.actions;
export const selectContent = (state: RootState) => state.content;
export default contentSlice.reducer;
