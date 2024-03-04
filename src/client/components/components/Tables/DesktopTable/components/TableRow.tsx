import React from "react";
import Link from "next/link";
import { Chip, Tooltip } from "@heathmont/moon-core-tw";
import ScoreView from "./ScoreView";
import Time from "@/src/client/shared/Svg/Time";
import Ranking from "@/src/client/shared/Svg/Ranking";
import { MoreOdds } from "./MoreOdds";
import { TableProps } from "../../constant/data";
import { OddsButtons } from "@/src/client/shared/Button/OddsButton/OddsButtons";
import { truncateText } from "@/src/client/shared/Utils/TruncateText";

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
  oddOne,
  oddTwo,
  oddThree,
  sport,
  marketId,
  marketName,
  league,
}: TableProps) => {
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
    drawName,
    oddOne,
    oddTwo,
    oddThree,
    sport,
    marketId,
    marketName,
  };

  const href = `/sport/football/${
    league?.split(":")[1]
  }/${teamOne}-vs-${teamTwo}/${id}`;

  return (
    <div className="flex bg-darkAsh w-full rounded-b-xl">
      <Link
        href={href}
      >
        <div className="flex flex-col items-center justify-center border-r border-r-gray-800 border-b border-b-gray-800 w-20 h-12 text-[10px] space-x-1">
          <div className="flex items-center justify-center space-x-1">
            <Time color="#E6EAEE" />
            <p className="text-white ">{time}</p>
          </div>
          <p className="text-[10px] text-gray-400">{`ID: ${id}`}</p>
        </div>
      </Link>
      <div className="flex items-center justify-between border-b border-b-gray-800 w-full text-gray-200 pr-4 text-xs">
        <Tooltip>
          <Tooltip.Trigger>
            <Chip>
              <Link
                href={href}
                className="flex items-center justify-between text-[10px] w-40 font-bold"
              >
                <p className="text-start w-2/5">{truncatedTeamOne}</p>
                <p className="w-1/5">Vs</p>
                <p className="text-end w-2/5">{truncatedTeamTwo}</p>
              </Link>
            </Chip>
          </Tooltip.Trigger>
          <Tooltip.Content
            className="flex justify-start items-start bg-lightAsh text-white text-[12px] font-bold border border-gray-800 -mt-6 rounded-3xl "
            position="bottom-start"
          >
            {`${teamOne} Vs ${teamTwo}`}
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
        <MoreOdds
          href={href}
        />
      </div>
    </div>
  );
};

export default TableRow;
