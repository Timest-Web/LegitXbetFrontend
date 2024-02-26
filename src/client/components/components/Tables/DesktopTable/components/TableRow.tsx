import React from "react";
import Link from "next/link";
import ScoreView from "./ScoreView";
import { MoreOdds } from "./MoreOdds";
import { OddsButtons } from "./OddsButtons";
import Time from "@/src/client/shared/Svg/Time";
import Ranking from "@/src/client/shared/Svg/Ranking";
import { truncateText } from "@/src/client/shared/Utils/TruncateText";
import { Chip, Tooltip } from "@heathmont/moon-core-tw";

const TableRow = ({
  id,
  time,
  teamOne,
  teamTwo,
  home,
  draw,
  away,
  homeName,
  awayName,
  drawName,
  isLiveTable,
  teamOneScore,
  teamTwoScore,
}: {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  home: string;
  draw: string;
  away: string;
  homeName: string;
  drawName: string;
  awayName: string;
  teamOneScore: string;
  teamTwoScore: string;
  isLiveTable?: boolean;
}) => {
  const truncatedTeamOne = truncateText(teamOne, 10);
  const truncatedTeamTwo = truncateText(teamTwo, 8);
  const winInt = parseFloat(home);
  const drawInt = parseFloat(draw);
  const loseInt = parseFloat(away);
  const selectedOddObj = {
    id,
    time,
    teamOne,
    teamTwo,
    home: winInt,
    draw: drawInt,
    away: loseInt,
    homeName,
    awayName,
    drawName
  };

  return (
    <div className="flex bg-darkAsh w-full rounded-b-xl">
      <div className="flex flex-col items-center justify-center border-r border-r-gray-800 border-b border-b-gray-800 w-20 h-12 text-[10px] space-x-1">
        <div className="flex items-center justify-center space-x-1">
          <Time color="#E6EAEE" />
          <p className="text-white ">{time}</p>
        </div>
        <p className="text-[10px] text-gray-400">{`ID: ${id}`}</p>
      </div>
      <div className="flex items-center justify-between border-b border-b-gray-800 w-full text-gray-200 pr-4 text-xs">
        <Tooltip>
          <Tooltip.Trigger>
            <Chip>
              <Link
                href={`/sports/football/40`}
                className="flex items-center justify-between text-[10px] w-40"
              >
                <p className="text-start w-2/5">{truncatedTeamOne}</p>
                <p className="w-1/5">v</p>
                <p className="text-end w-2/5">{truncatedTeamTwo}</p>
              </Link>
            </Chip>
          </Tooltip.Trigger>
          <Tooltip.Content
            className="flex justify-start items-start bg-black text-white text-[12px] font-bold border border-gray-800 -mt-6 rounded-3xl "
            position="bottom-start"
          >
            {`${teamOne} V ${teamTwo}`}
          </Tooltip.Content>
        </Tooltip>
        <div className="px-3">
          <Ranking />
        </div>

        <div className="flex space-x-4">
          {isLiveTable === true && (
            <ScoreView
              teamOneScore={teamOneScore}
              teamTwoScore={teamTwoScore}
            />
          )}
          <OddsButtons selectedOddObj={selectedOddObj} />
        </div>
        <MoreOdds />
      </div>
    </div>
  );
};

export default TableRow;
