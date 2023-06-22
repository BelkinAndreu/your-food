import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ICategoryProducts = "snack" | "hotDish" | "salad" | "dessert" | "drink";

export interface IProduct {
  id: number;
  category: ICategoryProducts;
  name: string;
  description: string;
  price: number;
  photo: string;
}

export interface IProductsState {
  counter: number;
  products: IProduct[];
}

const initialState: IProductsState = {
  counter: 1,
  products: [
    {
      id: 0,
      category: "hotDish",
      name: "Казан - кебаб",
      description: "Горячее блюдо из мяса и картофеля.",
      price: 399,
      photo: "",
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;
export default productsSlice.reducer;
