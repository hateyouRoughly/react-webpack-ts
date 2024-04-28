import { createSlice } from '@reduxjs/toolkit';
import Cookies from "js-cookie";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    token: Cookies.get("token") as any,
  },
  reducers: {
    setState: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      return {...state, ...action.payload};
    },
    removeState: (state, action) => {
			return {...state, [action.payload]: null};
    },
    login: (state, action) => {
			Cookies.set('token', action?.payload as string);
      return {...state, token: action?.payload};
    },
    logout: (state) => {
			Cookies.remove('token');
			return {...state, token: null};
    },
  },
})

// Action creators are generated for each case reducer function
export const { setState, removeState, login, logout } = counterSlice.actions

export default counterSlice.reducer