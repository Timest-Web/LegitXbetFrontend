import React from 'react'

const AuthDescription = ({link}: {link: string}) => {
  return (
		<p className='text-center text-black text-sm px-8 py-6'>
			{link === 'login' ? (
				<>
					Login to your account, place bet on top games on various{' '}
					<br />
					sporting events around the globe with one of the best odds
					ever
				</>
			) : (
				<>
					Create a free account, place bet on top games on various{' '}
					<br />
					sporting events around the globe with one of the best odds
					ever
				</>
			)}
		</p>
  );
}

export default AuthDescription;
