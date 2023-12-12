import React from "react";
import LayoutDashboard from "../LayoutDashboard";
import DepositInner from "./DepositInner";

const Deposit = () => {
    return ( <LayoutDashboard content={<DepositInner/>}/> );
}
 
export default Deposit;