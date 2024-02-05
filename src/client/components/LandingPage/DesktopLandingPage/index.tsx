import React from 'react';
import Layout from '../../Layout';
import LeftSection from './LeftSection';
import CenterSection from '../../components/MainSection/CenterSection';
import { TopBetTable } from '../../components/Tables/TopBetTable';
import { LiveBetTable } from '../../components/Tables/LiveBetTable';
import { UpcomingBetTable } from '../../components/Tables/UpcomingBetTable';


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
