import OddsButton from '@/src/client/shared/Button/OddsButton/OddsButton';

type OddsButtonProps = {
	id: number;
	time: string;
	teamOne: string;
	teamTwo: string;
	winType: number;
	drawType: number;
	loseType: number;
}

export const OddsButtons = ({selectedOddObj}: {selectedOddObj: OddsButtonProps}) => (
	<div className='flex flex-row space-x-2'>
		<OddsButton
			id={selectedOddObj.id}
			onextwo='1'
			selectedOddObj={selectedOddObj}
			onextwoValue={selectedOddObj.winType}
		/>
		<OddsButton
			id={selectedOddObj.id}
			onextwo='X'
			selectedOddObj={selectedOddObj}
			onextwoValue={selectedOddObj.drawType}
		/>
		<OddsButton
			id={selectedOddObj.id}
			onextwo='2'
			selectedOddObj={selectedOddObj}
			onextwoValue={selectedOddObj.loseType}
		/>
	</div>
);
