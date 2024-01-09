import React from "react";
import LayoutDashboard from "../../../shared/LayoutDashboard";
import TransactionActiveInner from "./TransactionActiveInner";

const TransactionActive = () => {
  return <LayoutDashboard content={<TransactionActiveInner />} />;
};

export default TransactionActive;
