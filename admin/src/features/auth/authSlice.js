import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";

const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  user: getUserfromLocalStorage,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
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

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (buildeer) => {
      buildeer
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
          });
  },
});

export default authSlice.reducer;