export interface verifyBankPayload {
  accountNumber: string,
  bankCode: string
}

export const verifyBank = async (payload: verifyBankPayload) => {
  const url = `https://legitx.ng/wallet/verify-bank`;

  try {
    const userDetails = localStorage.getItem("access") || "{}";
    const parsedDetails = JSON.parse(userDetails);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${parsedDetails?.accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Balance updated successfully:", responseData);
  } catch (error) {
    console.error("There was a problem updating the balance:", error);
    // Handle error - maybe show an error message to the user
  }
};
