import { createSlice } from "@reduxjs/toolkit";
import { IProduct, productsList } from "../data/productList";

export interface IProductsState {
  counter: number;
  products: IProduct[];
}

const initialState: IProductsState = {
  counter: 1,
  products: productsList,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;
export default productsSlice.reducer;
