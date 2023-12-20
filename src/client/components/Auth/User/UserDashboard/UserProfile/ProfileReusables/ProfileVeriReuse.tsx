import Padlock from "@/src/client/shared/Svg/Padlock";
import Link from "next/link";


interface ProfileVeriReuseProps {
  isInsideKycComp?: boolean; 
}


const ProfileVeriReuse : React.FC<ProfileVeriReuseProps> = ({ isInsideKycComp }) =>{
  
  return (
    <div className="flex space-x-6 font-bold pl-6 mt-6 font-dm-sans">
      <div className="flex space-x-3">
        <Padlock />
        <h3 className="opacity-50 hover:opacity-100 ">Security & Safety</h3>
      </div>
      <Link href="/user_dashboard/profile/profile_kyc">
        <h3 className={isInsideKycComp ? "opacity-100" : "opacity-50 hover:opacity-100"}>Profile Verification</h3>
      </Link>
    </div>
  );
};

export default ProfileVeriReuse;
