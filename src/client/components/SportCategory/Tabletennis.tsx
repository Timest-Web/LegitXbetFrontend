import React from 'react';
import Layout from '../Layout';
import OddsFilter from './components/OddsFilter';
import FilterByTime from './components/FilterByTime';
import PopularDataType from './components/PopularDataType';
import CenterSection from '../components/MainSection/CenterSection';
import { LiveBetTable as DesktopLiveBetTable } from '../components/Tables/DesktopTable/LiveBetTable';
import { LiveBetTable } from "../components/Tables/MobileTable/LiveBetTable";
import { TABLETENNIS_DATA } from '../LandingPage/DesktopLandingPage/LeftSection/constant/data';
import MobileNavbar from '../../shared/MobileNavbar';

const TableTennis = () => {
	return (
    <Layout
      leftSection={
        <div className="space-y-5">
          <PopularDataType data={TABLETENNIS_DATA} />
          <FilterByTime />
          <OddsFilter />
        </div>
      }
      centerSection={
        <CenterSection>
          <DesktopLiveBetTable />
        </CenterSection>
      }
      mobileComponents={
        <div className="pt-4 -mb-6">
          <LiveBetTable />
          <MobileNavbar />
        </div>
      }
    />
  );
};

export default TableTennis;
