export interface RegisterUserPayload {
      name: string,
      email: string,
      phoneNumber: string;
      password: string;
      referralCode: string;
}

export const signUp = async (payload: RegisterUserPayload) => {
  try {
    const { referralCode, ...restPayload } = payload;
    const response = await fetch(
      `https://legitx.ng/auth/register?referralCode=${referralCode}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(restPayload),
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

