import React from 'react';
import PlaceBet from '../components/PlaceBet';
import DeleteBet from '../components/DeleteBet';
import useBet from '@/src/client/shared/Context/BetContext/useBet';
import { truncateText } from '@/src/client/shared/Utils/TruncateText';
import NoSelectionYet from '../components/NoSelectionYet';
import DeleteIcon from '@/src/client/shared/Svg/DeleteIcon';
import { BetItemProps } from '../../constant/data';


const BetItem: React.FC<BetItemProps> = ({ index, value, onDelete }) => {
	const truncatedTeamOne = truncateText(value.teamOne, 10);
	const truncatedTeamTwo = truncateText(value.teamTwo, 10);

	return (
		<div className='flex items-start space-x-7 w-full text-black text-xs'>
			<div className='flex items-start space-x-8 w-full'>
				<p className='w-1'>{`${index + 1}.`}</p>
				<div className='flex items-start justify-between space-x-4 text-[10px] w-full'>
					<p>{truncatedTeamOne}</p>
					<p>v</p>
					<div className='flex flex-col'>
						<p>{truncatedTeamTwo}</p>
						<p className='font-bold text-xs'>{`${value.oddType.replace(
							'Type',
							''
						)} : ${value.odd}`}</p>
					</div>
				</div>
			</div>

			<div onClick={() => onDelete(value.id, value.odd)}>
				<DeleteIcon />
			</div>
		</div>
	);
};

const SingleBet: React.FC = () => {
	const { bet, handleDelete } = useBet();
	const handleDeleteBet = (id: number, odd: number) => {
		if (id) {
			handleDelete({ id, odd });
		}
	};

	return (
		<>
			{bet.length > 0 && (
				<div className='flex flex-col items-center justify-center h-full w-full py-3 px-5'>
					<DeleteBet />
					<div className='flex flex-col space-y-6 w-full pb-16 pt-6'>
						{bet.map((value, index) => (
							<BetItem
								key={index}
								index={index}
								value={value}
								onDelete={handleDeleteBet}
							/>
						))}
					</div>
					<PlaceBet />
				</div>
			)}
			{bet.length === 0 && <NoSelectionYet />}
		</>
	);
};

export default SingleBet;
