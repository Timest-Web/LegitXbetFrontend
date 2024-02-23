import SendToFriend from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Withdrawal/Components/SendToFriend';
import LayoutDashboard from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/shared/LayoutDashboard';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const SendFriend: NextPage = (props) => (
    <DeviceDisplay
      mobileViewDisplay={<SendToFriend {...props} />}
      desktopViewDisplay={<LayoutDashboard content={<SendToFriend {...props} />}/>}
    />
);

export default SendFriend;
