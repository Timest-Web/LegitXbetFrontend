import React, { useState } from 'react';
import DepositContainer from './DepositModal/DepositContainer';
import { useVisibilityControl } from '@/src/client/shared/Hooks/useVisibilityControl';
import BalanceCard from '../../../shared/BalanceCard';
import AllBetTable from '../../../shared/InactiveTable';
import Modal from '@/src/client/shared/Modal';

const DepositInner = () => {
	const { isOpen, setIsOpen, handleClick } = useVisibilityControl();

	const headers = [
		'No',
		'Reference ID',
		'Date',
		'Status',
		'Amount',
		'Channel',
	];
	return (
		<div className='flex flex-col space-y-7 '>
			<div className=' flex space-x-4'>
				<BalanceCard
					buttonState={true}
					secondButton={false}
					firstButtonText='Deposit'
					secondButtonText=''
					balanceButtonAction={handleClick}
				/>
			</div>
			<div>
				<AllBetTable
					title='Transaction History'
					headers={headers}
					noBetsMessage='No transactions recorded'
					placeBetButtonText='Deposit'
					buttonAction={handleClick}
					buttonLink=''
				/>
			</div>
			<Modal
				openModal={isOpen}
				setOpenModal={setIsOpen}
				className='custom-modal-class'
				modalContent={<DepositContainer />}
			/>
		</div>
	);
};

export default DepositInner;
