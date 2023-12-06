import Link from 'next/link';
import { useButtonEventClick } from '../Hooks/useButtonEventClick';

type ActionButtonProps = {
	text: string;
	className: string;
};

const ActualButton = ({ text, className }: ActionButtonProps) => {
	const { click, handleClick } = useButtonEventClick();
	return (
		<button
			onClick={handleClick}
			type='submit'
			className={`transition-all transform ${
				click ? 'scale-75' : ''
			} ${className}`}>
			{text}
		</button>
	);
};

export const Button = ({
	text,
	link,
	className,
}: {
	text: string;
	link: string;
	className: string;
}) => {
	return (
		<Link href={link}>
			<ActualButton
				text={text}
				className={className}
			/>
		</Link>
	);
};

