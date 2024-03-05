import { useState, useEffect } from "react";

interface Odds {
  name: string;
  value: string;
  stop: string;
}

interface Market {
  id: string;
  value: string;
  stop: string;
  odds: Odds[];
}

interface Team {
  id: string;
  name: string;
  goals: string;
}

interface FixtureDetailsData {
  id: string;
  status: string;
  date: string;
  formatted_date: string;
  time: string;
  venue: string;
  static_id: string;
  fix_id: string;
  home: Team;
  away: Team;
  events: string;
  ht: { score: string };
  markets: Market[];
}

const FixtureDetails = ({ matchId }: { matchId: string }) => {
  const [fixtureDetails, setFixtureDetails] =
    useState<FixtureDetailsData | null>(null);

  useEffect(() => {
    const fetchFixtureDetails = async () => {
      try {
        const response = await fetch(
          `https://legitx.ng/bookmaking/football/matches/${matchId}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          if (data) {
            setFixtureDetails(data);
          } else {
            throw new Error("Empty response received");
          }
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching fixture details:", error);
      }
    };

    fetchFixtureDetails();
  }, [matchId]);

  if (!fixtureDetails) {
    return <p>Loading fixture details...</p>;
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
