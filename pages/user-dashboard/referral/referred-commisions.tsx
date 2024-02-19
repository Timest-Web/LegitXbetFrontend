import ReferralCommisionsInner from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Referral/ReferralCommisionsInner';
import ReferredUsersInner from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Referral/ReferredUsersInner';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const ReferralCommisions: NextPage = (props) => (
    <DeviceDisplay
      mobileViewDisplay={<ReferralCommisions {...props} />}
      desktopViewDisplay={<ReferralCommisions {...props} />}
    />
);

export default ReferralCommisions;
