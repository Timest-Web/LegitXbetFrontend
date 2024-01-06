import React from "react";
import LayoutDashboard from "../../../shared/LayoutDashboard";
import KycComp from "./InnerComps/KycComp";



const ProfileKyc = () => {
    return ( 
        <LayoutDashboard content={<KycComp/>}/>
     );
}
 
export default ProfileKyc;