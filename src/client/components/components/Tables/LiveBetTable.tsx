import LiveMatch from "@/src/client/shared/Svg/LiveMatch"
import BetTable from "./components/BetTable"
import { SPORTS_DATA } from "../../LandingPage/constant/data";
import { useState } from "react";
import { getSingleDate } from "@/src/client/shared/Utils/GetSportsDate";


export const LiveBetTable = () => {
    const [selectedDate, setSelectedDate] = useState('');                       
	const [selectedSport, setSelectedSport] = useState('');
	const [selectedLeague, setSelectedLeague] = useState('');
    const extractedLiveMatchesSportType = SPORTS_DATA?.LiveMatches?.map((value) => value.sportType);
    
	const liveSport = SPORTS_DATA.LiveMatches?.filter(value => value.sportType === selectedSport);
	const extractedLiveSports = liveSport[0]?.sportsLeagues.filter(value => value.leagueName === selectedLeague && getSingleDate(value.date) === selectedDate);


    const liveData = SPORTS_DATA?.LiveMatches?.filter(value => value.sportType === selectedSport);
	let getAvailableLiveOdds: string[] = [];
	let getAvailableLiveLeagues: string[] = [];
	if (liveData && liveData.length > 0) {
	  getAvailableLiveOdds = liveData[0].odds;
	  getAvailableLiveLeagues = liveData[0].leagues;
	}

    return (
        <BetTable
        icon={<LiveMatch />}
        contentTitle='LIVE'
        isLiveTable={true}
        setSelectedDate={setSelectedDate}
        setSelectedSport={setSelectedSport}
        setSelectedLeague={setSelectedLeague}
        odds={getAvailableLiveOdds}
        leagues={getAvailableLiveLeagues}
        sportData={extractedLiveSports}
        sportsType={extractedLiveMatchesSportType}
    />
    )
}