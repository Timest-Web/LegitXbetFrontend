import useGetMatchById from "@/src/helper/apis/services/bookmaking/get-match-by-id-api";

const FixtureDetails = ({ matchId }: { matchId: string }) => {
  const { data: fixtureDetails, status, error } = useGetMatchById({ matchId });

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }

  if (!fixtureDetails) {
    return null;
  }

  return (
    <div className="text-sm space-y-1">
      <h2 className="font-bold mb-4">Fixture Details</h2>
      <p>
        Match:
        <span className="font-bold">
          {fixtureDetails.home.name} vs {fixtureDetails.away.name}
        </span>
      </p>
      <p>
        Match ID: <span className="font-bold" >{fixtureDetails.id}</span>
      </p>
      <p>
        Status: <span className="font-bold">{fixtureDetails.status}</span>
      </p>
      <p>
        Date: <span className="font-bold" >{fixtureDetails.formatted_date}</span>
      </p>
      <p>
        Time: <span className="font-bold">{fixtureDetails.time}</span>
      </p>
    </div>
  );
};

export default FixtureDetails;
