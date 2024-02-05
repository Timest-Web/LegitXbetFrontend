import React, { useEffect, useState, useRef } from 'react';
import { BetContext } from './BetContext';
import { OddsValuesProps } from './constant';


type BetProviderProps = {
	children: React.ReactNode;
};

type SelectedOddsObjectProps = {
	id: number;
	time: string;
	teamOne: string;
	teamTwo: string;
	winType: number;
	drawType: number;
	loseType: number;
}


export const BetProvider: React.FC<BetProviderProps> = ({children}: BetProviderProps) => {
	const initialRender = useRef(true);
	const [bet, setBet] = useState<OddsValuesProps[]>([]);


	useEffect(() => {
		const betFromLocalStorage = JSON.parse(
			localStorage.getItem('bet') || '[]'
		);
		setBet(betFromLocalStorage);
	}, []);

	
	const addToBetSlip = (id: number, odd: number, selectedOddObj: SelectedOddsObjectProps) => {
		if (id) {
			// const selectedOddsValue = ODDS_VALUE.find(
			// 	(obj) =>
			// 		obj.id === id &&
			// 		(obj.winType === odd ||
			// 			obj.drawType === odd ||
			// 			obj.loseType === odd)
			// );

			console.log(selectedOddObj);

			if (selectedOddObj) {
				const checkSelected = bet.find(
					(obj: OddsValuesProps) => obj.id === id && obj.odd === odd
				);
				if (!checkSelected) {
					const oddType = Object.entries(selectedOddObj).find(
						([key, value]) => value === odd && key.endsWith('Type')
					);
					if (oddType) {
						setBet([
							...bet,
							{
								id: selectedOddObj.id,
								time: selectedOddObj.time,
								teamOne: selectedOddObj.teamOne,
								teamTwo: selectedOddObj.teamTwo,
								odd: odd,
								oddType: oddType[0],
							},
						]);
					} else {
						console.error(`OddType not found for odd ${odd}`);
					}
				} else {
					console.log('Odd already added');
				}
			} else {
				console.error(`Item with ID ${id} and odd ${odd} not found`);
			}
		}
	};

	const handleDelete = ({ id, odd }: { id: number; odd: number }) => {
		if (id) {
			const updateBetList = bet.filter(
				(betItem) => !(betItem.id === id && betItem.odd === odd)
			);
			setBet([...updateBetList]);
		}
	};

	const handleDeleteAll = () => {
		setBet([]);
	};

	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
			return;
		}
		window.localStorage.setItem('bet', JSON.stringify(bet));
	}, [bet]);

	return (
		<BetContext.Provider
			value={{
				handleDeleteAll,
				addToBetSlip,
				handleDelete,
				bet,
			}}>
			{children}
		</BetContext.Provider>
	);
};
