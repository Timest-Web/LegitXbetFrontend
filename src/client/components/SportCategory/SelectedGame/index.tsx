import React from "react";
import { useRouter } from "next/router";
import Layout from "./Layout";
import { TimeClock } from "@heathmont/moon-icons-tw";
import { useLink } from "@/src/client/shared/Hooks/useLink";
import { OddsButtons } from "./components/OddsButtons";
import MobileNavbar from "@/src/client/shared/MobileNavbar";
import useDeviceType from "@/src/client/shared/Hooks/useDeviceType";
import useGetMatchById from "@/src/helper/apis/services/bookmaking/get-match-by-id-api";
import { Loader } from "@heathmont/moon-core-tw";
import OddButton from "@/src/client/shared/Button/OddsButton/GameOddButton";
import { Market, MatchWinProps, Odds, ScoreProps } from "../constant/data";


const SelectedGame = () => {
  const router = useRouter();
  const {
    query: { query: matchId, sport: sport },
  } = router;

  const { data } = useGetMatchById({ matchId: String(matchId) });
  const extractedMarkets = (): string[] => {
    const newArray: string[] = [];
    data?.markets?.forEach((value: Market) => {
      newArray.push(value.value);
    });
    newArray.unshift("All");
    return newArray;
  };

  const markets = extractedMarkets();
  const { link, handleClick } = useLink("All");
  const { isMobile } = useDeviceType();

  const matchWinValue: MatchWinProps = {
    id: data?.id,
    time: data?.time,
    teamOne: data?.home.name,
    teamTwo: data?.away.name,
    sport: String(sport),
    marketName: data?.markets[0]?.value,
    marketId: data?.markets[0]?.id,
    home: data?.markets[0]?.odds[0]?.value,
    homeName: data?.markets[0]?.odds[0]?.name,
    oddOne: "1",
    drawName: data?.markets[0]?.odds[1]?.value,
    draw: data?.markets[0]?.odds[1]?.value,
    oddTwo: "X",
    awayName: data?.markets[0]?.odds[2]?.name,
    away: data?.markets[0]?.odds[2]?.value,
    oddThree: "2",
  };

  const correctScoreData = {
    id: data?.id,
    time: data?.time,
    teamOne: data?.home.name,
    teamTwo: data?.away.name,
    sport: "football",
    marketName: data?.markets[1]?.value,
    marketId: data?.markets[1]?.id,
  };

  const extractedOdds = () => {
    const newArray: any = [];
    data?.markets[1]?.odds?.forEach((value: Odds) => {
      newArray.push({
        id: data?.id,
        onextwo: value.name,
        oddName: value.name,
        onextwoValue: value.value,
        selectedOddObj: { ...correctScoreData, draw: value.value },
      });
    });
    return newArray;
  };

  const odds = extractedOdds();
  const uniqueOdds: ScoreProps = [];
  const seen = new Set<string>();

  for (const obj of odds) {
    const key = `${obj.name}-${obj.value}-${obj.stop}`;
    if (!seen.has(key)) {
      uniqueOdds.push(obj);
      seen.add(key);
    }
  }

  console.log(uniqueOdds);

  return (
    <Layout>
      {data && data.id ? (
        <div className="w-full rounded-xl bg-white lg:p-12 p-3 space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-5">
              <p className="text-black font-bold lg:text-xl text-sm">
                Game Odds
              </p>
              <div className="flex items-center justify-start text-[10px] space-x-1 start-0">
                <TimeClock
                  color="black"
                  className="text-black"
                  height={20}
                  width={20}
                />
                <p className="text-[14px]">{data?.time}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 font-bold">
                <p>{data?.home.name}</p>
              </div>
              <p>Vs</p>
              <div className="flex items-center space-x-2 font-bold">
                <p>{data?.away.name}</p>
              </div>
            </div>
          </div>

          <hr />

          <div className="flex items-center justify-start flex-wrap space-x-8 font-bold text-xs pt-2 border-y-lightGray">
            {markets.map((value, index) => (
              <p
                key={index}
                className={`${
                  link === value ? "text-black" : "text-gray-500"
                } cursor-pointer lg:text-[14px] text-[12px]`}
                onClick={() => handleClick(value)}
              >
                {value}
              </p>
            ))}
          </div>

          {!isMobile && (
            <div className="space-y-4 w-full">
              {data.markets.map((value: any, index: number) => (
                <div key={index}>
                  {index === 0 ? (
                    <div className="flex flex-row items-center space-x-3 justify-between py-2 px-4 bg-lightGray rounded-lg">
                      <p className="text-sm w-4/12">{value.value}</p>
                      <div className="flex space-x-2 lg:w-full w-full">
                        <OddsButtons selectedOddObj={matchWinValue} />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-row items-start space-x-3 justify-between py-2 px-4 h-max bg-lightGray rounded-lg">
                        <p className="text-sm w-4/12">{value.value}</p>
                        <div className="grid grid-cols-3 gap-3 lg:w-full w-full h-max">
                          {odds &&
                            odds.length > 1 &&
                            odds.map((value: any, index: number) => (
                              <OddButton
                                key={index}
                                id={value.id}
                                oddName={value.oddName}
                                onextwo={value.onextwo}
                                onextwoValue={value.onextwoValue}
                                selectedOddObj={value.selectedOddObj}
                              />
                            ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          {isMobile && (
            <div className="space-y-4 w-full lg:mt-0 -mt-5">
              {data.markets.map((value: any, index: number) => (
                <div key={index}>
                  {index === 0 ? (
                    <div key={index} className="space-y-1">
                      <p className="lg:text-sm text-[10px]">{`${value.value}:`}</p>
                      <div className="flex flex-row items-center space-x-3 justify-between py-2 px-4 bg-lightGray">
                        <div className="flex space-x-2 w-full">
                          <OddsButtons selectedOddObj={matchWinValue} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div key={index} className="space-y-1">
                      <p className="lg:text-sm text-[10px]">{`${value.value}:`}</p>
                      <div className="flex flex-row items-center space-x-3 justify-between py-2 px-4 bg-lightGray">
                        <div className="grid grid-cols-3 gap-3 lg:w-full w-full h-max">
                          {odds &&
                            odds.length > 1 &&
                            odds.map((value: any, index: number) => (
                              <OddButton
                                key={index}
                                id={value.id}
                                oddName={value.oddName}
                                onextwo={value.onextwo}
                                onextwoValue={value.onextwoValue}
                                selectedOddObj={value.selectedOddObj}
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {isMobile && <MobileNavbar />}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <Loader size="xs" />
        </div>
      )}
    </Layout>
  );
};

export default SelectedGame;
