import React from "react";
import LayoutDashbord from "../LayoutDashboard";
import DepositInner from "./DepositInner";

const Deposit = () => {
    return ( <LayoutDashbord content={<DepositInner/>}/> );
}
 
export default Deposit;