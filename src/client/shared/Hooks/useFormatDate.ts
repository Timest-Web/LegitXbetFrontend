import { useState } from 'react';

const useFormatDate = (): ((dateString: string) => string) => {
  const formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      console.log("Date Parsing Failed:", dateString);
      return dateString;
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    console.log("Formatted Date:", formattedDate);
    return formattedDate;
  };

  return formatDate;
};

export default useFormatDate;
