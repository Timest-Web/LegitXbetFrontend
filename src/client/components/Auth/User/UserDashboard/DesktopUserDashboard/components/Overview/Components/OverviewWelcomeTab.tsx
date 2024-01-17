import DocumentSvg from "@/src/client/shared/Svg/DocumentSvg";
import NotificationIcon from "@/src/client/shared/Svg/NotificationIcon";
import Link from "next/link";

const OverviewWelcomeTab = () => {
  return (
    <div className=" pl-4 md:pl-9">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 text-xs md:text-base md:space-x-6 mb-5">
        <Link href="/user-dashboard/overview/uploaded-documents">
          <div className="flex flex-col space-y-2">
            
            <div className="bg-white hover:opacity-50 w-[3.25rem] h-[3.25rem] md:w-[2rem] md:h-[2rem] rounded-full flex justify-center items-center">
              <DocumentSvg />
            </div>
            {/* <h3>Documents</h3> */}
          </div>
        </Link>
        <Link href="/user-dashboard/overview/notifications">
          <div className="flex flex-col space-y-2">
            
            <div className="bg-white hover:opacity-50 w-[3.25rem] h-[3.25rem] md:w-[2rem] md:h-[2rem]  rounded-full flex justify-center items-center">
              <NotificationIcon />
            </div>
            <h3 className="hidden hover:block">Notifications</h3>
          </div>
        </Link>
      </div>
      <p className="hidden md:block text-sm md:text-xl font-bold md:bg-white md:h-24 md:w-72 md:p-5 drop-shadow-xl">
        Welcome, Johnson
      </p>
    </div>
  );
};

export default OverviewWelcomeTab;
