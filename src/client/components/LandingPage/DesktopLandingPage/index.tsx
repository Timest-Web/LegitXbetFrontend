import React from 'react';
import Layout from '../../Layout';
import LeftSection from './LeftSection';
import CenterSection from '../../components/MainSection/CenterSection';
import { TopBetTable } from '../../components/Tables/DesktopTable/TopBetTable';
import { LiveBetTable } from '../../components/Tables/DesktopTable/LiveBetTable';
import { UpcomingBetTable } from '../../components/Tables/DesktopTable/UpcomingBetTable';
import { AmericanFootballBetTable } from '../../components/Tables/DesktopTable/AmericanFootball';
import { AllTodayBetTable } from '../../components/Tables/DesktopTable/AllMatchesToday';
import { TonightTable } from '../../components/Tables/DesktopTable/TonightMatches';
import { TodayBetTable } from '../../components/Tables/DesktopTable/TodayGames';


const DesktopLandingPage = () => {

	return (
		<Layout
		   leftSection={<LeftSection />}
		   centerSection={
				<CenterSection>
					<LiveBetTable/>
					<UpcomingBetTable/>
					<TopBetTable/>
					<AllTodayBetTable/>
					<TodayBetTable/>
					<TonightTable/>
					<AmericanFootballBetTable/>
				</CenterSection>
		   }
		/>
	);
};

export default DesktopLandingPage;              
