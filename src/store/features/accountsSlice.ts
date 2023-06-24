import { createSlice } from "@reduxjs/toolkit";

export interface IAccount {
  id: number;
  firtsName: string;
  lastName: string;
  email: string;
  password: string;
  city?: string;
  address?: string;
}

interface IAccountsState {
  counter: number;
  users: IAccount[];
}

const initialState: IAccountsState = {
  counter: 1,
  users: [
    {
      id: 0,
      firtsName: "Andrey",
      lastName: "Belkin",
      email: "andreubelkin@gmail.com",
      password: "123456",
      city: "Tyumen",
      address: "Timofeya Charkova 81/1",
    },
  ],
};

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = accountsSlice.actions;
export default accountsSlice.reducer;
