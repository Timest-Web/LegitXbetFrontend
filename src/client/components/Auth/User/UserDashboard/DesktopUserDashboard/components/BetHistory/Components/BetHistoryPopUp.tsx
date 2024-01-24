import SubmitButton from "../../../shared/SubmitButton";
import { Accordion } from "@heathmont/moon-core-tw";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";

const BetHistoryPopUp = () => {
  return (
    <div className="bg-white rounded-[1.25rem] p-6 mt-4">
      {/* <section className="flex justify-between">
        <h3 className="pt-2 space-x-3">
          <span className="font-bold">ID</span> AJFJ0099
        </h3>
        <div>
          <SubmitButton buttonContent="Report" />
        </div>
      </section>
      <hr className="mt-4 mb-4"></hr> */}
      <table className="w-full">
        <tr className="text-left text-sm">
          <th>Betslip ID</th>
          <th>Date Placed</th>
          <th>Total odds</th>
          <th>Amt. Staked</th>
          <th>Pot. winnings</th>
        </tr>
        <tr className="text-left ">
          <td>AJFJ0099</td>
          <td>28/04/2023</td>
          <td>8.00</td>
          <td>5000</td>
          <td>50000</td>
        </tr>
      </table>
      <table className="w-full mt-4">
        <tr className="text-left ">
          <th>Status</th>
          <th>Payout Status</th>
          <th>Payout Date</th>
          <th>Game type</th>
          <th>Game List</th>
        </tr>
        <tr className="text-left text-sm">
          <td>Unsettled</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>Accumulator</td>
          <td>Football</td>
        </tr>
      </table>
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Header className="moon-open:[&_svg]:rotate-180">
            <Accordion.Button>
              <span>Games</span>
              <ControlsChevronDownSmall className="text-trunks text-moon-24 transition duration-200 moon-open:text-bulma" />
            </Accordion.Button>
          </Accordion.Header>
          <Accordion.Content>
            <table className="w-3/4 mt-8">
              <tr className="text-left text-sm">
                <th>Games</th>
                <th>Odds</th>
              </tr>
              <tr>
                <td>MAN U - Over 1.5</td>
                <td>500</td>
              </tr>
              <tr>
                <td>MAN U - Over 1.5</td>
                <td>500</td>
              </tr>
              <tr>
                <td>MAN U - Over 1.5</td>
                <td>500</td>
              </tr>
              <tr>
                <td>MAN U - Over 1.5</td>
                <td>500</td>
              </tr>
            </table>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default BetHistoryPopUp;
