import React from "react";
import LayoutDashbord from "../../shared/LayoutDashboard";
import KycComp from "./InnerComps/KycComp";


const ProfileKyc = () => {
    return ( 
        <LayoutDashbord content={<KycComp/>}/>
     );
}
 
export default ProfileKyc;