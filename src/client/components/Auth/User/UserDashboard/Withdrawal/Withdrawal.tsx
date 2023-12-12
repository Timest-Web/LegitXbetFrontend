import React from "react";
import LayoutDashboard from "../LayoutDashboard";
import WithdrawalInner from "./WithdrawalInner";

const Withdrawal = () => {
    return ( <LayoutDashboard content={<WithdrawalInner/>}/> );
}
 
export default Withdrawal;