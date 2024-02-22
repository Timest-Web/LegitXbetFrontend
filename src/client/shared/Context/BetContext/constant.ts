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
	winType?: number | undefined;
	drawType: number;
	loseType?: number | undefined;
}

export type BetContextType = {
	bet: OddsValuesProps[];
	handleDeleteAll: () => void;
	addToBetSlip: (id: number, oddName: string, odd: number, selectedOddObj: SelectedOddsObjectProps) => void;
	handleDelete: (params: { id: number; odd: number }) => void  | boolean;
};

