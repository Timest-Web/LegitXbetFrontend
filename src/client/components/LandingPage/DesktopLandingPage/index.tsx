import React from 'react';
import Layout from '../../Layout';
import LeftSection from './LeftSection';
import CenterSection from '../../components/MainSection/CenterSection';
import { TopBetTable } from '../../components/Tables/DesktopTable/TopBetTable';
import { LiveBetTable } from '../../components/Tables/DesktopTable/LiveBetTable';
import { UpcomingBetTable } from '../../components/Tables/DesktopTable/UpcomingBetTable';


const DesktopLandingPage = () => {

	return (
		<Layout
		   leftSection={<LeftSection />}
		   centerSection={
			<CenterSection>
				<LiveBetTable/>
				<UpcomingBetTable/>
				<TopBetTable/>
			</CenterSection>
		   }
		/>
	);
};

export default DesktopLandingPage;              
