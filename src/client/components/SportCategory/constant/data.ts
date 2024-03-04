export const LINK_GAME_TYPES = [
  "Home",
  "Football",
  "Basketball",
  "Table Tennis",
  "Baseball",
  "Rugby",
  "Ice Hockey",
  "Volleyball",
  "Darts",
  "Handball",
];


export interface Market {
  value: string;
}

export interface Odds {
  name: string;
  value: string;
}
[];

export type MatchWinProps = {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  homeName: string;
  drawName: string;
  awayName: string;
  home: number;
  draw: number;
  away: number;
  oddOne: string;
  oddTwo: string;
  oddThree: string;
  sport: string;
  marketId: string;
  marketName: string;
};

type CorrectScoreProps = {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  draw: number;
  sport: string;
  marketId: string;
  marketName: string;
};

export type ScoreProps = {
  id: string;
  onextwo: string;
  oddName: string;
  onextwoValue: string;
  selectedOddObj: CorrectScoreProps;
}[];


// export const ODDS_DATA = [
//   {
//     title: "1 x 2",
//     odds: [
//       { title: "Home", odd: "3.00" },
//       { title: "Draw", odd: "1.40" },
//       { title: "Away", odd: "2.23" },
//     ],
//   },
//   {
//     title: "Over/Under",
//     odds: [
//       { title: "Over 0.5", odd: "3.00" },
//       { title: "Draw", odd: "1.40" },
//       { title: "Away", odd: "2.23" },
//     ],
//   },
// ];



// export const GAME_ODDS = [
//   {
//     id: 170,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "Over/Under",
//     winOdd: "Home",
//     home: 3.0,
//     drawOdd: "Draw",
//     draw: 1.4,
//     loseOdd: "Away",
//     away: 2.23,
//   },
//   {
//     id: 171,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "Over/Under",
//     winOdd: "Over 0.5",
//     home: 3.0,
//     drawOdd: "Under 0.5",
//     draw: 1.5,
//   },
//   {
//     id: 172,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "Over/Under",
//     winOdd: "Over 1",
//     home: 5.0,
//     drawOdd: "Under 1",
//     draw: 1.8,
//   },
//   {
//     id: 173,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "1st Goal",
//     winOdd: "Home",
//     home: 7.0,
//     drawOdd: "None",
//     draw: 1.4,
//     loseOdd: "Away",
//     away: 2.23,
//   },
//   {
//     id: 174,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "Handicapped 0:1",
//     winOdd: "Home(0.1)",
//     home: 3.0,
//     drawOdd: "Draw(0:1)",
//     draw: 1.4,
//     loseOdd: "Away(0:1)",
//     away: 2.23,
//   },
//   {
//     id: 175,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "Handicapped 0:2",
//     winOdd: "Home(0:2)",
//     home: 3.0,
//     drawOdd: "Draw(0:2)",
//     draw: 1.4,
//     loseOdd: "Away(0:2)",
//     away: 2.23,
//   },
//   {
//     id: 176,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "GG/NG",
//     drawOdd: "Yes",
//     draw: 3.0,
//     loseOdd: "No",
//     away: 2.23,
//   },
//   {
//     id: 177,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "1x2",
//     winOdd: "Home",
//     home: 3.0,
//     drawOdd: "Draw",
//     draw: 1.4,
//     loseOdd: "Away",
//     away: 2.23,
//   },
//   {
//     id: 178,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "Handicapped 0:2",
//     winOdd: "Home(0:2)",
//     home: 3.0,
//     drawOdd: "Draw(0:2)",
//     draw: 1.4,
//     loseOdd: "Away(0:2)",
//     away: 2.23,
//   },
//   {
//     id: 179,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "1x2",
//     winOdd: "Home(0:2)",
//     home: 3.0,
//     drawOdd: "Draw(0:2)",
//     draw: 1.4,
//     loseOdd: "Away(0:2)",
//     away: 2.23,
//   },
//   {
//     id: 180,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "1x2",
//     winOdd: "Home(0:2)",
//     home: 3.0,
//     drawOdd: "Draw(0:2)",
//     draw: 1.4,
//     loseOdd: "Away(0:2)",
//     away: 2.23,
//   },
//   {
//     id: 181,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "1x2",
//     winOdd: "Home(0:2)",
//     home: 3.0,
//     drawOdd: "Draw(0:2)",
//     draw: 1.4,
//     loseOdd: "Away(0:2)",
//     away: 2.23,
//   },
//   {
//     id: 182,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "1x2",
//     winOdd: "Home(0:2)",
//     home: 3.0,
//     drawOdd: "Draw(0:2)",
//     draw: 1.4,
//     loseOdd: "Away(0:2)",
//     away: 2.23,
//   },
//   {
//     id: 183,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "1x2",
//     winOdd: "Home(0:2)",
//     home: 3.0,
//     drawOdd: "Draw(0:2)",
//     draw: 1.4,
//     loseOdd: "Away(0:2)",
//     away: 2.23,
//   },
//   {
//     id: 184,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "1x2",
//     winOdd: "Home(0:2)",
//     home: 3.0,
//     drawOdd: "Draw(0:2)",
//     draw: 1.4,
//     loseOdd: "Away(0:2)",
//     away: 2.23,
//   },
//   {
//     id: 185,
//     time: "00:23",
//     teamOne: "Cape Verde",
//     teamTwo: "Senegal",
//     title: "1x2",
//     winOdd: "Home(0:2)",
//     home: 3.0,
//     drawOdd: "Draw(0:2)",
//     draw: 1.4,
//     loseOdd: "Away(0:2)",
//     away: 2.23,
//   },
// ];
