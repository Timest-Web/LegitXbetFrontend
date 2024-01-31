export const fetchBankDetails = async (key: [string, string], { signal }: { signal: AbortSignal }) => {
    try {
      const [selectedBankCode, accountNumber] = key;
      
      if (selectedBankCode && accountNumber) {
        const response = await fetch(
          `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${selectedBankCode}`,
          {
            headers: {
              Authorization: "Bearer sk_test_6a108bace5d092039f322871d921b3b7362e8634",
            },
            signal,
          }
        );
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const bankDetails = await response.json();
        return bankDetails.data.account_name;
      }
      return null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  