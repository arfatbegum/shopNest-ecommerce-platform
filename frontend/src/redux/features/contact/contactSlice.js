import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "./contactService";


const initialState = {
    contact: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const createEnquiry = createAsyncThunk(
    "auth/contact",
    async (contact, thunkAPI) => {
        try {
            return await contactService.createEnquiry(contact);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


export const contactSlice = createSlice({
    name: "contact",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createEnquiry.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createEnquiry.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.contact = action.payload;
                state.message = "success";
            })
            .addCase(createEnquiry.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                state.isLoading = false;
            })

    },
});

export default contactSlice.reducer;
