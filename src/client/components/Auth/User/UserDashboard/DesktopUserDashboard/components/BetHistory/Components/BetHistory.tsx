import React from "react";
import BetInnerComp from "./BetInnerComp";
import LayoutDashboard from "../../../shared/LayoutDashboard";

const BetHistory = () => {
    return ( <LayoutDashboard content={<BetInnerComp/>}/> );
}
 
export default BetHistory;