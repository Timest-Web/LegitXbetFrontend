export interface ProfileDetailsPayload {
  name: string;
  address: string;
  dateOfBirth: string;
  bvn: string;
}

export const profileDetails = async (payload: ProfileDetailsPayload) => {
  try {
    const userDetails = localStorage.getItem("access") || "{}";
    const parsedDetails = JSON.parse(userDetails);

    const response = await fetch("https://legitx.ng/auth/profile", {
      method: "PUT",
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
