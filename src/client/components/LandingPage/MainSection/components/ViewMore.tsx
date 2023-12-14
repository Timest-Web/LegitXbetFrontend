import React, { ReactElement } from 'react';
import AddSquare from '@/src/client/shared/Svg/AddSquare';
import MinusSqure from '@/src/client/shared/Svg/MinusSqure';

type ViewMoreProps = {
	icon?: ReactElement;
	contentTitle: string;
	collapse: boolean;
	setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
};

const ViewMore = ({
	icon,
	contentTitle,
	collapse,
	setCollapse,
}: ViewMoreProps) => {
	return (
		<div className='flex items-center justify-between px-4 text-gray-800 font-bold'>
			<div className='flex space-x-1'>
				{icon && icon}
				<p>{contentTitle}</p>
			</div>
			<div className='flex space-x-1'>
				{collapse ? (
					<div
						onClick={() => setCollapse(!collapse)}
						className='flex space-x-1 cursor-pointer'>
						<AddSquare />
						<p className='cursor-pointer'>Expand</p>
					</div>
				) : (
					<div
						onClick={() => setCollapse(!collapse)}
						className='flex space-x-1 cursor-pointer'>
						<MinusSqure />
						<p>Collapse</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ViewMore;
