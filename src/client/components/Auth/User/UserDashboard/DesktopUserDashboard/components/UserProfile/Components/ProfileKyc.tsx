import React from "react";
import KycComp from "./InnerComps/KycComp";
import LayoutDashboard from "../../../shared/LayoutDashboard";


const ProfileKyc = () => {
    return ( 
        <LayoutDashboard content={<KycComp/>}/>
     );
}
 
export default ProfileKyc;