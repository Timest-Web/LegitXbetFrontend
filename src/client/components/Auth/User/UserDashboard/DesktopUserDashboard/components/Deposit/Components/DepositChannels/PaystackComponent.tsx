
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
  const publicKey = "pk_test_99abab4cad76e6560d0d1c60a45b5aead67a11f2"; 

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
