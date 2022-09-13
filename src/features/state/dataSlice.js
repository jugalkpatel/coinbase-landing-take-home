import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "IDLE",
  id: 0,
  data: [],
};

export const dataSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.status = "LOADING";
    },
    data: (state, action) => {
      state.status = "DATA";
      const data = [...state.data, ...action.payload];
      state.data = data;
      state.id = Number(state.data[state.data.length - 1].rank);
    },
    error: (state, action) => {
      state.status = "ERROR";
    },
    loadMore: (state, action) => {
      state.status = "LOAD_MORE";
    },
  },
});

export const { loading, data, error, loadMore } = dataSlice.actions;

export const selectData = (state) => state.app.data;

export const selectId = (state) => state.app.id;

export const selectStatus = (state) => state.app.status;

export default dataSlice.reducer;
