import Link from 'next/link';
import { useButtonEventClick } from '../Hooks/useButtonEventClick';

export const Button = ({
	text,
	link,
	className,
	onClick,
}: {
	text: string;
	link: string;
	className: string;
	onClick: Function;
}) => {
	const { click, handleClick: onHandleClick } = useButtonEventClick();
	return (
		<Link href={link}>
			<button
				onClick={() => {
					onHandleClick();
					onClick();
				}}
				type='submit'
				className={`transition-all transform ${
					click ? 'scale-75' : ''
				} ${className}`}>
				{text}
			</button>
		</Link>
	);
};
