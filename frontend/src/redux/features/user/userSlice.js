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

export const addToCart = createAsyncThunk(
    "auth/addToCart",
    async (cartData, thunkAPI) => {
        try {
            return await authService.addToCart(cartData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getCart = createAsyncThunk(
    "auth/getCart",
    async (_, thunkAPI) => {
        try {
            return await authService.getCartProduct();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateCart = createAsyncThunk(
    "auth/updateCart",
    async ({ id, newQuantity }, thunkAPI) => {
        try {
            return await authService.updateCart(id, newQuantity);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteCart = createAsyncThunk(
    "auth/removeCart",
    async (id, thunkAPI) => {
        try {
            return await authService.removeFromCart(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const createOrder = createAsyncThunk(
    "auth/createOrder",
    async (orderData, thunkAPI) => {
        try {
            return await authService.createOrders(orderData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getOrders = createAsyncThunk(
    "auth/getOrders",
    async (_, thunkAPI) => {
      try {
        return await authService.getUserOrders();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
);
  
export const forgetPasswordToken = createAsyncThunk(
    "auth/forgetPasswordToken",
    async (data, thunkAPI) => {
      try {
        return await authService.forgetPasswordToken(data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
);
  
export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async ({ id, password }, thunkAPI) => {
        try {
            return await authService.resetPassword(id, password);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resetCartState = (state) => {
    state.cart = [];
    state.message = "Cart reset";
  };

  
export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        resetCart: (state) => {
          state.cart = [];
        },
      },
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
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.cart = action.payload;
                state.message = "success";
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.cart = action.payload;
                state.message = "success";
            })
            .addCase(getCart.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(deleteCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.cart = action.payload;
                state.message = "success";
            })
            .addCase(deleteCart.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(updateCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                // Update the cart item in the state with the updated data
                const updatedCartItemIndex = state.cart.findIndex(item => item._id === action.payload._id);
                if (updatedCartItemIndex !== -1) {
                    state.cart[updatedCartItemIndex] = action.payload;
                }
                state.message = "success";
            })
            .addCase(updateCart.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(createOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;
                state.message = "success";
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload.error;
                state.isLoading = false;
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;
                state.message = "success";
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload.error;
                state.isLoading = false;
            })
            .addCase(forgetPasswordToken.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgetPasswordToken.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.token = action.payload;
                state.message = "success";
            })
            .addCase(forgetPasswordToken.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload.error;
                state.isLoading = false;
            })
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.password = action.payload;
                state.message = "success";
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload.error;
                state.isLoading = false;
            })
    },
});

export const { resetCart } = authSlice.actions;
export default authSlice.reducer;
