import Bonus from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Bonus/Components/Bonus';
import MobileBonusInactive from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileBonus/MobileBonusInactive';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const Bonuses: NextPage = (props) => (

    <DeviceDisplay
      desktopViewDisplay={<Bonus {...props} />}
      mobileViewDisplay={<MobileBonusInactive {...props} />}
    />
 
);

export default Bonuses;
