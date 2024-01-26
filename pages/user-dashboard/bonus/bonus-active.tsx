import BonusActive from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Bonus/Components/BonusActive';
import MobileBonusActive from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileBonus/MobileBonusActive';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const BonusAct: NextPage = (props) => (

    <DeviceDisplay
      desktopViewDisplay={<BonusActive {...props} />}
      mobileViewDisplay={<MobileBonusActive {...props} />}
    />
 
);

export default BonusAct;
