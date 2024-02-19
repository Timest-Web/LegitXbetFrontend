export interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

export const changePassword = async (payload: ChangePasswordPayload) => {
  try {
    const token = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTcwODE5NzE5NCwiZXhwIjoxNzA4MjgzNTk0fQ.5nHSLZqxjydp5gGqSC36t8eFdusazmqTOCwF-7Ydd-c"

    const response = await fetch("https://legitx.ng/auth/change-password", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${token}`
          
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
