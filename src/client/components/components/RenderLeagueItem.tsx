import { ControlsChevronRightSmall, MailFlag } from '@heathmont/moon-icons-tw';

type RenderLeagueItemProps = {
	link: string;
	value: string;
	handleClick: Function;
};

const RenderLeagueItem = ({
	link,
	value,
	handleClick,
}: RenderLeagueItemProps) => {
	return (
		<div
			onClick={() => handleClick(value)}
			className={`${
				link === value ? 'text-gray-200' : 'text-gray-400'
			} flex items-center justify-between px-4 h-[53px] w-[243px] hover:text-gray-200 bg-black rounded-r-xl cursor-pointer`}>
			<MailFlag
				height={25}
				width={25}
			/>
			<p className='font-bold text-sm'>{value}</p>
			<ControlsChevronRightSmall
				height={30}
				width={30}
			/>
		</div>
	);
};

export default RenderLeagueItem;
