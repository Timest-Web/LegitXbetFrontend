const TicketDetails = () => {
  return (
    <div className="">
      <p className="p-2 bg-black text-white">Ticket Details</p>
      <section className="bg-white p-2">
        <div className="flex justify-between">
          <p>
            Ticket ID: <span className="font-bold">343921</span>
          </p>
          <p className="text-sm">
            27/12 <span>18:37</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Multiple</p>
          <p>
            Status: <span className="font-bold">Won</span>
          </p>
        </div>
        <div className="mt-3 space-y-1">
          <p>
            Total Odds: <span className="font-bold">35.30</span>
          </p>
          <p>
            Total Stake: <span className="font-bold">500.00</span>
          </p>
          <p>
            Total Return: <span className="font-bold">15,000</span>
          </p>
        </div>
      </section>

      <div className=" md:flex md:justify-between mt-6 md:mt-3 m-auto p-3 bg-white">
        <div>
          <p className="text-sm">14/08</p>
          <p>Lazio v Bologna</p>
          <p>
            FT Score: <span className="font-bold"> 2:1</span>
          </p>
        </div>
        <section>
          <p>
            Pick: <span className="font-bold">Over 0.5@1.14 </span>
          </p>
          <p>
            Market: <span className="font-bold"> Home Team Over/Under</span>
          </p>
          <p>
            Outcome: <span className="font-bold"> Over 0.5</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TicketDetails;
