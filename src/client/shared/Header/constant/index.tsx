import Logout from "../../Svg/Logout";
import ReceiptSearch from "../../Svg/ReceiptSearch";
import Repeat from "../../Svg/Repeat";
import User from "../../Svg/User";
import UserTage from "../../Svg/UserTage";

export const LINK_CATEGORY_TYPES = [
    'Sports',
    'Games',
    'Spaceship',
    'Jackpot',
    'Results',
]

export const LINK_GAME_TYPES = [
    'Football',
     'Basketball',
     'Table Tennis',
     'Baseball',
     'Rugby',
     'Ice Hockey',
     'Volleyball',
     'Darts',
     'Handball',
]

export const USER_HEADER_DATA = [
		{
			icon: <Repeat />,
			title: 'NGN26.24',
		},
		{
			icon: <UserTage />,
			title: 'My Account',
			data: [
				{ icon: <User />, title: 'Profile', link: '/user_dashboard' },
				{ icon: <ReceiptSearch />, title: 'Bet History', link: '/bet_history'},
			],
		},
		{
			icon: <Logout />,
			title: 'Deposit',
		},
	];

