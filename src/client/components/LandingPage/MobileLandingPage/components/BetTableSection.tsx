import React from 'react'
import { LiveBetTable } from '../../../components/Tables/MobileTable/LiveBetTable';
import { TopBetTable } from '../../../components/Tables/MobileTable/TopBetTable';
import { UpcomingBetTable } from '../../../components/Tables/MobileTable/UpcomingBetTable';

const BetTableSection = () => {
  return (
		<div className='mt-2 -mb-6 space-y-8'>
			<LiveBetTable />
			<TopBetTable/>
			<UpcomingBetTable/>
		</div>
  );
}

export default BetTableSection
