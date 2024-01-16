import React, { SetStateAction } from 'react';
import { Drawer } from '@heathmont/moon-core-tw';
import { ControlsClose } from '@heathmont/moon-icons-tw';

type Props = {
	closeDrawer: React.Dispatch<SetStateAction<boolean>>;
	drawerContent: React.JSX.Element;
	isOpen: boolean;
};

const MobileTopDrawer = ({ isOpen, closeDrawer, drawerContent }: Props) => {
	return (
		<>
			<Drawer
				open={isOpen}
				setOpen={closeDrawer}>
				<Drawer.Panel
					position='top'
					className='bg-white rounded-b-3xl'>
					<div className='flex w-full justify-end mb-3 p-4'>
						<div className='flex items-center justify-center h-8 w-8 rounded-full bg-gray-200'>
							<ControlsClose onClick={() => closeDrawer(false)} />
						</div>
					</div>
					<div className='p-3 -mt-10'>{drawerContent}</div>
				</Drawer.Panel>
				<Drawer.Backdrop className='bg-black opacity-75' />
			</Drawer>
		</>
	);
};

export default MobileTopDrawer;
