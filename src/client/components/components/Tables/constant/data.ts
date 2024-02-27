type Odds = {
  name: string;
  value: string;
  stop: string;
};

type Market = {
  id: string;
  value: string;
  stop: string;
  odds: Odds[];
};

type Team = {
  id: string;
  name: string;
  goals: string;
};

export type Match = {
  id: string;
  status: string;
  date: string;
  formatted_date: string;
  time: string;
  venue: string;
  static_id: string;
  fix_id: string;
  home: Team;
  away: Team;
  events: string;
  ht: {
    score: string;
  };
  markets: Market[];
}[];


export type SportMatchProp = {
    name: string;
    gid:string;
    id: string;
    matches: Match
}[]

export type TableProps = {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  home: string;
  draw: string;
  away: string;
  homeName: string;
  drawName: string;
  awayName: string;
  teamOneScore: string;
  teamTwoScore: string;
  isLiveTable?: boolean;
  oddOne: string;
  oddTwo: string;
  oddThree: string;
  sport: string;
  marketId: string;
  marketName: string;
};

