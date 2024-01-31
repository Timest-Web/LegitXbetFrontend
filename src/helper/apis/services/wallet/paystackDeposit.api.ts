export interface depositData {
  merchantType: string;
  transactionReference: string;
}

export const paystackDeposit = async (payload: depositData) => {
  try {
    const response = await fetch("https://legitx.ng/wallet/deposit", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    data.statusCode = response.status;
    return data;
  } catch (error) {
    console.error("An error occurred during the API request:", error);
    return { statusCode: 500, error: "Internal Server Error" };
  }
};
