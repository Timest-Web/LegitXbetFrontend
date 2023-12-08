import React, { useState, ReactElement } from 'react';
import AddSquare from '@/src/client/shared/Svg/AddSquare';
import MinusSqure from '@/src/client/shared/Svg/MinusSqure';

type ViewMoreProps = {
      icon?: ReactElement;
      contentTitle: string;
      collapse: boolean;
      setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewMore = ({ icon, contentTitle, collapse, setCollapse }: ViewMoreProps) => {

	return (
		<div className='flex items-center justify-between px-4 text-gray-800 font-bold'>
			<div className='flex space-x-1'>
				{icon && icon}
				<p>{contentTitle}</p>
			</div>
			<div className='flex space-x-1'>
				{collapse ? (
					<>
						<AddSquare />
						<p
							onClick={() => setCollapse(!collapse)}
							className='cursor-pointer'>
							Expand
						</p>
					</>
				) : (
					<>
						<MinusSqure />
						<p
							onClick={() => setCollapse(!collapse)}
							className='cursor-pointer'>
							Collapse
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default ViewMore;
