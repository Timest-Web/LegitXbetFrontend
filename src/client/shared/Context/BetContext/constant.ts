export type OddsValuesProps = {
	id: number;
	time: string;
	odd: number;
	oddType: string;
	teamOne: string;
	teamTwo: string;
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

export type BetContextType = {
	bet: OddsValuesProps[];
	handleDeleteAll: () => void;
	addToBetSlip: (id: number, odd: number, selectedOddObj: SelectedOddsObjectProps) => void;
	handleDelete: (params: { id: number; odd: number }) => void  | boolean;
};

