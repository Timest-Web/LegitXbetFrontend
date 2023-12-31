import React, { SetStateAction } from 'react';
import { Drawer } from '@heathmont/moon-core-tw';

type Props = {
	closeDrawer: React.Dispatch<SetStateAction<boolean>>;
	drawerContent: React.JSX.Element;
	isOpen: boolean;
};

const CustomerCareMobile = ({ isOpen, closeDrawer, drawerContent }: Props) => {
	return (
		<>
			<Drawer
				open={isOpen}
				setOpen={closeDrawer}>
				<Drawer.Panel position='top' className='bg-white rounded-b-3xl'>
					<div className='p-3'>{drawerContent}</div>
				</Drawer.Panel>
				<Drawer.Backdrop className='bg-black opacity-75' />
			</Drawer>
		</>
	);
};

export default CustomerCareMobile;
