import React from "react";
import ProfileUpdate from "./InnerComps/ProfileUpdate";
import LayoutDashboard from "../../Reusables/LayoutDashboard";


const UserProfile = () => {
    return ( <LayoutDashboard content={<ProfileUpdate/>} /> );
}
 
export default UserProfile;