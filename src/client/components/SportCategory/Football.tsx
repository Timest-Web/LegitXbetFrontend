import React from 'react';
import Layout from '../Layout';
import OddsFilter from './components/OddsFilter';
import FilterByTime from './components/FilterByTime';
import PopularDataType from './components/PopularDataType';
import CenterSection from '../components/MainSection/CenterSection';
import LeftSection from '../LandingPage/DesktopLandingPage/LeftSection';
import { LiveBetTable } from '../components/Tables/DesktopTable/LiveBetTable';

const Football = () => {
	return (
		<Layout 
		    leftSection={
				<div className='space-y-5'>
					<PopularDataType />
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

export default Football;
