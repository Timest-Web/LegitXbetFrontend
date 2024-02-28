// import { useRouter } from "next/router";
// import { useEffect } from "react";

// export const AuthUser = ({
//   children,
// }: {
//   children: React.JSX.Element;
// }) => {
//   const router = useRouter();
//   const isUserDashboardPage = router.pathname.includes("user-dashboard");




//     // if (typeof window !== "undefined") {
//     //   const userDetails = localStorage.getItem("access") || "{}";
//     //   return JSON.parse(userDetails);
//     // }

//   useEffect(() => {
//     if (!user.accessToken && isUserDashboardPage) {
//       const timeout = setTimeout(() => {
//         router.push("/");
//       }, 2000);

//       return () => clearTimeout(timeout);
//     }
//   }, [user, router, isUserDashboardPage]);

//   if (!user.accessToken && isUserDashboardPage) {
//     return <p>Kindly sign up</p>;
//   }

//   return <div>{children}</div>;
// };
