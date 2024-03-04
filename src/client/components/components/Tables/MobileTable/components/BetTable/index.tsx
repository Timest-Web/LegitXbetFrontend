import React, {
  ReactElement,
  useState,
} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TableRow from "./TableRow";
import ViewMore from "../../../../MainSection/components/ViewMore";
import RightArrow from "@/src/client/shared/Svg/RightArrow";
import { useLink } from "@/src/client/shared/Hooks/useLink";
import { SPORTS_TYPES } from "../../../../MainSection/CenterSection/constant/data";
import { CustomCarousel } from "@/src/client/shared/Carousel";
import { getFeatureDates } from "@/src/client/shared/Utils/GetSportsDate";


const BetTable = ({
  href,
  icon,
  contentTitle,
  isLiveTable,
  sportData,
  viewFeatureMatches,
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
  const sportsType = ["Football", "Basketball"];
  const markets = ["Match Winner","Correct Score"];
  const [collapse, setCollapse] = useState(false);
  const { link, handleClick } = useLink(markets[0]);
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

  // console.log(extractedLeagues())

  const extractLeagues = extractedLeagues();
  const { link: leagueClick, handleClick: leagueHandleClick } = useLink(
    extractLeagues ? extractLeagues[0]?.name : ""
  );

  const extractedMatches = extractLeagues.filter(
    (value: any) => value.name === leagueClick
  )[0]?.matches;

  console.log(link);

  return (
    <div>
      <div id={href}>
        <ViewMore
          icon={icon}
          collapse={collapse}
          isLiveTable={isLiveTable}
          contentTitle={contentTitle}
          setCollapse={setCollapse}
        />
      </div>

      <div className="w-full mt-2 h-max">
        <div className="w-full bg-darkAsh">
          <div className="flex p-2 border-b border-b-lightAsh space-x-2">
            <div className="flex items-center justify-center space-x-1 text-white text-[12px]">
              <p className="text-gray-400 text-[14px]">All Matches</p>
              <RightArrow />
            </div>
            <div className="flex items-center space-x-3">
              {nextTwoDates.map((value, index) => (
                <p
                  key={index}
                  onClick={() => dateHandleClick(value)}
                  className={`${
                    dateClick === value ? "text-gray-200" : "text-gray-400"
                  } text-[14px] cursor-pointer`}
                >
                  {index === 0
                    ? "Today"
                    : index === 1
                    ? `Tomorrow (${nextTwoDates[1]})`
                    : value}
                </p>
              ))}
            </div>
          </div>

          {pathname === "/" && (
            <div className="flex items-center h-10 justify-start w-full px-2 bg-darkAsh text-sm">
              <CustomCarousel
                className="flex items-start justify-start w-full"
                renderCarouselItems={() =>
                  filteredSports.map((value, index) => (
                    <div
                      key={index}
                      onClick={() => sportHandleClick(value.title)}
                      className={`${
                        value.title === sportClick
                          ? "text-gold bg-gray-700"
                          : "text-white"
                      } flex items-center justify-center text-center font-bold hover:bg-gray-700 hover:text-gold cursor-pointer pr-3 pl-1 rounded-lg`}
                    >
                      <value.icon height={25} width={25} />
                      {value.title}
                    </div>
                  ))
                }
              />
            </div>
          )}

          <div className="flex items-center justify-start text-xs px-1 border-y border-y-lightAsh bg-darkAsh w-full h-8">
            <CustomCarousel
              className="flex items-start justify-start w-full"
              renderCarouselItems={() =>
                extractLeagues?.map((value, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      leagueHandleClick(value.name);
                    }}
                    className={`${
                      value.name === leagueClick
                        ? "text-gold bg-gray-700 font-bold"
                        : "text-white"
                    } flex items-center justify-center text-center text-xs hover:bg-gray-700 hover:text-gold cursor-pointer rounded-lg py-1 px-3`}
                  >
                    {value.name.split(":")[1]}
                  </div>
                ))
              }
            />
          </div>

          <div className="flex items-center justify-start text-xs px-1 border-y border-y-lightAsh bg-darkAsh w-full h-8">
            <CustomCarousel
              className="flex items-start justify-start w-full"
              renderCarouselItems={() =>
                markets.map((market: string, index: number) => (
                  <div
                    key={index}
                    onClick={() => handleClick(market)}
                    className={`${
                      market === link ? "text-gold" : "text-white"
                    } p-2 cursor-pointer font-bold hover:text-gold`}
                  >
                    {market === "Match Winner" ? "1x2" : market}
                  </div>
                ))
              }
            />
          </div>

          {!collapse && (
            <div className="bg-darkAsh">
              <div className="border-b border-lightAsh">
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
              </div>

              {Array.isArray(extractedMatches) &&
                extractedMatches.length > 5 && (
                  <Link href={`/sports/football/40`}>
                    <div className="h-12 w-full py-2 px-3">
                      <button className="w-full h-8 rounded-lg bg-gray-700 text-white text-xs">
                        View All
                      </button>
                    </div>
                  </Link>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BetTable;
