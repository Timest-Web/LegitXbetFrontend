import Padlock from "@/src/client/shared/Svg/Padlock";
import Link from "next/link";



interface ProfileVeriReuseProps {
  isInsidePersonalDetails?: boolean;
  isInsideKycComp?: boolean; 
  isInsideSecurityComp?: boolean;
}


const ProfileVeriReuse : React.FC<ProfileVeriReuseProps> = ({ isInsideKycComp, isInsideSecurityComp, isInsidePersonalDetails }) =>{
  
  
  return (
    <div className="flex text-xs md:text-sm space-x-1 md:space-x-6 font-bold md:pl-6 mt-6 font-dmsans [&>*:hover]:rounded-2xl [&>*:hover]:opacity-70 ">
      <Link href="/user-dashboard/profile">
        <h3 className={isInsidePersonalDetails ? "rounded-2xl bg-black text-white px-2" :"bg-white px-2 rounded-2xl cursor-pointer"}>Personal Details</h3>
      </Link>
     <Link href="/user-dashboard/profile/update-password"> <div className="flex space-x-3">
        {/* <Padlock /> */}
        <h3 className={ isInsideSecurityComp? "rounded-2xl bg-black text-white px-2" :"bg-white px-2 rounded-2xl cursor-pointer"}>Security & Safety</h3>
      </div></Link>
      <Link href="/user-dashboard/profile/profile-kyc">
        <h3 className={isInsideKycComp ? "rounded-2xl bg-black text-white px-2" :"bg-white px-2 rounded-2xl cursor-pointer"}>Profile Verification</h3>
      </Link>
    </div>
  );
};

export default ProfileVeriReuse;
