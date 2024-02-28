export type AddGameToTicket = {
  sport: string;
  matchId: number;
  marketId: string;
  marketName: string;
  oddName: string;
  odd: number;
};

export const addGame = async (payload: AddGameToTicket) => {
  try {
    const userDetails = localStorage.getItem("access") || "{}";
    const parsedDetails = JSON.parse(userDetails);
    const response = await fetch("https://legitx.ng/ticket/add-game", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${parsedDetails?.accessToken}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    data.statusCode = response.status;
    return data;
  } catch (error) {
    console.error("An error occurred during the API request:", error);
    return { statusCode: 500, error: "Internal Server Error" };
  }
};
