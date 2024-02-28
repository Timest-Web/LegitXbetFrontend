export const fetchBankList = async () => {
    try {
      const response = await fetch("https://legitx.ng/wallet/fetch-banks"); 
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  