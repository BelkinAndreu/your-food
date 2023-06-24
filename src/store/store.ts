import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";
import accountsSlice from "./features/accountsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    accounts: accountsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
