import React, { useState, ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import TableRow from "./TableRow";
import ViewMore from "../../../MainSection/components/ViewMore";
import MyCarousel from "../../../../../shared/Slider/CustomSlider";
import BetTableLoadingSkeleton from "@/src/client/shared/LoadingSkeleton/BetTableSkeleton";
import { useLink } from "@/src/client/shared/Hooks/useLink";
import { SPORTS_TYPES } from "../../../MainSection/CenterSection/constant/data";
import { getFeatureDates } from "@/src/client/shared/Utils/GetSportsDate";

const BetTable = ({
  href,
  icon,
  contentTitle,
  isLiveTable,
  sportData,
  viewFeatureMatches
}: {
  href: string;
  sportData: any;
  icon?: ReactElement;
  contentTitle: string;
  isLiveTable: boolean;
  viewFeatureMatches: number;
}) => {
  const router = useRouter();
  const { pathname } = router;
  const nextTwoDates = getFeatureDates(viewFeatureMatches);
  const sportsType = ['Football', 'Basketball'];
  const [collapse, setCollapse] = useState(false);
  const { link, handleClick } = useLink("Match Winner");
  const { link: dateClick, handleClick: dateHandleClick } = useLink(
    nextTwoDates[0]
  );
  const { link: sportClick, handleClick: sportHandleClick } = useLink(
    sportsType[0]
  );
  const filteredSports = SPORTS_TYPES.filter((sport) =>
    sportsType.includes(sport.title)
  );

  const extractedLeagues = () => {
    return Array.isArray(sportData)
      ? sportData
          .map((value: any) => ({
            ...value,
            matches: value?.matches.filter(
              (match: any) => match?.date === dateClick
            ),
          }))
          .filter((value: any) => value?.matches.length > 0)
      : [];
  };


  const extractLeagues = extractedLeagues();
  const { link: leagueClick, handleClick: leagueHandleClick } = useLink(
    extractLeagues ? extractLeagues[0]?.name : ""
  );
  const extractedMatches = extractLeagues.filter(
    (value: any) => value.name === leagueClick
  )[0]?.matches;


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

      {sportData && sportData.length > 0 ? (
        <div className="w-full rounded-xl mt-2">
          <div className="flex items-center justify-between h-10 rounded-t-lg bg-lightAsh w-full py-3 px-5">
            <div className="flex space-x-6">
              <div className="flex items-center justify-center space-x-1 text-white text-[12px]">
                <p className="text-gray-400 text-[14px] font-bold">
                  All Matches |
                </p>
              </div>
              <div className="flex items-center space-x-8">
                {nextTwoDates.map((value, index) => (
                  <p
                    key={index}
                    onClick={() => dateHandleClick(value)}
                    className={`${
                      dateClick === value ? "text-gray-200" : "text-gray-400"
                    } text-[14px] font-bold cursor-pointer`}
                  >
                    {index === 0 ? "Today" : index === 1 ? `Tomorrow (${nextTwoDates[1]})` : value}
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
              {filteredSports.map((value: any, index: number) => (
                <div
                  key={index}
                  onClick={() => sportHandleClick(value.title)}
                  className={`${
                    value.title === sportClick
                      ? "text-gold bg-gray-700 font-bold"
                      : "text-white"
                  } flex items-center justify-center text-center text-xs font-bold hover:bg-gray-700 hover:text-gold cursor-pointer pr-3 pl-1 rounded-lg`}
                >
                  <value.icon height={25} width={25} />
                  {value.title}
                </div>
              ))}
            </div>
          )}

          <div className="w-[720px] py-1 bg-lightAsh border-t border-t-gray-800 px-6">
            <MyCarousel
              customItem={extractLeagues.map((title: any, index: number) => (
                <div key={index} className="px-1">
                  <div
                    onClick={() => leagueHandleClick(title.name)}
                    className={`${
                      title.name === leagueClick
                        ? "text-gold bg-gray-700 font-bold"
                        : "text-white"
                    } flex items-center justify-center w-full font-bold text-center text-[12px] hover:bg-gray-700 hover:text-gold cursor-pointer rounded-lg py-1 px-3`}
                  >
                    {title.name.split(":")[1]}
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
              {["Match Winner", "Correct Score"].map(
                (market: string, index: number) => (
                  <div
                    key={index}
                    onClick={() => handleClick(market)}
                    className={`${
                      market === link ? "text-gold" : "text-white"
                    } p-2 cursor-pointer hover:text-gold text-[10px] font-bold`}
                  >
                    {market === "Match Winner" ? "1x2" : market}
                  </div>
                )
              )}
            </div>

            {!collapse && (
              <>
                {Array.isArray(extractedMatches) &&
                  extractedMatches
                    .sort((a: any, b: any) => {
                      const timeA = a.time?.split(":").map(Number);
                      const timeB = b.time?.split(":").map(Number);
                      if (timeA[0] !== timeB[0]) {
                        return timeA[0] - timeB[0];
                      }
                      return timeA[1] - timeB[1];
                    })
                    .slice(0, 5)
                    .map((value: any, index: number) => {
                      return (
                        <TableRow
                          key={index}
                          id={value.id}
                          time={value.time}
                          league={leagueClick}
                          teamOne={value.home.name}
                          teamTwo={value.away.name}
                          sport={sportClick}
                          marketName={link}
                          marketId={
                            link === "Match Winner"
                              ? value.markets[0]?.id
                              : value.markets[1]?.id
                          }
                          home={
                            link === "Match Winner"
                              ? value.markets[0]?.odds[0]?.value
                              : value.markets[1]?.odds[0]?.value
                          }
                          oddOne={
                            link === "Match Winner"
                              ? "1"
                              : value.markets[1]?.odds[0]?.name
                          }
                          homeName={
                            link === "Match Winner"
                              ? value.markets[0]?.odds[0]?.name
                              : value.markets[1]?.odds[0]?.name
                          }
                          draw={
                            link === "Match Winner"
                              ? value.markets[0]?.odds[1]?.value
                              : value.markets[1]?.odds[1]?.value
                          }
                          oddTwo={
                            link === "Match Winner"
                              ? "X"
                              : value.markets[1]?.odds[1]?.name
                          }
                          drawName={
                            link === "Match Winner"
                              ? value.markets[0]?.odds[1]?.name
                              : value.markets[1]?.odds[1]?.name
                          }
                          away={
                            link === "Match Winner"
                              ? value.markets[0]?.odds[2]?.value
                              : value.markets[1]?.odds[2]?.value
                          }
                          oddThree={
                            link === "Match Winner"
                              ? "2"
                              : value.markets[1]?.odds[2]?.name
                          }
                          awayName={
                            link === "Match Winner"
                              ? value.markets[0]?.odds[2]?.name
                              : value.markets[1]?.odds[2]?.name
                          }
                          teamOneScore={value.home?.goals}
                          teamTwoScore={value.away?.goals}
                          isLiveTable={isLiveTable}
                        />
                      );
                    })}
              </>
            )}

            {Array.isArray(extractedMatches) &&
              extractedMatches.length >= 5 && (
                <Link href={`/sport/football/40`}>
                  <div className="h-12 w-full py-2 px-3">
                    <button className="w-full h-8 rounded-lg bg-lightAsh text-white text-xs">
                      View All
                    </button>
                  </div>
                </Link>
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
