import {
  SportSoccer,
  SportBasketball,
  SportTableTennis,
  SportBaseball,
  SportRugby,
  SportIceHockey,
  SportBeachVolleyball,
  SportDarts,
  SportHandball,
  SportSnooker,
} from "@heathmont/moon-icons-tw";

export const BETDATES = ["All Matches", "Today", "29 Nov", "30 Nov", "1 Dec"];

export const SPORTS_TYPES = [
  { icon: SportSoccer, title: "Football" },
  { icon: SportBasketball, title: "Basketball" },
  { icon: SportTableTennis, title: "Table Tannis" },
  { icon: SportBaseball, title: "Baseball" },
  { icon: SportRugby, title: "Rugby" },
  { icon: SportIceHockey, title: "Ice Hockey" },
  { icon: SportBeachVolleyball, title: "Volleyball" },
  // { icon: SportDarts, title: 'Darts' },
  // { icon: SportHandball, title: 'Handball' },
];

export const LINK_ODDS_TYPES: { name: string; data?: string[] }[] = [
  { name: "3 Way & O/U" },
  { name: "Over/Under" },
  { name: "Total Goals" },
  { name: "Draw No Bet" },
  { name: "Double chance" },
  { name: "Handicapped" },
  {
    name: "Other Markets",
    data: ["Winner", "Set Winner", "Away O/U", "1X2", "Home O/U"],
  },
];

export const ODDS_VALUE = [
  {
    id: 1,
    time: "00:24",
    teamOne: "Man United FC",
    teamTwo: "Chelsea FC",
    home: 3.0,
    draw: 1.4,
    away: 2.2,
  },
  {
    id: 2,
    time: "00:24",
    teamOne: "RBZigbleg FC",
    teamTwo: "Real Madrid FC",
    home: 6.0,
    draw: 2.0,
    away: 1.23,
  },
  {
    id: 3,
    time: "00:24",
    teamOne: "AC Milan FC",
    teamTwo: "Inter Milan FC",
    home: 3.0,
    draw: 5.0,
    away: 1.23,
  },
  {
    id: 4,
    time: "18:24",
    teamOne: "Porto FC",
    teamTwo: "Depotivo FC",
    home: 1.11,
    draw: 5.4,
    away: 1.23,
  },
  {
    id: 5,
    time: "14:00",
    teamOne: "PSG FC",
    teamTwo: "Arsenal FC",
    home: 2.0,
    draw: 5.7,
    away: 1.23,
  },
];
