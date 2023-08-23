import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
    products: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const getAllProducts = createAsyncThunk(
    "product/getAllProducts",
    async (filters, thunkAPI) => {
        try {
            return await productService.getProducts(filters);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getCategories = createAsyncThunk(
    "product/get-categories",
    async (thunkAPI) => {
        try {
            return await productService.getProductCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getBrands = createAsyncThunk(
    "product/brands",
    async (thunkAPI) => {
      try {
        return await productService.getProductBrands();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const filterProductsByStock  = createAsyncThunk(
    "product/stock",
    async (stockStatus, thunkAPI) => {
        try {
            return await productService.filterProductsByStock (stockStatus);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getProductById = createAsyncThunk(
    "product/getProductById",
    async (productId, thunkAPI) => {
        try {
            return await productService.getProduct(productId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addToWishlist = createAsyncThunk(
    "product/addToWishlist",
    async (productId, thunkAPI) => {
        try {
            return await productService.addToWishlist(productId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addRating = createAsyncThunk(
    "product/rating",
    async (data, thunkAPI) => {
        try {
            return await productService.rating(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.productCategories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getBrands.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(getBrands.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.brands = action.payload;
              })
              .addCase(getBrands.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
              })
            .addCase(filterProductsByStock.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(filterProductsByStock.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.stock = action.payload;
            })
            .addCase(filterProductsByStock.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getProductById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(addToWishlist.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.addToWishlist = action.payload;
                state.message = "Product Add to Wishlist"
            })
            .addCase(addToWishlist.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(addRating.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addRating.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.rating = action.payload;
            })
            .addCase(addRating.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
    },
});

export default productSlice.reducer;
