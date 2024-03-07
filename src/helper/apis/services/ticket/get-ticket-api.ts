
export const betTicket = async ({ payload }: { payload: string }) => {
  try {
    const response = await fetch(
      `https://legitx.ng/ticket/get-ticket?code=${payload}`,
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
