import { BalanceContext } from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import { useInfoContext } from "@/src/client/shared/Context/PersonalDetailsContext/GetUserInfoContext";
import { useContext } from "react";

export interface BalancePayload {
    id: number;
    amount: number;
  }
  

export const updateBalance = async (payload: BalancePayload) => {



  const url = `https://legitx.ng/users/${payload.id}`;

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization":
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTcwODI4ODAwMywiZXhwIjoxNzA4Mzc0NDAzfQ.UDHaUokNtx-XJJO9yP2o0aBk1DU5wCbwumOOvWNCXLw",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Balance updated successfully:", responseData);
  } catch (error) {
    console.error("There was a problem updating the balance:", error);
    // Handle error - maybe show an error message to the user
  }
};
