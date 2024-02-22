import { useState } from "react";
import { getSingleDate } from "../Utils/GetSportsDate";

interface SportsData {
  sportType: string;
  odds: string[];
  leagues: string[];
  sportsLeagues: {
    leagueName: string;
    date: string;
  }[];
}

interface BetTableHook {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  selectedSport: string;
  setSelectedSport: React.Dispatch<React.SetStateAction<string>>;
  selectedLeague: string;
  setSelectedLeague: React.Dispatch<React.SetStateAction<string>>;
  extractedSportType: string[] | undefined;
  odds: string[];
  leagues: string[];
  sportData: {
    leagueName: string;
    date: string;
  }[] | undefined;
}

export const useBetTable = (initialData: SportsData[] | undefined): BetTableHook => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSport, setSelectedSport] = useState<string>("");
  const [selectedLeague, setSelectedLeague] = useState<string>("");
  const extractedSportType = initialData?.map((value) => value.sportType);

  const sportsData = initialData?.filter(
    (value) => value.sportType === selectedSport
  );
  const extractedSports = sportsData?.[0]?.sportsLeagues.filter(
    (value) => value.leagueName === selectedLeague && getSingleDate(value.date) === selectedDate
  );

  const data = initialData?.filter((value) => value.sportType === selectedSport);
  let getAvailableOdds: string[] = [];
  let getAvailableLeagues: string[] = [];
  if (data && data.length > 0) {
    getAvailableOdds = data[0].odds;
    getAvailableLeagues = data[0].leagues;
  }

  return {
    selectedDate,
    setSelectedDate,
    selectedSport,
    setSelectedSport,
    selectedLeague,
    setSelectedLeague,
    extractedSportType,
    odds: getAvailableOdds,
    leagues: getAvailableLeagues,
    sportData: extractedSports,
  };
};
