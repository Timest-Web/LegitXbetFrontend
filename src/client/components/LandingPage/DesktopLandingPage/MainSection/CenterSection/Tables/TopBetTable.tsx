import LiveMatch from "@/src/client/shared/Svg/LiveMatch"
import BetTable from "../components/BetTable"
import { SPORTS_DATA } from "../../../../constant/data";
import { useState } from "react";
import { getSingleDate } from "@/src/client/shared/Utils/GetSportsDate";
import MatchStar from "@/src/client/shared/Svg/MatchStar";

export const TopBetTable = () => {
    const [selectedDate, setSelectedDate] = useState('');                       
	const [selectedSport, setSelectedSport] = useState('');
	const [selectedLeague, setSelectedLeague] = useState('');
    const extractedTopMatchesSportType = SPORTS_DATA?.TopMatches?.map((value) => value.sportType);
    
	const topSports = SPORTS_DATA.TopMatches?.filter(value => value.sportType === selectedSport);
	const extractedTopSports = topSports[0]?.sportsLeagues.filter(value => value.leagueName === selectedLeague && getSingleDate(value.date) === selectedDate);

    const topData = SPORTS_DATA?.TopMatches?.filter(value => value.sportType === selectedSport);
	let getAvailableTopOdds: string[] = [];
	let getAvailableTopLeagues: string[] = [];
	if (topData && topData.length > 0) {
      getAvailableTopOdds = topData[0].odds;
	  getAvailableTopLeagues = topData[0].leagues;
	}

    return (
        <BetTable
        icon={<MatchStar />}
        contentTitle='Upcoming Matches'
        isLiveTable={false}
        setSelectedDate={setSelectedDate}
        setSelectedSport={setSelectedSport}
        setSelectedLeague={setSelectedLeague}
        odds={getAvailableTopOdds}
        leagues={getAvailableTopLeagues}
        sportData={extractedTopSports}
        sportsType={extractedTopMatchesSportType}
    />
    )
}