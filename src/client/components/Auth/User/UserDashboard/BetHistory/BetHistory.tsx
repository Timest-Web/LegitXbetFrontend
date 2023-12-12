import React from "react";
import LayoutDashboard from "../LayoutDashboard";
import BetInnerComp from "./BetInnerComp";

const BetHistory = () => {
    return ( <LayoutDashboard content={<BetInnerComp/>}/> );
}
 
export default BetHistory;