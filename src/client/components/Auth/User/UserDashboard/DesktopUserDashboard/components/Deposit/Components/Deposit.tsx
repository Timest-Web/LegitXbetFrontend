import React from "react";
import DepositInner from "./DepositInner";
import LayoutDashboard from "../../../shared/LayoutDashboard";

const Deposit = () => {
    return ( <LayoutDashboard content={<DepositInner/>}/> );
}
 
export default Deposit;