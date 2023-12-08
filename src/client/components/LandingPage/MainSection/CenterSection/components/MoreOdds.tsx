import RightArrow from "@/src/client/shared/Svg/RightArrow";

export const MoreOdds = () => (
	<div
		className={`flex items-center justify-between text-xs bg-lightAsh w-24 px-3 h-7 rounded-md cursor-pointer`}>
		<p>All</p>
		<div className='flex items-center space-x-1'>
			<p>Odds</p>
			<RightArrow />
		</div>
	</div>
);