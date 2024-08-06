import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setSortOrder } from "../redux/slices/salesSlice";

const SearchSortComponent = () => {
  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.sales.searchQuery);
  const selectedsortField = useSelector((state) => state.sales.sortField);
  const sortOrder = useSelector((state) => state.sales.sortOrder);
  const [sortField, setSortField] = useState(selectedsortField);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSortFieldChange = (e) => {
    const field = e.target.value;
    setSortField(field);
    dispatch(setSortOrder({ field, order: "asc" }));
  };

  const handleSortOrderChange = (e) => {
    if (sortField) {
      dispatch(setSortOrder({ field: sortField, order: e.target.value }));
    }
  };

  return (
    <div className="md:search-sort flex flex-col gap-2 md:gap-4 md:flex-row">
      <input
        type="text"
        value={searchQuery}
        placeholder="Search"
        onChange={handleSearch}
        className="border p-2 rounded"
      />

      <select
        value={selectedsortField}
        onChange={handleSortFieldChange}
        className="border p-2 rounded"
      >
        <option value="">Sort By</option>
        <option value="brand">Brand</option>
        <option value="purchaseDate">Date</option>
        <option value="totalSales">Amount</option>
        <option value="rewardPoints">Reward</option>
      </select>

      <label className="text-white">
        <input
          type="radio"
          name="order"
          value="asc"
          checked={sortOrder === "asc"}
          onChange={handleSortOrderChange}
        />{" "}
        ASC
      </label>

      <label className="text-white">
        <input
          type="radio"
          name="order"
          value="desc"
          checked={sortOrder === "desc"}
          onChange={handleSortOrderChange}
        />{" "}
        DESC
      </label>
    </div>
  );
};

export default SearchSortComponent;
