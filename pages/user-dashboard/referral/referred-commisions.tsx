import ReferralCommisionsInner from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Referral/ReferralCommisionsInner";
import ReferredUsersInner from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Referral/ReferredUsersInner";
import ReferralCommision from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Referral/RefferalCommisions";
import MobileRefferalCommision from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileReferral/MobileReferralCommision";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";

const ReferralCommisions: NextPage = (props) => (
  <DeviceDisplay
    mobileViewDisplay={<MobileRefferalCommision {...props} />}
    desktopViewDisplay={<ReferralCommision {...props} />}
  />
);

export default ReferralCommisions;
