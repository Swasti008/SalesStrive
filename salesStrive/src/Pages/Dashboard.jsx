import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../components/userCard";
import TotalInfoCard from "../components/TotalInfoCard";
import SearchSortComponent from "../components/SearchBar";
import SalesCard from "../components/SalesCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  fetchSales,
  selectTotalSalesAndRewards,
  selectFilteredSales,
} from "../redux/slices/salesSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const salesStatus = useSelector((state) => state.sales.status);
  const { totalSales, totalRewards } = useSelector(selectTotalSalesAndRewards);
  const filteredSales = useSelector(selectFilteredSales);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    if (salesStatus === "idle") {
      dispatch(fetchSales());
    }
  }, [salesStatus, dispatch]);

  const handlePageChange = (page) => {
    if (page == 0 || page == totalPages + 1) {
      return;
    }
    setCurrentPage(page);
  };

  const paginatedSales = filteredSales.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(filteredSales.length / itemsPerPage);

  return (
    <>
      <NavBar state={false} />
      <div className="flex flex-col md:flex-row p-20 gap-20 ">
        <UserCard userData={user} />
        <TotalInfoCard totalSales={totalSales} totalRewards={totalRewards} />
      </div>
      <div className="p-20">
        <SearchSortComponent />
        <div className="sales-cards grid grid-col-1 md:grid-cols-3 gap-4 mt-8">
          {paginatedSales.length == 0 ? (
            <h1 className="text-white">No data matching your search...</h1>
          ) : (
            paginatedSales.map((sale) => (
              <SalesCard key={sale.id} sale={sale} />
            ))
          )}
        </div>
        <Pagination className="text-blue-200 mt-4" id="page">
          <PaginationContent>
            <PaginationItem className="cursor-pointer">
              <PaginationPrevious
                onClick={() => {
                  console.log(totalPages);
                  handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index} className="cursor-pointer">
                <PaginationLink
                  onClick={() => {
                    console.log(currentPage);
                    handlePageChange(index + 1);
                  }}
                  className={
                    currentPage === index + 1 ? "bg-blue-500 text-white" : ""
                  }
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem className="cursor-pointer">
              <PaginationNext
                onClick={() => {
                  handlePageChange(currentPage + 1);
                  console.log(currentPage);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
