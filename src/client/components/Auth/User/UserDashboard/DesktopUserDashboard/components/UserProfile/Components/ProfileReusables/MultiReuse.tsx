import Link from "next/link";
import React from "react";

interface MultiReuseProps {
  isInsideUpdatePassword?: boolean;
  isInsideMultiAuth?: boolean; 
  
}

const MultiReuse: React.FC<MultiReuseProps> = ({isInsideUpdatePassword, isInsideMultiAuth}) => {
  return (
    <div className="flex space-x-12 text-sm md:text-base font-bold mb-8">
     <Link href="/user-dashboard/profile/update-password"><h2 className={isInsideUpdatePassword ? "opacity-100" : "opacity-50 hover:opacity-100 cursor-pointer"}>Change password</h2></Link> 
    <Link href="/user-dashboard/profile/multifactor"><h2 className={isInsideMultiAuth ? "opacity-100" : "opacity-50 hover:opacity-100 cursor-pointer"}>Multifactor Auth</h2></Link>  
    </div>
  );
};

export default MultiReuse;
