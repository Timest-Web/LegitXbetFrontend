import ReferredUsers from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Referral/ReferredUsers';
import MobileRefferedUsers from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileReferral/MobileReferredUsers';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const ReferralUsers: NextPage = (props) => (
    <DeviceDisplay
      mobileViewDisplay={<MobileRefferedUsers {...props} />}
      desktopViewDisplay={<ReferredUsers {...props} />}
    />
);

export default ReferralUsers;
