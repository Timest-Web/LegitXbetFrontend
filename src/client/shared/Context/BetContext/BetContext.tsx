import React, { createContext, useEffect, useState, useRef } from 'react';
import { ODDS_VALUE } from '../../../components/LandingPage/MainSection/CenterSection/constant/data';

type OddsValuesProps = {
	id: number;
	time: string;
	teamOne: string;
	teamTwo: string;
	odd: number;
	oddType: string;
};

type BetProviderProps = {
	children: React.ReactNode;
};

export type BetContextType = {
	bet: OddsValuesProps[];
	handleDeleteAll: () => void;
	addToBetSlip: (id: number, odd: number) => void;
	handleDelete: (params: { id: number; odd: number }) => void  | boolean;
};
export const BetContext = createContext<BetContextType | undefined>(undefined);
export const BetProvider: React.FC<BetProviderProps> = ({
	children,
}: BetProviderProps) => {
	const initialRender = useRef(true);
	const [bet, setBet] = useState<OddsValuesProps[]>([]);

	useEffect(() => {
		const betFromLocalStorage = JSON.parse(
			localStorage.getItem('bet') || '[]'
		);
		setBet(betFromLocalStorage);
	}, []);

	const addToBetSlip = (id: number, odd: number) => {
		if (id) {
			const selectedOddsValue = ODDS_VALUE.find(
				(obj) =>
					obj.id === id &&
					(obj.winType === odd ||
						obj.drawType === odd ||
						obj.loseType === odd)
			);

			if (selectedOddsValue) {
				const checkSelected = bet.find(
					(obj: OddsValuesProps) => obj.id === id && obj.odd === odd
				);
				if (!checkSelected) {
					const oddType = Object.entries(selectedOddsValue).find(
						([key, value]) => value === odd && key.endsWith('Type')
					);
					if (oddType) {
						setBet([
							...bet,
							{
								id: selectedOddsValue.id,
								time: selectedOddsValue.time,
								teamOne: selectedOddsValue.teamOne,
								teamTwo: selectedOddsValue.teamTwo,
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
