export type OddsValuesProps = {
	id: number;
	time: string;
	odd: number;
	oddType: string;
	teamOne: string;
	teamTwo: string;
};

export type BetContextType = {
	bet: OddsValuesProps[];
	handleDeleteAll: () => void;
	addToBetSlip: (id: number, odd: number) => void;
	handleDelete: (params: { id: number; odd: number }) => void  | boolean;
};

