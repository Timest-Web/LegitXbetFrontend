import React, { ReactElement } from 'react';
import AddSquare from '@/src/client/shared/Svg/AddSquare';
import MinusSqure from '@/src/client/shared/Svg/MinusSqure';
import useDeviceType from '@/src/client/shared/Hooks/useDeviceType';

type ViewMoreProps = {
	collapse: boolean;
	contentTitle: string;
	icon?: ReactElement;
	isLiveTable: boolean;
	setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
};

const ViewMore = ({
	icon,
	collapse,
	setCollapse,
	contentTitle,
	isLiveTable,
}: ViewMoreProps) => {
	const { isMobile } = useDeviceType();
	return (
		<div
			className={`flex items-center justify-between px-4 text-gray-800 font-bold ${
				isMobile && 'text-xs'
			}`}>
			<div className='flex items-center space-x-1'>
				{isLiveTable === true ? (
					<span className='relative flex'>
						<span className='animate-ping absolute inline-flex h-5 border-4 border-black w-5 rounded-full bg-gray-800 opacity-75'></span>
						<span className='relative inline-flex rounded-full font-bold'>
							{icon && icon}
						</span>
					</span>
				) : (
					<>{icon && icon}</>
				)}
				<p className='font-bold text-[17px]'>{contentTitle}</p>
			</div>

			<div className='flex space-x-1'>
				{collapse ? (
					<div
						onClick={() => setCollapse(!collapse)}
						className='flex items-center space-x-1 cursor-pointer'>
						<AddSquare />
						<p className='cursor-pointer font-bold text-[17px]'>Expand</p>
					</div>
				) : (
					<div
						onClick={() => setCollapse(!collapse)}
						className='flex items-center space-x-1 cursor-pointer'>
						<MinusSqure />
						<p className='font-bold text-[17px]'>Collapse</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ViewMore;
