import Padlock from "@/src/client/shared/Svg/Padlock";
import Link from "next/link";



interface ProfileVeriReuseProps {
  isInsidePersonalDetails?: boolean;
  isInsideKycComp?: boolean; 
  isInsideSecurityComp?: boolean;
}


const ProfileVeriReuse : React.FC<ProfileVeriReuseProps> = ({ isInsideKycComp, isInsideSecurityComp, isInsidePersonalDetails }) =>{
  
  
  return (
    <div className="flex space-x-6 font-bold pl-6 mt-6 font-dmsans">
      <Link href="/user-dashboard/profile/profile-update">
        <h3 className={isInsidePersonalDetails ? "opacity-100" : "opacity-50 hover:opacity-100 cursor-pointer"}>Personal Details</h3>
      </Link>
     <Link href="/user-dashboard/profile/update-password"> <div className="flex space-x-3">
        <Padlock />
        <h3 className={ isInsideSecurityComp? "opacity-100": "opacity-50 hover:opacity-100 cursor-pointer font-dmsans"}>Security & Safety</h3>
      </div></Link>
      <Link href="/user-dashboard/profile/profile-kyc">
        <h3 className={isInsideKycComp ? "opacity-100" : "opacity-50 hover:opacity-100 cursor-pointer"}>Profile Verification</h3>
      </Link>
    </div>
  );
};

export default ProfileVeriReuse;
