import React from 'react';
import Layout from '../Layout';
import OddsFilter from './components/OddsFilter';
import FilterByTime from './components/FilterByTime';
import PopularDataType from './components/PopularDataType';
import CenterSection from '../components/MainSection/CenterSection';
import { LiveBetTable } from '../components/Tables/DesktopTable/LiveBetTable';
import { TABLETENNIS_DATA } from '../LandingPage/DesktopLandingPage/LeftSection/constant/data';

const TableTennis = () => {
	return (
		<Layout 
		    leftSection={
				<div className='space-y-5'>
					<PopularDataType data={TABLETENNIS_DATA} />
					<FilterByTime />
					<OddsFilter />
				</div>
			} 
			centerSection={
			    <CenterSection>
					<LiveBetTable />
				</CenterSection>
		    }
		/>
	);
};

export default TableTennis;
