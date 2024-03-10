import { useQuery } from "@tanstack/react-query";

const getTransactionList = async () => {
  try {
    const userDetails = localStorage.getItem("access") || "{}";
    const parsedDetails = JSON.parse(userDetails);
    const baseUrl = "https://legitx.ng/transactions/";
    const token = parsedDetails.accessToken;

    const [creditResponse, debitResponse] = await Promise.all([
      fetch(baseUrl + "credit", {
        headers: { Authorization: `Bearer ${token}` },
      }),
      fetch(baseUrl + "debit", {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ]);

    const creditTransactions = await creditResponse.json();
    const debitTransactions = await debitResponse.json();

    return [...creditTransactions, ...debitTransactions];
  } catch (error) {
    console.error(error);
  }
};

export default getTransactionList;
