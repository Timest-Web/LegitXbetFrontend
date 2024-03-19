import React, { useEffect } from "react";
import Layout from "./Layout";
import { useRouter } from "next/router";
import { TimeClock } from "@heathmont/moon-icons-tw";
import { useLink } from "@/src/client/shared/Hooks/useLink";
import { Market, Odds } from "../constant/data";
import { LoaderScreen } from "@/src/client/shared/Loader/LoaderScreen";
import OddButton from "@/src/client/shared/Button/OddsButton/GameOddButton";
import MobileNavbar from "@/src/client/shared/MobileNavbar";
import useDeviceType from "@/src/client/shared/Hooks/useDeviceType";
import useGetMatchById from "@/src/helper/apis/services/bookmaking/football/get-match-by-id-api";

const SelectedGame = () => {
  const router = useRouter();
  const { isMobile } = useDeviceType();
  const { link, handleClick } = useLink("All");
  const {
    query: { query: matchId, sport: sport },
  } = router;

  const { data, isLoading } = useGetMatchById(String(matchId));
  const extractedMarkets = (): string[] => {
    const newArray: string[] = [];
    data?.markets?.forEach((value: Market) => {
      newArray.push(value.value);
    });
    newArray.unshift("All");
    return newArray;
  };
  const markets = extractedMarkets();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <LoaderScreen />
      </div>
    );
  }

  return (
    <>
      <Layout>
        <div className="lg:w-[720px] w-full rounded-xl bg-white lg:p-12 p-3 space-y-4">
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

          <div className="flex items-center justify-start flex-wrap lg:space-x-8 space-x-4 font-bold text-xs pt-2 border-y-lightGray">
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

          <div className="space-y-4 w-full">
            {data?.markets
              .filter((value: any) => link === "All" || link === value.value)
              .map((value: any, index: number) => {
                const correctScoreData = {
                  id: data?.id,
                  sport: sport,
                  time: data?.time,
                  marketId: value?.id,
                  marketName: value.value,
                  teamOne: data?.home.name,
                  teamTwo: data?.away.name,
                };

                const extractedOdds = () => {
                  const newArray: any = [];
                  value?.odds?.forEach((val: Odds) => {
                    newArray.push({
                      id: data?.id,
                      onextwo: val.name,
                      oddName: val.name,
                      onextwoValue: val.value,
                      selectedOddObj: { ...correctScoreData, draw: val.value },
                    });
                  });
                  return newArray;
                };
                const odds = extractedOdds();

                return (
                  <div key={index} className="space-y-1">
                    <p className="lg:text-sm text-[10px] lg:hidden block">{`${value.value}:`}</p>
                    <div className="flex flex-row items-start lg:space-x-3 space-x-0 justify-between py-2 lg:px-4 px-2 h-max bg-lightGray rounded-lg">
                      <p className="text-sm w-4/12 lg:block hidden">
                        {value.value}
                      </p>
                      <div className="grid grid-cols-3 gap-3 lg:w-full w-full h-max">
                        {odds &&
                          odds.length > 1 &&
                          odds.map((value: any, index: number) => {
                            return (
                              <OddButton
                                key={index}
                                id={value.id}
                                oddName={value.oddName}
                                onextwo={value.onextwo}
                                onextwoValue={value.onextwoValue}
                                selectedOddObj={value.selectedOddObj}
                              />
                            );
                          })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {isMobile && <MobileNavbar />}
        </div>
      </Layout>
    </>
  );
};

export default SelectedGame;
