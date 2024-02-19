import React, { useState, useContext, useEffect, useCallback } from "react";
import { BalanceContext } from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import PaystackButton from "./PaystackComponent";
import { useInfoContext } from "@/src/client/shared/Context/PersonalDetailsContext/GetUserInfoContext";

interface FormData {
  depositAmount: string;
}

const DepositForm = () => {
  const [formData, setFormData] = useState<FormData>({ depositAmount: "" });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { balance, setBalance } = useContext(BalanceContext)!;
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [transactionReference, setTransactionReference] = useState<
    string | null
  >(null);

  const handlePaymentSuccess = (response: any) => {
    console.log("Payment successful! Transaction ID:", response.reference);
    setTransactionReference(response.reference);
    setErrorMessage("");
  };

  const apiUrl = "https://legitx.ng/wallet/deposit";

  const fetchData = useCallback(async (reference: string) => {
    try {
      const postData = {
        merchantType: "paystack",
        transactionReference: reference,
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTcwODI4ODAwMywiZXhwIjoxNzA4Mzc0NDAzfQ.UDHaUokNtx-XJJO9yP2o0aBk1DU5wCbwumOOvWNCXLw",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error(`Server Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Response:", data);
    } catch (error: any) {
      console.error("Fetch Error:", error.message);
    }
  }, []);

  useEffect(() => {
    if (transactionReference) {
      fetchData(transactionReference);
    }
  }, [fetchData, transactionReference]);

  const handleDepositInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ depositAmount: value });
    const amount = parseFloat(value);

    if (isNaN(amount) || amount < 100 || amount > 500000) {
      setErrorMessage(
        "Invalid deposit amount. Please enter an amount between 100 and 500,000 naira."
      );
      setIsButtonDisabled(true);
    } else {
      setErrorMessage("");
      setIsButtonDisabled(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(formData.depositAmount);

    if (isNaN(amount) || amount < 100 || amount > 500000) {
      setErrorMessage(
        "Invalid deposit amount. Please enter a valid amount between 100 and 500,000 naira."
      );
    } else {
      setErrorMessage("");
      console.log("Deposit amount submitted:", amount);
      setFormData({ depositAmount: "" });
      setBalance(balance + amount);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="font-bold">Deposit Amount in NGN</label>
        <input
          className="bg-[#F5F5F5] w-52 h-10"
          type="number"
          name="depositAmount"
          value={formData.depositAmount}
          onChange={handleDepositInputChange}
          min="100"
          max="500000"
        />
        {errorMessage && (
          <p className="text-red-500 my-1 text-sm">{errorMessage}</p>
        )}
      </div>

      <div
        className={`bg-black text-white text-center text-sm font-medium p-2 w-20 rounded mt-4 ${
          isButtonDisabled && "opacity-50"
        }`}
      >
        <PaystackButton
          amount={parseFloat(formData.depositAmount)}
          email={"pabloalabanza9@gmail.com"}
          onSuccess={handlePaymentSuccess}
          onClose={() => console.log("Payment closed.")}
        />
      </div>
    </form>
  );
};

export default DepositForm;
