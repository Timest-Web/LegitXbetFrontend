import React, { useState, useContext, useEffect } from "react";
import { BalanceContext } from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import { useProfileContext } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";
import PaystackButton from "./PaystackComponent";

interface FormData {
  depositAmount: string;
}

const DepositForm = () => {
  const [formData, setFormData] = useState<FormData>({ depositAmount: "" });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { balance, setBalance } = useContext(BalanceContext)!;
  const { totalPersonalDetails, handleInputChange } = useProfileContext()!;
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [transactionReference, setTransactionReference] = useState<string | null>(null);

  const handlePaymentSuccess = (response: any) => {
    console.log("Payment successful! Transaction ID:", response.reference);
    setTransactionReference(response.reference);
  };

  useEffect(() => {
    const apiUrl = 'https://legitx.ng/wallet/deposit';

    const fetchData = async () => {
      try {
        if (transactionReference) {
          const postData = {
            merchantType: 'paystack',
            transactionReference: transactionReference,
          };

          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Accept': '*/*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          console.log('Response:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [transactionReference]);

  const handleDepositInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const amount = parseInt(value, 10);

    if (isNaN(amount) || amount < 100 || amount > 500000) {
      setErrorMessage(
        "Invalid deposit amount. Please enter an amount between 100 and 500,000 naira."
      );
      setIsButtonDisabled(true);
    } else {
      setErrorMessage("");
      setIsButtonDisabled(false);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const amount = parseInt(formData.depositAmount, 10);
    if (Object.values(totalPersonalDetails).some((value) => value === "")) {
      alert("Fill up Details");
    }

    if (isNaN(amount) || amount < 100 || amount > 500000) {
      setErrorMessage(
        "Invalid deposit amount. Please enter an amount between 100 and 500,000 naira."
      );
    } else {
      setErrorMessage("");
      console.log("Deposit amount submitted:", amount);
      setFormData({ depositAmount: "" });
      setBalance(balance + amount);
    }
  };

  return (
    <form action="submit" className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="font-bold">Deposit Amount in NGN</label>
        <input
          className="bg-[#F5F5F5] w-52 h-10 "
          type="text"
          name="depositAmount"
          value={formData.depositAmount}
          onChange={handleDepositInputChange}
          min="200"
          max="500000"
        />
        {errorMessage && (
          <p className=" text-red-500 my-1 text-sm ">{errorMessage}</p>
        )}
      </div>

      <div
        aria-disabled={isButtonDisabled}
        className={
          isButtonDisabled
            ? "opacity-50 bg-black text-white text-center text-xs md:text-sm w-20 font-medium p-2 pt-3 md:w-32 md:h-10 rounded mt-4 cursor-pointer"
            : "bg-black text-white text-center text-xs md:text-sm w-20 font-medium p-2 md:w-32 md:h-10 rounded md:p-2 mt-4"
        }
      >
        <PaystackButton
          amount={parseInt(formData.depositAmount, 10)}
          email={"pabloalabanza9@gmail.com"}
          onSuccess={handlePaymentSuccess}
          onClose={() => console.log("Payment closed.")}
        />
      </div>
    </form>
  );
};

export default DepositForm;
