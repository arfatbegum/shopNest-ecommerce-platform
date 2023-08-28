import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

const initialState = {
    blogs: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const getAllBlogs = createAsyncThunk(
    "blog/getAllBlogs",
    async (filters, thunkAPI) => {
        try {
            return await blogService.getBlogs(filters);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getBlogById = createAsyncThunk(
    "blog/getBlogById",
    async (blogId, thunkAPI) => {
        try {
            return await blogService.getBlog(blogId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getBlogCategories = createAsyncThunk(
    "blog/getBlogCategories",
    async (_, thunkAPI) => {
        try {
            return await blogService.getBlogCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


export const blogSlice = createSlice({
    name: "blog",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.blogs = action.payload;
            })
            .addCase(getAllBlogs.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getBlogById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlogById.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.blogs = action.payload;
            })
            .addCase(getBlogById.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getBlogCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlogCategories.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.categories = action.payload;
            })
            .addCase(getBlogCategories.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
    },
});

export default blogSlice.reducer;
