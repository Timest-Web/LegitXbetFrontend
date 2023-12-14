import OddsButton from '@/src/client/shared/Button/OddsButton/OddsButton';

export const OddsButtons = ({
	id,
	win,
	draw,
	lose,
}: {
	id: number;
	win: number;
	draw: number;
	lose: number;
}) => (
	<div className='flex flex-row space-x-2'>
		<OddsButton
			id={id}
			onextwo='1'
			onextwoValue={win}
		/>
		<OddsButton
			id={id}
			onextwo='X'
			onextwoValue={draw}
		/>
		<OddsButton
			id={id}
			onextwo='2'
			onextwoValue={lose}
		/>
	</div>
);
