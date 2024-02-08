import { useInfoContext } from "@/src/client/shared/Context/PersonalDetailsContext/GetUserInfoContext";
import DocumentSvg from "@/src/client/shared/Svg/DocumentSvg";
import NotificationIcon from "@/src/client/shared/Svg/NotificationIcon";
import Link from "next/link";

const OverviewWelcomeTab = () => {
  const userInfo = useInfoContext()!;
  console.log(userInfo)
  return (
    <div className="md:pl-9">
      <div className=" hidden md:flex h-24 md:h-auto w-72 rounded-lg space-x-4 md:bg-none md:bg-opacity-0 md:rounded-none md:p-0  md:flex-row md:space-y-0 text-sm md:space-x-6 mb-5">
        <Link href="/user-dashboard/overview/uploaded-documents">
          <div className="flex space-x-1">
            <div className="bg-white hover:opacity-50 w-[3.5rem] h-[3.5rem] md:w-[2rem] md:h-[2rem] rounded-full flex justify-center items-center">
              <DocumentSvg />
            </div>
            <h3 className=" m-auto md:mt-2">Documents</h3>
          </div>
        </Link>
        <Link href="/user-dashboard/overview/notifications">
          <div className="flex space-x-1">
            <div className="bg-white hover:opacity-50 w-[3.5rem] h-[3.5rem] md:w-[2rem] md:h-[2rem]  rounded-full flex justify-center items-center">
              <NotificationIcon />
            </div>
            <h3 className="m-auto md:mt-2">Notifications</h3>
          </div>
        </Link>
      </div>
      <p className="text-base mb-6 md:mb-0 md:text-xl font-bold md:bg-white md:h-24 md:w-72 md:p-5 drop-shadow-xl">
        Welcome, 
      </p>
    </div>
  );
};

export default OverviewWelcomeTab;
