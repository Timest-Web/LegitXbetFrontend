import React from "react";
import ProfileUpdate from "./InnerComps/ProfileUpdate";
import LayoutDashbord from "../LayoutDashboard";


const UserProfile = () => {
    return ( <LayoutDashbord content={<ProfileUpdate/>} /> );
}
 
export default UserProfile;