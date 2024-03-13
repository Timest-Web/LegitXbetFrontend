import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getDeposit } from "@/src/helper/apis/services/transaction-list/get-deposit.api";
import { getFriend } from "@/src/helper/apis/services/wallet/getFriend";
import useUser from "@/src/client/shared/Context/UserContext/useUser";

const SendToFriend = () => {
  const [amount, setAmount] = useState<string>("");
  const [recipientPhone, setRecipientPhone] = useState<string>("");
  const user = useUser();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const convertToInternationalFormat = (localNumber: any) => {
    if (localNumber.startsWith("0")) {
      localNumber = localNumber.slice(1);
    }

    return "234" + localNumber;
  };

  const newAmount = parseFloat(amount);
  const convertedPhone = parseFloat(
    convertToInternationalFormat(recipientPhone)
  );
  const {
    data: friendName,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["friend", convertedPhone],
    queryFn: () => getFriend(convertedPhone),
  });

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setAmount(inputValue);
    const amount = parseFloat(inputValue);
    if (isNaN(amount) || amount > user.user.amount) {
      setErrorMessage("Invalid transfer amount. Check your Balance");
      setIsButtonDisabled(true);
    } else {
      setErrorMessage("");
      setIsButtonDisabled(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipientPhone(e.target.value);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newReceipientPhone = convertedPhone;

    const data = { amount: newAmount, phoneNumber: newReceipientPhone };

    try {
      const userDetails = localStorage.getItem("access") || "{}";
      const parsedDetails = JSON.parse(userDetails);
      const response = await axios.post(
        "https://legitx.ng/wallet/send-receipient",
        data,
        {
          headers: {
            Authorization: `Bearer ${parsedDetails?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      setAmount("");
      setRecipientPhone("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h3 className="font-bold text-lg mb-6">Send to Friend</h3>
      <form
        className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 p-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-2">
          <label className="font-bold">Amount</label>
          <input
            className="p-2 rounded-md"
            type="text"
            value={amount}
            name="amount"
            onChange={handleAmountChange}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-bold">Phone Number</label>
          <input
            className="p-2 rounded-md"
            type="text"
            value={recipientPhone}
            name="receipientPhone"
            onChange={handlePhoneChange}
          />
        </div>
        <div className="md:pt-8">
          <button
            disabled={isButtonDisabled}
            type="submit"
            className={`bg-black text-white text-center flex justify-center items-center p-2 rounded-md w-24 h-8 ${
              isButtonDisabled && "opacity-50"
            }`}
          >
            Send
          </button>
        </div>
      </form>
      <p className="font-bold text-sm">Send to: {friendName}</p>
    </div>
  );
};

export default SendToFriend;
