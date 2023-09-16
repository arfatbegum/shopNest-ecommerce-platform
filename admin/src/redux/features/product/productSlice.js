import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productServices from "./productServices";

export const getProducts = createAsyncThunk(
  "product/get-products",
  async (filters,thunkAPI) => {
    try {
      return await productServices.getProducts(filters);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createAProduct = createAsyncThunk(
  "product/create-product",
  async (productData, thunkAPI) => {
    try {
      return await productServices.createProduct(productData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (productId, thunkAPI) => {
    try {
      return await productServices.getProduct(productId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateAProduct = createAsyncThunk(
  "product/update-product",
  async (product, thunkAPI) => {
    try {
      return await productServices.updateProduct(product);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteAProduct = createAsyncThunk(
  "product/delete-product",
  async (id, thunkAPI) => {
    try {
      return await productServices.deleteProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createAProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdProduct = action.payload;
      })
      .addCase(createAProduct.rejected, (state, action) => {
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
        state.name = action.payload.name;
        state.description = action.payload.description;
        state.price = action.payload.price;
        state.salePrice = action.payload.salePrice;
        state.brand = action.payload.brand;
        state.category = action.payload.category;
        state.tags = action.payload.tags;
        state.color = action.payload.color;
        state.quantity = action.payload.quantity;
        state.images = action.payload.images;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(updateAProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedProduct = action.payload;
      })
      .addCase(updateAProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedProduct = action.payload;
      })
      .addCase(deleteAProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default productSlice.reducer;