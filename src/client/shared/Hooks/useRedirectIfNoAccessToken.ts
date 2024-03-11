// import { useEffect, useRef } from "react";
// import { useRouter } from "next/router";

// interface User {
//   accessToken?: string | null;
// }

// function useRedirectIfNoAccessToken(
//   user: User,
//   isUserDashboardPage: boolean
// ): void {
//   const router = useRouter();
//   const timeoutRef = useRef<number | null>(null);

//   useEffect(() => {
//     if (!user?.accessToken && isUserDashboardPage) {
//       timeoutRef.current = window.setTimeout(() => {
//         router.push("/");
//       }, 4000);

//       return () => {
//         if (timeoutRef.current) {
//           clearTimeout(timeoutRef.current);
//         }
//       };
//     }
//   }, [user, isUserDashboardPage, router]);
// }

// export default useRedirectIfNoAccessToken;
