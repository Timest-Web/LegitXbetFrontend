export const fetchBankList = async () => {
    try {
      const response = await fetch("https://api.paystack.co/bank"); 
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  