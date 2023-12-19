import React from 'react';

const ScoreView = ({
	teamOneScore,
	teamTwoScore,
}: {
	teamOneScore: number;
	teamTwoScore: number;
}) => {
	return (
		<div
			className={`flex items-center justify-between transition-all transform text-xs bg-lightAsh w-20 px-2 h-6 rounded-md`}>
			<p>Score</p>
			<p>{teamOneScore}</p>
			<p>{teamTwoScore}</p>
		</div>
	);
};

export default ScoreView;
