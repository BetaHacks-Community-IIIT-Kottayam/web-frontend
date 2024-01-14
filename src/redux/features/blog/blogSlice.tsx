import { createSlice } from "@reduxjs/toolkit";
import { IBlogSliceState } from "../../types/states.types";
import { RootState } from "../../store/store";
import { addNewBlogService, uploadImgBlogService } from "./blogService";


const initialState: IBlogSliceState = {
    index: [0],
    content: [''],
    images: [],
    isAdded: false,
    status: {
        isLoading: false,
        isError: false,
        errorMessage: undefined
    }
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        flushBlog: (state) => {
            state.index = [0];
            state.content = [''];
            state.images = [];
            state.isAdded = false;
            state.status.isLoading = false;
            state.status.isError = false;
            state.status.errorMessage = undefined;
        },
        retrySubmit: (state) => {
            state.status.isLoading = false;
            state.status.isError = false;
            state.status.errorMessage = undefined;
        },
        addContent: (state, action) => {
            state.content.push(action.payload);
        },
        editContent: (state, action) => {
            state.content[action.payload.i] = action.payload.value;
        },
        removeElement: (state, action) => {
            state.content.splice(action.payload, 1);
            state.index.splice(action.payload, 1);
        },
        addIndex: (state, action) => {
            state.index.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addNewBlogService.pending, (state) => {
                state.status.isLoading = true;
                state.status.isError = false;
                state.status.errorMessage = undefined;
            })
            .addCase(addNewBlogService.fulfilled, (state) => {
                state.isAdded = true;
                state.status.isLoading = false;
                state.status.isError = false;
                state.status.errorMessage = undefined;
            })
            .addCase(addNewBlogService.rejected, (state, action) => {
                state.status.isError = true;
                state.status.errorMessage = action.payload;
                state.status.isLoading = false;
            })
            .addCase(uploadImgBlogService.pending, (state) => {
                // state.status.isLoading = true;
                // state.status.isError = false;
                // state.status.errorMessage = undefined;
            })
            .addCase(uploadImgBlogService.fulfilled, (state,action) => {
                state.images.push(action.payload.imageUrl);
            })
            .addCase(uploadImgBlogService.rejected, (state, action) => {
                state.status.isError = true;
                state.status.errorMessage = action.payload;
                state.images.push('No image found');
                // state.status.isLoading = false;
            })

    }

});

export const { flushBlog, retrySubmit, editContent, removeElement, addContent, addIndex } = blogSlice.actions;
export const selectBlog = (state: RootState) => state.blog;
export default blogSlice.reducer;