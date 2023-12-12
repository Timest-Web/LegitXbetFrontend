import React from "react";
import LayoutDashbord from "../LayoutDashboard";
import MultiFactorInner from "./InnerComps/MultiFactorInner";

const MultiFactor = () => {
    return ( <LayoutDashbord content={<MultiFactorInner/>}/> );
}
 
export default MultiFactor;