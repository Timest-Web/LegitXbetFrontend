import { useEffect, useState } from "react";
interface User {
    accessToken?: string;
}


export const useGetUser = (data: string) => {
   const [user, setUser] = useState<User>({});
    
    useEffect(() => {
        const userDetailString = localStorage.getItem(data);

        if (userDetailString !== null) {
            const userDetail = JSON.parse(userDetailString);
            setUser(userDetail);
        }
    }, [data]);

    return { user };
};
