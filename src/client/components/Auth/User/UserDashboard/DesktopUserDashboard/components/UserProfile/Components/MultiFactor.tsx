import React from "react";
import MultiFactorInner from "./InnerComps/MultiFactorInner";
import LayoutDashboard from "../../../shared/LayoutDashboard";

const MultiFactor = () => {
    return ( <LayoutDashboard content={<MultiFactorInner/>}/> );
}
 
export default MultiFactor;