import { useEffect, useState } from "react";
interface User {
  accessToken?: string;
}

export const useGetUser = () => {
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    const userDetailString = localStorage.getItem("access");

    if (userDetailString !== null) {
      const userDetail = JSON.parse(userDetailString);
      setUser(userDetail);
    }
  }, []);

  return { user };
};
