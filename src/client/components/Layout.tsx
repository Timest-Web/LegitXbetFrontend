import React from 'react';
import Header from '../shared/Header';

const Layout = ({ children }: { children: React.JSX.Element }) => {
	return (
		<div>
			<Header />
			<div className='mt-[110px]'>
			{children}
			</div>
		</div>
	);
};

export default Layout;
