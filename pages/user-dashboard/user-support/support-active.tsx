import SupportActive from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Support/Components/SupportActive';
import MobileSupportActive from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileSupport/MobileSupportActive';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const SupportAct: NextPage = (props) => (
	<Layout>
    <DeviceDisplay
      desktopViewDisplay={<SupportActive {...props} />}
      mobileViewDisplay={<MobileSupportActive {...props} />}
    />
  </Layout>
);

export default SupportAct;
