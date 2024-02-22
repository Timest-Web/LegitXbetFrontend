export type OddsValuesProps = {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  odd: number;
  oddName: string;
};

export type BetItemProps = {
  index: number;
  value: OddsValuesProps;
  onDelete: (id: number, odd: number) => void;
};
