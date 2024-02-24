import React, {
  useState,
  useEffect,
  ReactElement,
  SetStateAction,
} from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import TableRow from "./TableRow";
import ViewMore from "../../../MainSection/components/ViewMore";
import RightArrow from "@/src/client/shared/Svg/RightArrow";
import MyCarousel from "../../../../../shared/Slider/CustomSlider";
import BetTableLoadingSkeleton from "@/src/client/shared/LoadingSkeleton/BetTableSkeleton";
import { useLink } from "@/src/client/shared/Hooks/useLink";
import { SPORTS_TYPES } from "../../../MainSection/CenterSection/constant/data";
import { footballFixture } from "@/src/helper/apis/services/bookmaking/football/get-football-feature";
import { getNextThreeDates } from "@/src/client/shared/Utils/GetSportsDate";

type LeaguesDataProps = {
  id: number;
  sport: string;
  providerId: string;
  name: string;
  isActive: boolean;
}[];

const BetTable = ({
  href,
  odds,
  icon,
  leagues,
  setSelectedDate,
  setSelectedSport,
  setSelectedLeague,
  contentTitle,
  isLiveTable,
  sportData,
  sportsType,
}: {
  href: string;
  odds: string[];
  sportData: any;
  leagues: LeaguesDataProps;
  sportsType: any;
  icon?: ReactElement;
  contentTitle: string;
  isLiveTable: boolean;
  setSelectedDate: React.Dispatch<SetStateAction<string>>;
  setSelectedLeague: React.Dispatch<SetStateAction<string>>;
  setSelectedSport: React.Dispatch<SetStateAction<string>>;
}) => {
  const router = useRouter();
  const { pathname } = router;
  const nextThreeDates = getNextThreeDates();
  const [collapse, setCollapse] = useState(false);
  const { link, handleClick } = useLink(odds[0]);
  const { link: dateClick, handleClick: dateHandleClick } = useLink(
    nextThreeDates[0]
  );
  const { link: sportClick, handleClick: sportHandleClick } = useLink(
    sportsType[0]
  );
  const { link: leagueClick, handleClick: leagueHandleClick } = useLink(
    leagues && leagues.length > 0 ? leagues[0]?.name : ""
  );
  const { link: leagueIdClick, handleClick: handleLeagueIdClick } = useLink(
    leagues && leagues.length > 0 ? leagues[0]?.providerId : ""
  );

  useEffect(() => {
    setSelectedDate(dateClick);
    setSelectedSport(sportClick);
    setSelectedLeague(leagueClick);
  }, [
    dateClick,
    sportClick,
    leagueClick,
    setSelectedDate,
    setSelectedSport,
    setSelectedLeague,
  ]);

  const filteredSports = SPORTS_TYPES.filter((sport) =>
    sportsType.includes(sport.title)
  );
  const { mutateAsync, data } = useMutation({ mutationFn: footballFixture });
  
  useEffect(() => {
    mutateAsync({ leagueId: leagueIdClick });
  }, [leagueIdClick, mutateAsync]);

  return (
    <div className="w-[720px]">
      <div className="mt-5" id={href}>
        <ViewMore
          icon={icon}
          collapse={collapse}
          isLiveTable={isLiveTable}
          contentTitle={contentTitle}
          setCollapse={setCollapse}
        />
      </div>

      {leagues && leagues.length > 0 ? (
        <div className="w-full rounded-xl mt-2">
          <div className="flex items-center justify-between h-10 rounded-t-lg bg-lightAsh w-full py-3 px-5">
            <div className="flex space-x-2">
              <div className="flex items-center justify-center space-x-1 text-white text-[12px]">
                <p className="text-gray-400">All Matches</p>
                <RightArrow />
              </div>
              <div className="flex items-center space-x-8">
                {nextThreeDates.map((value, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      dateHandleClick(value);
                      setSelectedDate(value);
                    }}
                    className={`${
                      dateClick === value
                        ? "font-bold text-gray-200"
                        : "text-gray-400"
                    } text-[10px] cursor-pointer`}
                  >
                    {index === 0 ? "Today" : index === 1 ? "Tomorrow" : value}
                  </p>
                ))}
              </div>
            </div>

            {collapse && (
              <p className="text-white text-[10px]">Expand to view game odds</p>
            )}
          </div>

          {pathname === "/" && (
            <div className="flex items-center space-x-2 border-t border-t-gray-800 py-2 px-4 bg-lightAsh text-sm">
              {filteredSports.map((value, index) => (
                <div
                  key={index}
                  onClick={() => {
                    sportHandleClick(value.title);
                    setSelectedSport(value.title);
                  }}
                  className={`${
                    value.title === sportClick
                      ? "text-gold bg-gray-700 font-bold"
                      : "text-gray-500"
                  } flex items-center justify-center text-center text-xs hover:bg-gray-700 hover:text-gold cursor-pointer pr-3 pl-1 rounded-lg`}
                >
                  <value.icon height={25} width={25} />
                  {value.title}
                </div>
              ))}
            </div>
          )}

          <div className="w-[720px] py-1 bg-lightAsh border-t border-t-gray-800 px-6">
            <MyCarousel
              customItem={leagues.map((title, index) => (
                <div key={index} className="px-1">
                  <div
                    onClick={() => {
                      leagueHandleClick(title.name);
                      setSelectedLeague(title.name);
                      handleLeagueIdClick(String(title.providerId));
                    }}
                    className={`${
                      title.name === leagueClick
                        ? "text-gold bg-gray-700 font-bold"
                        : "text-gray-500"
                    } flex items-center justify-center w-full text-center text-xs hover:bg-gray-700 hover:text-gold cursor-pointer rounded-lg py-1 px-3`}
                  >
                    {title.name}
                  </div>
                </div>
              ))}
            />
          </div>

          <div className="bg-darkAsh w-full rounded-b-lg">
            <div
              className={`flex items-center space-x-4 text-xs  px-3 ${
                !collapse && "border-b border-b-gray-800"
              } h-10`}
            >
              {odds.map((value: string, index: number) => (
                <div
                  key={index}
                  onClick={() => handleClick(value)}
                  className={`${
                    value === link ? "text-gray-200 font-bold" : "text-gray-600"
                  } p-2 cursor-pointer hover:text-gray-200`}
                >
                  {value}
                </div>
              ))}
            </div>

            {!collapse && (
              <>
                {Array.isArray(data) &&
                  data
                    // .filter((value) => value.date === dateClick)
                    .map((value: any, index: number) => (
                      <TableRow
                        key={index}
                        id={value.fix_id}
                        time={value.time}
                        teamOne={value.home?.name}
                        teamTwo={value.away?.name}
                        home={value.odds[0]?.value}
                        homeName={value.odds[0]?.name}
                        draw={value.odds[1]?.value}
                        drawName={value.odds[1]?.name}
                        away={value.odds[2]?.value}
                        awayName={value.odds[2]?.name}
                        teamOneScore={value.home?.goals}
                        teamTwoScore={value.away?.goals}
                        isLiveTable={isLiveTable}
                      />
                    ))}
              </>
            )}

            {Array.isArray(sportData) &&
              sportData.length > 0 &&
              sportData[0]?.availableMatch.length > 3 && (
                <div className="h-12 w-full py-2 px-3">
                  <button className="w-full h-8 rounded-lg bg-lightAsh text-white text-xs">
                    View All
                  </button>
                </div>
              )}
          </div>
        </div>
      ) : (
        <BetTableLoadingSkeleton />
      )}
    </div>
  );
};

export default BetTable;
