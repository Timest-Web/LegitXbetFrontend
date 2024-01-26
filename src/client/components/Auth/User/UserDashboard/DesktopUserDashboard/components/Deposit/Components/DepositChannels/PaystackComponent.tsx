// PaystackButton.tsx

import React from "react";
import { PaystackButton as Paystack } from "react-paystack";

interface PaystackButtonProps {
  amount: number;
  email: string;
  onSuccess: (response: any) => void; 
  onClose: () => void;
}

const PaystackButton: React.FC<PaystackButtonProps> = ({
  amount,
  email,
  onSuccess,
  onClose,
}) => {
  const publicKey = "pk_test_f04f09365862d4c3779d52c1d06c2cf3e283c9e1"; 

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: amount * 100, 
    publicKey,
  };

  const handleSuccess = (response: any) => {
    console.log("Payment successful! Transaction ID:", response.reference);
    onSuccess(response);
  };

  const handleClose = () => {
    console.log("Transaction closed.");
    onClose();
  };

  return (
    <Paystack
      {...config}
      onSuccess={handleSuccess}
      onClose={handleClose}
      text="Top Up"
    />
  );
};

export default PaystackButton;
