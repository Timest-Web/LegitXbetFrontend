export interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

export const changePassword = async (payload: ChangePasswordPayload) => {
  try {
    const userDetails = localStorage.getItem("access") || "{}";
    const parsedDetails = JSON.parse(userDetails);
    const response = await fetch("https://legitx.ng/auth/change-password", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${parsedDetails?.accessToken}`
          
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
