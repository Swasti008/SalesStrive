import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSales = createAsyncThunk("sales/fetchSales", async () => {
  const response = await axios.get(
    "https://mocki.io/v1/ec011261-631e-46e3-95d9-ad5e0802c28d"
  );
  return response.data;
});

const salesSlice = createSlice({
  name: "sales",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    searchQuery: "",
    sortOrder: "asc",
    sortField: "totalSales",
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload.order;
      state.sortField = action.payload.field;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSales.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSales.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchSales.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery, setSortOrder } = salesSlice.actions;

export const selectTotalSalesAndRewards = createSelector(
  (state) => state.sales.items,
  (items) => {
    const totalSales = items.reduce((sum, item) => sum + item.totalSales, 0);
    const totalRewards = items.reduce(
      (sum, item) => sum + item.rewardPoints,
      0
    );
    return { totalSales, totalRewards };
  }
);

export const selectFilteredSales = createSelector(
  (state) => state.sales.items,
  (state) => state.sales.searchQuery,
  (state) => state.sales.sortOrder,
  (state) => state.sales.sortField,
  (items, searchQuery, sortOrder, sortField) => {
    let filteredItems = items.filter((item) =>
      item.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (sortField) {
      filteredItems.sort((a, b) => {
        if (sortOrder === "asc") {
          return a[sortField] > b[sortField] ? 1 : -1;
        } else {
          return a[sortField] < b[sortField] ? 1 : -1;
        }
      });
    }
    return filteredItems;
  }
);

export default salesSlice.reducer;
