export interface RequestToSendPayload {
  code: number;
  amount: number;
  phoneNumber: number;
}

export const requestSendToFriend = async (payload: RequestToSendPayload) => {
  const url = `https://legitx.ng/wallet/create-request-to-send-receipient`;

  try {
    const userDetails = localStorage.getItem("access") || "{}";
    const parsedDetails = JSON.parse(userDetails);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${parsedDetails?.accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("There was an error, man:", error);
  }
};
