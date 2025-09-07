import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: undefined,
  accessToken: undefined,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLogedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});
export const { userLogedIn, userLogedOut } = authSlice.actions;
export default authSlice.reducer;
