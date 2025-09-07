import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarExpanded: false,
  theme: undefined,
  mobileMenuOpen: false,
  dropDownMenuOpen: null, // store index of open dropdown, null = none open
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    sidebarToggled: (state) => {
      state.sidebarExpanded = !state.sidebarExpanded;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
    dropDownMenu: (state, action) => {
      // action.payload is the clicked menu index
      if (state.dropDownMenuOpen === action.payload) {
        // close if clicking the already open dropdown
        state.dropDownMenuOpen = null;
      } else {
        // open the clicked dropdown
        state.dropDownMenuOpen = action.payload;
      }
    },
  },
});

export const {
  sidebarToggled,
  setTheme,
  toggleMobileMenu,
  closeMobileMenu,
  dropDownMenu,
} = globalSlice.actions;
export default globalSlice.reducer;
