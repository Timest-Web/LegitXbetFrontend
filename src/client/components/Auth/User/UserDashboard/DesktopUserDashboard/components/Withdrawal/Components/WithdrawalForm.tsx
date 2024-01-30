import React, { useContext, useEffect, useState } from "react";
import SubmitButton from "../../../shared/SubmitButton";
import { BalanceContext } from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import { useQuery } from "@tanstack/react-query";
import { fetchBankList } from "@/src/helper/apis/services/wallet/getBank.api";

interface FormData {
  withdrawalAmount: string;
}
interface Bank {
  name: string;
  id: string;
  code: string;
}

const WithdrawalForm = () => {
  const [formData, setFormData] = useState<FormData>({ withdrawalAmount: "" });
  const [accountNumber, setAccountNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { balance, setBalance } = useContext(BalanceContext)!;
  const [selectedBankCode, setSelectedBankCode] = useState<string>("");
  const [customerDetails, setCustomerDetails] = useState("");

  const handleBankCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBankCode(e.target.value);
  };

  useEffect(() => {
    const fetchBankDetails = async () => {
      try {
        if (selectedBankCode && accountNumber) {
          const response = await fetch(
            `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${selectedBankCode}`,
            {
              headers: {
                Authorization:
                  "Bearer sk_test_6a108bace5d092039f322871d921b3b7362e8634",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const bankDetails = await response.json();
          setCustomerDetails(bankDetails.data.account_name);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBankDetails();
  }, [selectedBankCode, accountNumber]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const amount = parseInt(value, 10);

    if (isNaN(amount) || amount > 1000000) {
      setErrorMessage("Maximum Withdrawal per Transaction is N1M.");
    } else {
      setErrorMessage("");
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const amount = parseInt(formData.withdrawalAmount, 10);

    if (isNaN(amount) || amount > 1000000) {
      setErrorMessage(
        "Minimum withdrawal is N500. Maximum withdrawal per transaction is N1M"
      );
    }
    if (amount > balance) {
      setErrorMessage("Insufficient Funds");
      return null;
    } else {
      setErrorMessage("");
      console.log("Amount Withdrawn:", amount);
      setFormData({ withdrawalAmount: "" });
      setBalance(balance - amount);
      console.log(customerDetails);
    }
  };

  const {
    isLoading,
    isError,
    data: bankList,
    error,
  } = useQuery({
    queryKey: ["bankList"],
    queryFn: fetchBankList,
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h2 className="font-bold mb-4 ">Bank Transfer</h2>
      <hr></hr>
      <form action="submit" onSubmit={handleSubmit} className=" mt-4 md:mt-8 ">
        {/* <section className="flex flex-col md:flex-row md:space-x-32">
          <div>
            <label className="font-bold md:pl-10 ">Bank Name</label>
            <div className="flex space-x-5 mt-4">
              <input className="w-5 h-5" type="radio"></input>
              <Image width={24} height={24} src={gtbLogo} alt="gtb" />
              <h3 className="text-xs pt-1">GTBank</h3>
            </div>
          </div>
          <div className="flex flex-col space-y-3 font-bold">
            <h3>Account Number</h3>
            <h3>****8994</h3>
          </div>
        </section> */}
        <section className="flex flex-col md:flex-row md:space-x-16 mt-6 ">
          <div className="flex flex-col space-y-1 ">
            {/* <div className="flex space-x-5">
               <input className="w-5 h-5" type="radio"></input>
               <label className="font-bold">
                Withdraw to a new bank account
              </label> 
            </div> */}
            <label className="font-bold">Bank account</label>
            <select
              className="p-3 w-44 bg-[#F5F5F5]"
              id="bankCode"
              name="bankCode"
              onChange={handleBankCodeChange}
              value={selectedBankCode}
            >
              {bankList.map((bank: Bank) => (
                <option value={bank.code} key={bank.id}>
                  {bank.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold">Account No.</label>
            <input
              className="bg-[#F5F5F5] w-[19.0625rem] h-11 p-4 text-sm"
              placeholder="e.g  555*******567"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>
          {/* <p>Recipient: {customerDetails}</p> */}
        </section>
                 <p className="mt-6">Recipient: {customerDetails}</p>
        <section className="flex space-x-6 mt-3 md:mt-12">
          <div className="flex flex-col space-y-3">
            <label className="font-bold">Amount</label>
            <input
              type="text"
              name="withdrawalAmount"
              value={formData.withdrawalAmount}
              max="1000000"
              placeholder="Max 1m"
              onChange={handleInputChange}
              className="bg-[#F5F5F5] w-[10.4375rem] h-11 p-4 text-sm"
            ></input>
            {errorMessage && (
              <p className=" text-red-500 my-1 text-sm">{errorMessage}</p>
            )}
          </div>

          <div>
            <div className="mt-9">
              <SubmitButton buttonContent="Withdraw" />
            </div>
          </div>
        </section>
      </form>
      <p className="font-bold mt-6 md:mt-20">
        NB - Maximum Withdrawal per day is NGN 10m. | Maximum per transaction is
        NGN 1m.
      </p>
    </div>
  );
};

export default WithdrawalForm;
