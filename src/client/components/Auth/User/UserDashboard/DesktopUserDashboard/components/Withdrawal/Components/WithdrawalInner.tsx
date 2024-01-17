import React, { useState } from "react";
import WithdrawPop from "./WithdrawPop";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import WithdrawalInactiveHeader from "./WithdrawalInactiveTableHeader";
import BalanceCard from "../../../shared/BalanceCard";
import AllBetTable from "../../../shared/InactiveTable";
import Modal from '@/src/client/shared/Modal';

const WithdrawalInner = () => {
	const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
	const headers = WithdrawalInactiveHeader();
	return (
		<div className='flex flex-col space-y-7 '>
			<div className=' flex space-x-4'>
				<BalanceCard
					buttonState={true}
					secondButton={false}
					firstButtonText="Withdraw"
					secondButtonText=""
					balanceButtonAction={handleClick}
				/>
			</div>
			<div>
				<AllBetTable
					title='Transaction History'
					headers={headers}
					noBetsMessage='No transactions recorded'
					placeBetButtonText='Withdraw'
					buttonAction={handleClick}
					buttonLink=""
				/>
			</div>
			<Modal
				openModal={isOpen}
				setOpenModal={setIsOpen}
				className='custom-modal-class'
				modalContent={<WithdrawPop />}
			/>
		</div>
	);
};

export default WithdrawalInner;
