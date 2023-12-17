import React from 'react';

type DrawerProps = {
	className: string;
	openDrawer: boolean;
	DrawerContent: React.JSX.Element;
	setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomerCareModal = ({
	DrawerContent,
	openDrawer,
	setOpenDrawer,
	className,
}: DrawerProps) => {
	return (
		<div>
			{openDrawer && (
				<div>
					<div
						onClick={() => setOpenDrawer(false)}
						className={`z-10000 fixed w-[100%] h-[100%] top-0 left-0 bg-black opacity-75`}></div>
					<div
						className={`flex flex-col items-center py-5 z-10000 fixed bg-white right-0 h-[550px] bottom-0 w-2/6 transform rounded-2xl ${className}`}>
							<div className='flex items-center justify-between w-full px-8'>
								<p className='text-black font-bold'>
									Let X bet Customer support
								</p>
								<button
									className='flex items-center justify-center px-4 py-1 text-center text-xs border border-gray-600 rounded'
									onClick={() => setOpenDrawer(false)}>
									Close
								</button>
							</div>
							{/* CustomerCareModal Content */}
							<div className='w-full'>{DrawerContent}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CustomerCareModal;
