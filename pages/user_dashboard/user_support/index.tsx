import Support from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Support/Components/Support';
import MobileSupportInactive from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileSupport/MobileSupportInactive';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const Supports: NextPage = (props) => (
	<Layout>
    <DeviceDisplay
      desktopViewDisplay={<Support {...props} />}
      mobileViewDisplay={<MobileSupportInactive {...props} />}
    />
  </Layout>
);

export default Supports;
