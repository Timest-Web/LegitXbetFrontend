import OddsButton from "@/src/client/shared/Button/OddsButton/OddsButton";

export const OddsButtons = ({
	win,
	draw,
	lose,
}: {
	win: number;
	draw: number;
	lose: number;
}) => (
	<div className='flex flex-row space-x-2'>
		<OddsButton
			onextwo='1'
			onextwoValue={win}
		/>
		<OddsButton
			onextwo='X'
			onextwoValue={draw}
		/>
		<OddsButton
			onextwo='2'
			onextwoValue={lose}
		/>
	</div>
);