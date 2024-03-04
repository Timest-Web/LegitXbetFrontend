import React, { useContext, useEffect, useState } from "react";
import SubmitButton from "../../../shared/SubmitButton";
import { BalanceContext } from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchBankList } from "@/src/helper/apis/services/wallet/getBank.api";
import { verifyBank } from "@/src/helper/apis/services/wallet/getBankAccountDetails.api";
import useUser from "@/src/client/shared/Context/UserContext/useUser";

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
  const [withdrawalField, setWithdrawalField] = useState(false);
  const user = useUser();
  const queryClient = useQueryClient()

  const handleBankCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBankCode(e.target.value);
  };

  interface BankDetail {
    details: {
      account_name: string;
      bank_name: string;
    }
  }

  const userBankDetail: BankDetail  = user.user.bankDetail!;
  
  

  useEffect(() => {
    const fetchBankDetails = async () => {
      const url = `https://legitx.ng/wallet/verify-bank`;
      const payload = {
        accountNumber: accountNumber,
        bankCode: selectedBankCode,
      };
      try {
        if (selectedBankCode && accountNumber) {
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

          const bankDetails = await response.json();
          setCustomerDetails(bankDetails.data.account_name);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBankDetails();
  }, [selectedBankCode, accountNumber]);

  const handleRecipient = async () => {
    const userDetails = localStorage.getItem("access") || "{}";
    const parsedDetails = JSON.parse(userDetails);
    const url = "https://legitx.ng/wallet/create-receipient";
    const headers = {
      "Content-Type": "application/json",
      accept: "*/*",
      Authorization: `Bearer ${parsedDetails?.accessToken}`,
    };
    const data = {
      name: customerDetails,
      accountNumber: accountNumber,
      bankCode: selectedBankCode,
      type: "nuban",
      currency: "NGN",
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });

      const responseData = await res.json();
      queryClient.invalidateQueries('USER_PROFILE' as any);
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleWithdrawal = async () => {
    const userDetails = localStorage.getItem("access") || "{}";
    const parsedDetails = JSON.parse(userDetails);
    const url = "https://legitx.ng/wallet/withdraw";
    const headers = {
      "Content-Type": "application/json",
      accept: "*/*",
      Authorization: `Bearer ${parsedDetails?.accessToken}`,
    };
    const data = {
      amount: parseInt(formData.withdrawalAmount, 10),
      userId: user.user.id,
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });

      const responseData = await res.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
        {user.user.bankDetail == null ? (
          <div>          <section className="flex flex-col md:flex-row md:space-x-16 mt-6 ">
            <div className="flex flex-col space-y-1 ">
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
          </section>
          <p className="mt-6">Recipient: {customerDetails}</p>
            <button onClick={handleRecipient} className="bg-black mt-4 text-sm rounded-md px-4 py-2 text-white">
              Save Recipient
            </button></div>

        ) : (
          <div className="flex flex-col space-y-2"> <p>Withdraw to your saved account</p> <p>Account Name- {userBankDetail.details.account_name }</p> <p>Bank-{userBankDetail.details.bank_name}</p> </div>
        )}

        { user.user.bankDetail !== null ? (
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
              <button
                onClick={handleWithdrawal}
                type="submit"
                className="mt-9 bg-black p-2 rounded-md text-white"
              >
                <p>Withdraw</p>
                {/* <SubmitButton buttonContent="Withdraw" /> */}
              </button>
            </div>
          </section>
        ) : <p></p>}
      </form>
      <p className="font-bold mt-6 md:mt-20">
        NB - Maximum Withdrawal per day is NGN 10m. | Maximum per transaction is
        NGN 1m.
      </p>
    </div>
  );
};

export default WithdrawalForm;
