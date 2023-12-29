import React from "react";
import LayoutDashboard from "../../Extras/LayoutDashboard";
import BetInnerComp from "./BetInnerComp";

const BetHistory = () => {
    return ( <LayoutDashboard content={<BetInnerComp/>}/> );
}
 
export default BetHistory;