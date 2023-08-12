import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./userService";

const getUserfromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const initialState = {
    user: getUserfromLocalStorage,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const signup = createAsyncThunk(
    "auth/signup",
    async (userData, thunkAPI) => {
        try {
            return await authService.signup(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const signin = createAsyncThunk(
    "auth/signin",
    async (userData, thunkAPI) => {
        try {
            return await authService.signin(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getWishlists = createAsyncThunk(
    "auth/wishlist",
    async (_, thunkAPI) => {
        try {
            return await authService.getWishlist();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = "success";
            })
            .addCase(signup.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                state.isLoading = false;
            })
            .addCase(signin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = "success";
            })
            .addCase(signin.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getWishlists.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getWishlists.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.wishlist = action.payload;
                state.message = "success";
            })
            .addCase(getWishlists.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
    },
});

export default authSlice.reducer;
