export type OddsValuesProps = {
  id: number;
  time: string;
  odd: string;
  oddName: string;
  teamOne: string;
  teamTwo: string;
  sport: string;
  marketId: string;
  marketName: string
};

export type SelectedOddsObjectProps = {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  home?: string | undefined;
  draw: string;
  away?: string | undefined;
  sport: string;
  marketId: string;
  marketName: string;
};

export type BetContextType = {
  bet: OddsValuesProps[];
  handleDeleteAll: () => void;
  addToBetSlip: (
    id: number,
    oddName: string,
    odd: string,
    selectedOddObj: SelectedOddsObjectProps
  ) => void;
  handleDelete: (params: { id: number; odd: string }) => void | boolean;
};
