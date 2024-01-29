import React from 'react';
import Layout from '../Layout';
import OddsFilter from './components/OddsFilter';
import FilterByTime from './components/FilterByTime';
import PopularDataType from './components/PopularDataType';

const Football = () => {
	return (
		<Layout>
			<PopularDataType />
			<FilterByTime />
			<OddsFilter />
		</Layout>
	);
};

export default Football;
