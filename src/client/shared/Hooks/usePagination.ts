import { useState } from "react";

export const usePagination = (itemsPerPage:number, data:[]) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    const nextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const prevPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    const goToPage = (pageNumber:number) => {
      setCurrentPage(pageNumber);
    };
  
    return {
      currentItems,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      goToPage,
    };
  };