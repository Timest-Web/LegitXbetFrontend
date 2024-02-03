import LiveMatch from "@/src/client/shared/Svg/LiveMatch"
import BetTable from "./components/BetTable"
import { SPORTS_DATA } from "../../LandingPage/constant/data";
import { useState } from "react";
import { getSingleDate } from "@/src/client/shared/Utils/GetSportsDate";
import MatchStar from "@/src/client/shared/Svg/MatchStar";

export const UpcomingBetTable = () => {
    const [selectedDate, setSelectedDate] = useState('');                       
	const [selectedSport, setSelectedSport] = useState('');
	const [selectedLeague, setSelectedLeague] = useState('');
    const extractedUpcomingMatchesSportType = SPORTS_DATA?.UpcomingMatches?.map((value) => value.sportType);
    
	const upcomingSport = SPORTS_DATA.UpcomingMatches?.filter(value => value.sportType === selectedSport);
	const extractedUpcomingSports = upcomingSport[0]?.sportsLeagues.filter(value => value.leagueName === selectedLeague && getSingleDate(value.date) === selectedDate);

    const upcomingData = SPORTS_DATA?.UpcomingMatches?.filter(value => value.sportType === selectedSport);
	let getAvailableUpcomingOdds: string[] = [];
	let getAvailableUpcomingLeagues: string[] = [];
	if (upcomingData && upcomingData.length > 0) {
      getAvailableUpcomingOdds = upcomingData[0].odds;
	  getAvailableUpcomingLeagues = upcomingData[0].leagues;
	}

    return (
        <BetTable
        icon={<MatchStar />}
        contentTitle='Upcoming Matches'
        isLiveTable={false}
        setSelectedDate={setSelectedDate}
        setSelectedSport={setSelectedSport}
        setSelectedLeague={setSelectedLeague}
        odds={getAvailableUpcomingOdds}
        leagues={getAvailableUpcomingLeagues}
        sportData={extractedUpcomingSports}
        sportsType={extractedUpcomingMatchesSportType}
    />
    )
}