import React, { useState } from 'react';
import { BETDATES } from '../../constant/data';
import RightArrow from '@/src/client/shared/Svg/RightArrow';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import { CustomCarousel } from '@/src/client/shared/Carousel';
import ViewMore from '../../../DesktopLandingPage/MainSection/components/ViewMore';
import {
	LINK_GAME_TYPES,
	ODDS_VALUE,
	SPORTS_TYPES,
} from '../../../DesktopLandingPage/MainSection/CenterSection/constant/data';
import TableRow from './TableRow';

type DateItemProps = {
	value: string;
	isToday: boolean;
};

const TopMatches = () => (
	<div className='flex items-center justify-center space-x-1'>
		<p>All Matches</p>
		<RightArrow />
	</div>
);

const DateItem: React.FC<DateItemProps> = ({ value, isToday }) => (
	<div
		className={`${
			isToday ? 'text-gray-200' : 'text-gray-400'
		} text-[10px] cursor-default`}>
		{value === 'All Matches' ? <TopMatches /> : <p>{value}</p>}
	</div>
);

const renderSportTypes = ({
	sportTypeLink,
	sportTypeHandleClick,
}: {
	sportTypeLink: string;
	sportTypeHandleClick: Function;
}) => {
	return SPORTS_TYPES.map((value, index) => (
		<div
			key={index}
			onClick={() => sportTypeHandleClick(value.title)}
			className={`${
				value.title === sportTypeLink
					? 'text-gold bg-lightAsh'
					: 'text-gray-400'
			} flex items-center justify-center text-center hover:bg-lightAsh hover:text-gold cursor-pointer pr-3 pl-1 rounded-lg`}>
			<value.icon
				height={25}
				width={25}
			/>
			{value.title}
		</div>
	));
};

const renderGameTypes = ({
	link,
	handleClick,
}: {
	link: string;
	handleClick: Function;
}) => {
	return LINK_GAME_TYPES.map((value, index) => (
		<div
			key={index}
			onClick={() => handleClick(value.name)}
			className={`${
				value.name === link ? 'text-gray-200' : 'text-gray-600'
			} p-2 cursor-pointer hover:text-gray-200 text-center`}>
			{value.data ? value.data && <p>{`Other Marker`}</p> : value.name}
		</div>
	));
};

const BetTable = ({
	icon,
	contentTitle,
	isLiveTable,
}: {
	icon?: React.JSX.Element;
	contentTitle: string;
	isLiveTable: boolean;
}) => {
	const [collapse, setCollapse] = useState(false);
	const { link, handleClick } = useLink('3 Way & O/U');
	const { link: sportTypeLink, handleClick: sportTypeHandleClick } =
		useLink('Football');

	return (
		<div>
			<div>
				<ViewMore
					icon={icon}
					contentTitle={contentTitle}
					collapse={collapse}
					setCollapse={setCollapse}
				/>
			</div>

			<div className='w-full mt-2 h-max'>
				<div className='w-full bg-darkAsh'>
					<div className='flex items-center justify-between h-8 bg-lightAsh  w-full py-3 px-5'>
						<div className='flex items-center space-x-4 text-[8px]'>
							{BETDATES.map((value, index) => (
								<DateItem
									key={index}
									value={value}
									isToday={value === 'Today'}
								/>
							))}
						</div>
					</div>

					<div className='flex items-center pt-3 h-10 justify-start w-full px-2 bg-darkAsh text-sm'>
						<CustomCarousel
							className='flex items-start justify-start w-full'
							renderCarouselItems={() =>
								renderSportTypes({
									sportTypeLink,
									sportTypeHandleClick,
								})
							}
						/>
					</div>

					<div className={`flex items-center pt-3 justify-start text-xs  px-1 border-y border-y-lightAsh bg-darkAsh w-full h-8 ${
							collapse && 'rounded-b-xl'
						}`}>
						<CustomCarousel
							className='flex items-start justify-start w-full'
							renderCarouselItems={() =>
								renderGameTypes({ link, handleClick })
							}
						/>
					</div>

					{!collapse && (
						<div className='bg-darkAsh rounded-b-xl'>
							{ODDS_VALUE.map((value, index) => (
								<TableRow
									key={index}
									{...value}
									index={index}
									oddArray={ODDS_VALUE}
									isLiveTable={isLiveTable}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BetTable;
