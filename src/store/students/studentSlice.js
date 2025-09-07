import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  filters: {
    semester: "",
    division: "",
    paymentStatus: "",
  },
  view: "list", // or 'grid'
};

const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilter: (state, action) => {
      const { name, value } = action.payload;
      state.filters[name] = value;
    },
    clearFilters: (state) => {
      state.searchQuery = "";
      state.filters = initialState.filters;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { setSearchQuery, setFilter, clearFilters, setView } =
  controlsSlice.actions;

export default controlsSlice.reducer;
