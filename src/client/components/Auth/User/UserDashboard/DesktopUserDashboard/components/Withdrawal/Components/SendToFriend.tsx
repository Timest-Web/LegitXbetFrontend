import React, { useEffect, useState } from "react";
import axios from "axios";

const SendToFriend = () => {
  const [amount, setAmount] = useState<string>("");
  const [receipientPhone, setReceipientPhone] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setReceipientPhone(e.target.value);
  };

  const handleSubmit = async(e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    function convertToInternationalFormat(localNumber: any) {
      if (localNumber.startsWith("0")) {
        localNumber = localNumber.slice(1);
      }

      return "234" + localNumber;
    }

    const newAmount = parseFloat(amount);
    const convertedPhone = parseFloat(convertToInternationalFormat(receipientPhone))
    const newReceipientPhone =  convertedPhone ;

    const data = { newAmount, newReceipientPhone };

    try {
      const response = await axios.post(
        "https://legitx.ng/wallet/send-receipient",
        data
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={amount}
          name="amount"
          onChange={handleInputChange}
        />
        <input
          type="text"
          value={receipientPhone}
          name="receipientPhone"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default SendToFriend;
