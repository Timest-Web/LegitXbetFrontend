import React, { useState } from "react";

interface FormData {
  depositAmount: string;
}

const DepositForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ depositAmount: "" });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const amount = parseInt(value, 10);

    if (isNaN(amount) || amount < 200 || amount > 500000) {
      setErrorMessage(
        "Invalid deposit amount. Please enter an amount between 200 and 500,000 naira."
      );
    } else {
      setErrorMessage("");
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const amount = parseInt(formData.depositAmount, 10);

    if (isNaN(amount) || amount < 200 || amount > 500000) {
      setErrorMessage(
        "Invalid deposit amount. Please enter an amount between 200 and 500,000 naira."
      );
    } else {
      setErrorMessage("");
      console.log("Deposit amount submitted:", amount);
      setFormData({depositAmount:""})
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="font-bold">Deposit Amount in NGN</label>
        <input
          className="bg-[#F5F5F5] w-52 h-10 "
          type="text"
          name="depositAmount"
          value={formData.depositAmount}
          onChange={handleInputChange}
          min="200"
          max="500000"
        />
        {errorMessage && <p className=" text-red-500 my-1 text-sm ">{errorMessage}</p>}
      </div>

      <button type="submit" className="bg-black text-white text-xs md:text-sm font-medium w-[5.813rem] h-[1.688rem] md:w-32 md:h-10 rounded md:p-2 mt-4 ">
      Top Up
    </button>
    </form>
  );
};

export default DepositForm;
