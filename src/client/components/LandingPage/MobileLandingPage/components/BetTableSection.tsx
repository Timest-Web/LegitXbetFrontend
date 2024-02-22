import React from 'react'
// import { LiveBetTable } from '../../../components/Tables/MobileTable/LiveBetTable';
// import { TopBetTable } from '../../../components/Tables/MobileTable/TopBetTable';
import { UpcomingBetTable } from '../../../components/Tables/MobileTable/UpcomingBetTable';
// import { AllTodayBetTable } from '../../../components/Tables/MobileTable/AllMatchesToday';
// import { TodayBetTable } from '../../../components/Tables/MobileTable/TodayGames';
// import { TonightTable } from '../../../components/Tables/MobileTable/TonightMatches';
// import { AmericanFootballBetTable } from '../../../components/Tables/MobileTable/AmericanFootball';

const BetTableSection = () => {
  return (
		<div className='mt-2 -mb-6 space-y-8'>
				{/* <LiveBetTable/> */}
				<UpcomingBetTable/>
				{/* <TopBetTable/>
				<AllTodayBetTable/>
				<TodayBetTable/>
				<TonightTable/>
				<AmericanFootballBetTable/> */}
		</div>
  );
}

export default BetTableSection
