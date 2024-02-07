import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import AddSquare from '@/src/client/shared/Svg/AddSquare';
import MinusSqure from '@/src/client/shared/Svg/MinusSqure';
import useDeviceType from '@/src/client/shared/Hooks/useDeviceType';
import { url } from 'inspector';

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
	const router = useRouter();
	const urlPathname = router.asPath.split('#')[1]?.split('-')[0];
	const urlPathname2 = router.asPath.split('#')[1]?.split('-')[1];

	const TableTitle = ({tableTitle}:{tableTitle: string}) => (
		<p className='font-bold text-[17px]'>{tableTitle?.charAt(0).toUpperCase() + tableTitle?.slice(1)}</p>
	)

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
				{
					urlPathname ?
					<>
					   {
						urlPathname === undefined ?
							<p className='font-bold text-[17px]'>Live</p>
							: 
							<>
								<TableTitle tableTitle={urlPathname}/>
								<TableTitle tableTitle={urlPathname2}/>
							</> 
					   }
					</>
					:
					<p className='font-bold text-[17px]'>{contentTitle}</p>
				}

				{/* {
					urlPathname === undefined ? 
						<>
							<p className='font-bold text-[17px]'>Live</p>
						: 
							<>
								<TableTitle tableTitle={urlPathname}/>
								<TableTitle tableTitle={urlPathname2}/>
						    </> 
						</>
						: 
						<p>
							{contentTitle}
						</p>
				} */}
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
