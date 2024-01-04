import SubmitButton from "../../../shared/SubmitButton";
import Image from "next/image";
import GTBlogo from "../../../assets/GtbankLogo.png";
import zenithLogo from "../../../assets/ZenithBankLogo.png";

const BankTransfer = () => {
  return (
    <div className="flex space-x-24 px-24 py-12">
      <div className="flex flex-col space-y-7">
        <Image src={GTBlogo} alt="gtb" />
        <p>Dial *737*50*Amount*558#</p>
        <SubmitButton buttonContent="Check result" />
      </div>
      <div className="flex flex-col space-y-8">
        <Image src={zenithLogo} alt="zenith" />
        <ul className="flex flex-col space-y-4">
          <li>1.Dial *966*6*7767#.</li>
          <li>2.Enter your 10 or 11 digits registered mobile number.</li>
          <li>3.Enter the amount you wish to deposit.</li>
          <li>4.Enter your pin.</li>
          <li>5.A notification will be received upon deposit success.</li>
        </ul>
        <SubmitButton buttonContent="Check result" />
      </div>
    </div>
  );
};

export default BankTransfer;
