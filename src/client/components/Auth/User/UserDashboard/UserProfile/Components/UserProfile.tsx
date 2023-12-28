import React from "react";
import ProfileUpdate from "./InnerComps/ProfileUpdate";
import LayoutDashboard from "../../Extras/LayoutDashboard";


const UserProfile = () => {
    return (
        <div className=" font-dmsans "><LayoutDashboard content={<ProfileUpdate/>} /></div>  );
}
 
export default UserProfile;