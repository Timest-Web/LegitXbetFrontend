type scoreProps = {
  score: string;
};

type matchProps = {
  id: string;
  name: string;
  goals: string;
};

type oddsProps = {
  name: string;
  value: string;
  stop: string;
};

interface FootballData {
  id: string;
  status: string;
  date: string;
  formatted_date: string;
  time: string;
  venue: string;
  static_id: string;
  fix_id: string;
  home: matchProps;
  away: matchProps;
  events: string;
  ht: scoreProps;
  odds: oddsProps[];
}[]

type LeagueIdPayload = {
    leagueId: string;
}


export const footballFixture: (payload: LeagueIdPayload) => Promise<FootballData> = async (payload) => {
    console.log(payload)
  try {
    const response = await fetch(
      `https://legitx.ng/bookmaking/football/fixtures/${payload.leagueId}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    data.statusCode = response.status;
    return data;
  } catch (error) {
    console.error("An error occurred during the API request:", error);
    return { statusCode: 500, error: "Internal Server Error" };
  }
};
