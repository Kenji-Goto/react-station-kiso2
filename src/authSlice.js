import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

const initialState = {
  isSignIn: cookie.get("token") !== undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isSignIn = true;
    },
    signOut: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isSignIn = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
