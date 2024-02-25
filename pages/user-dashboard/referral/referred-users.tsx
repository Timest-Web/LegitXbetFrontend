import ReferredUsers from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Referral/ReferredUsers';
import ReferredUsersInner from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Referral/ReferredUsersInner';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const ReferralUsers: NextPage = (props) => (
    <DeviceDisplay
      mobileViewDisplay={<ReferredUsers {...props} />}
      desktopViewDisplay={<ReferredUsers {...props} />}
    />
);

export default ReferralUsers;
