import React from "react";
import ProfileUpdate from "./ProfileUpdate";
import LayoutDashbord from "../LayoutDashbord";

const UserProfile = () => {
    return ( <LayoutDashbord content={<ProfileUpdate/>} /> );
}
 
export default UserProfile;