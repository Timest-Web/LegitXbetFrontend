import React, { useEffect, useState } from "react";
import axios from "axios";

const SendToFriend = () => {
  const [amount, setAmount] = useState<string>("");
  const [receipientPhone, setReceipientPhone] = useState<string>("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceipientPhone(e.target.value);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const convertToInternationalFormat = (localNumber: any) => {
      if (localNumber.startsWith("0")) {
        localNumber = localNumber.slice(1);
      }

      return "234" + localNumber;
    }

    const newAmount = parseFloat(amount);
    const convertedPhone = parseFloat(
      convertToInternationalFormat(receipientPhone)
    );
    const newReceipientPhone = convertedPhone;

    const data = { amount: newAmount, phoneNumber: newReceipientPhone };

    try {
        const userDetails = localStorage.getItem("access") || "{}";
        const parsedDetails = JSON.parse(userDetails);
      const response = await axios.post(
        "https://legitx.ng/wallet/send-receipient",
        data  ,   { headers: {
        'Authorization': `Bearer ${parsedDetails?.accessToken}`,
        'Content-Type': 'application/json' 
      }}
      );

      console.log("Response:", response.data);
      setAmount("");
      setReceipientPhone("")
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
        <h3 className="font-bold text-lg mb-6">Send to Friend</h3>
      <form
        className="flex flex-col space-y-4 md:flex-row md:space-x-6 p-3"
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
            value={receipientPhone}
            name="receipientPhone"
            onChange={handlePhoneChange}
          />
        </div>
        <button type="submit" className="bg-black text-white text-center flex justify-center items-center p-2 rounded-md w-24 h-8 mt-8">Send</button>
      </form>
    </div>
  );
};

export default SendToFriend;
