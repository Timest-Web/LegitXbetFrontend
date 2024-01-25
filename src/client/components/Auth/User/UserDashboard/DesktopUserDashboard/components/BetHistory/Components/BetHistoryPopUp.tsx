import SubmitButton from "../../../shared/SubmitButton";
import { Accordion } from "@heathmont/moon-core-tw";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";

const BetHistoryPopUp = () => {
  return (
    <div className="bg-white rounded-[1.25rem] p-3 text-xs md:text-sm">
      <table className="w-full ">
        <tr className="text-left">
          <th>Betslip ID</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
        <tr className="text-left">
          <td>AJFJ0099</td>
          <td>28/04/2023</td>
          <td>Won</td>
        </tr>
        <tr className="text-left">
          <th>Total odds</th>
          <th>Total Stake</th>
          <th>Return</th>
        </tr>
        <tr className="text-left">
          <td>8.00</td>
          <td>5000</td>
          <td>50000</td>
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
            <table className="w-full">
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
