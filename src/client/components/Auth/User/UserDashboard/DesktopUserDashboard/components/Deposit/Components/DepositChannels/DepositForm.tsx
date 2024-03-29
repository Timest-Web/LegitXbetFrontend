import React, { useState, useContext, useEffect, useCallback } from "react";
import { BalanceContext } from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import PaystackButton from "./PaystackComponent";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueryClient } from "@tanstack/react-query";
import useUser from "@/src/client/shared/Context/UserContext/useUser";

const DepositForm = () => {
  const {refreshUserData} = useUser()
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>(""); 
  const { balance, setBalance } = useContext(BalanceContext)!;
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [transactionReference, setTransactionReference] = useState<
    string | null
  >(null);
  const router = useRouter();
  const notify = () => toast.success("Deposit Succesful");
  const queryClient = useQueryClient();
  const apiUrl = "https://legitx.ng/wallet/deposit";

  const handlePaymentSuccess = (response: any) => {
    console.log("Payment successful! Transaction ID:", response.reference);
    setTransactionReference(response.reference);
    setErrorMessage("");
  };

  useEffect(() => {
    const fetchData = async (reference: string, amount: number) => {
      try {
        const userDetails = localStorage.getItem("access") || "{}";
        const parsedDetails = JSON.parse(userDetails);
        const postData = {
          merchantType: "paystack",
          transactionReference: reference,
        };

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedDetails?.accessToken}`,
          },
          body: JSON.stringify(postData),
        });

        if (!response.ok) {
          throw new Error(`Server Error: ${response.statusText}`);
        }

        setTimeout(() => {
          router.push("/user-dashboard");
        }, 5000);

        notify();
        refreshUserData();
        const data = await response.json();
        setBalance(balance + amount)
        console.log("Response:", data);
        queryClient.invalidateQueries('USER_PROFILE' as any);
      } catch (error: any) {
        console.error("Fetch Error:", error.message);
      }
    };

    if (transactionReference) {
      fetchData(transactionReference, +depositAmount);
    }
  }, [transactionReference, depositAmount, setBalance, balance, router, apiUrl, queryClient, refreshUserData]);

  const handleDepositInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setDepositAmount(inputValue);

    const amount = parseFloat(inputValue);

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

    const amount = parseFloat(depositAmount);

    if (isNaN(amount) || amount < 100 || amount > 500000) {
      setErrorMessage(
        "Invalid deposit amount. Please enter a valid amount between 100 and 500,000 naira."
      );
    } else {
      setErrorMessage("");
      console.log("Deposit amount submitted:", amount);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <ToastContainer />
      <div className="flex flex-col">
        <label className="font-bold">Deposit Amount in NGN</label>
        <input
          className="bg-[#F5F5F5] w-52 h-10"
          type="text"
          name="depositAmount"
          value={depositAmount}
          onChange={handleDepositInputChange}
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
          amount={parseFloat(depositAmount)}
          email={"pabloalabanza9@gmail.com"}
          onSuccess={handlePaymentSuccess}
          onClose={() => console.log("Payment closed.")}
        />
      </div>
    </form>
  );
};

export default DepositForm;
