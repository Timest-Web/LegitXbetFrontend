import SubmitButton from "../../../shared/SubmitButton";
import { Accordion } from "@heathmont/moon-core-tw";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";
import Link from "next/link";
import React from "react";

interface BetHistoryPopUpProps{
  date: string;
  status:string;
  stake: number;
  returnStake: number;
  team1: string;
  team2: string;
  oddsPlayed: number;
  oddsResult: number;
  scoreTeam1: number;
  scoreTeam2: number;
}


const BetHistoryPopUp: React.FC<BetHistoryPopUpProps> = ({date, status, stake, returnStake, team1, team2, oddsPlayed, scoreTeam1, scoreTeam2}) => {
  return (
    // <div className="bg-white rounded-[1.25rem] p-3 text-xs md:text-sm">
    //   <table className="w-full ">
    //     <tr className="text-left">
    //       <th>Betslip ID</th>
    //       <th>Date</th>
    //       <th>Status</th>
    //     </tr>
    //     <tr className="text-left">
    //       <td>AJFJ0099</td>
    //       <td>28/04/2023</td>
    //       <td>Won</td>
    //     </tr>
    //     <tr className="text-left">
    //       <th>Total odds</th>
    //       <th>Total Stake</th>
    //       <th>Return</th>
    //     </tr>
    //     <tr className="text-left">
    //       <td>8.00</td>
    //       <td>5000</td>
    //       <td>50000</td>
    //     </tr>
    //   </table>

    //   <Accordion>
    //     <Accordion.Item value="item-1">
    //       <Accordion.Header className="moon-open:[&_svg]:rotate-180">
    //         <Accordion.Button>
    //           <span>Games</span>
    //           <ControlsChevronDownSmall className="text-trunks text-moon-24 transition duration-200 moon-open:text-bulma" />
    //         </Accordion.Button>
    //       </Accordion.Header>
    //       <Accordion.Content>
    //         <table className="w-full">
    //           <tr className="text-left text-sm">
    //             <th>Games</th>
    //             <th>Odds</th>
    //           </tr>
    //           <tr>
    //             <td>MAN U - Over 1.5</td>
    //             <td>500</td>
    //           </tr>
    //           <tr>
    //             <td>MAN U - Over 1.5</td>
    //             <td>500</td>
    //           </tr>
    //           <tr>
    //             <td>MAN U - Over 1.5</td>
    //             <td>500</td>
    //           </tr>
    //           <tr>
    //             <td>MAN U - Over 1.5</td>
    //             <td>500</td>
    //           </tr>
    //         </table>
    //       </Accordion.Content>
    //     </Accordion.Item>
    //   </Accordion>
    // </div>

    <Link href='/user-dashboard/bet-history/ticket-details' className="flex space-x-8 md:space-x-20">
      <section className="flex flex-col">
        <p className=" font-bold ">14</p>
        <p>Aug</p>
        <p>{date}</p>
      </section>
      <section className=" w-9/12 space-y-2 ">
        <div className="flex justify-between bg-green-600 px-3 rounded-lg text-white">
          <p>Multiple</p>
          <p>Won</p>
        </div>
        <section className="flex justify-between text-sm">
          <p className="flex flex-col">
            Total Stake(NGN) <span>500.00</span>
          </p>
          <p className="flex flex-col">
            Total Return <span>2500.00</span>
          </p>
        </section>
        <section className="text-sm">
          <p>Lazio vs Bologna</p>
          <p>FC Vizela v Porto</p>
          <p>Atalanta v Juventus</p>
          <p>...(and 7 other matches)</p>
        </section>
      </section>
    </Link>
  );
};

export default BetHistoryPopUp;
