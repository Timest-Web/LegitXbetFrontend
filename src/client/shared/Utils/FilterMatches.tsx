import { getFeatureDates } from "./GetSportsDate";

export const filterMatches = (data: any, fetchNumbersOfDayMatch: number) => {
  const nextDates = getFeatureDates(fetchNumbersOfDayMatch);

  console.log(nextDates);

  return Array.isArray(data) ? data.map((value: any) => ({
      ...value,
      matches: value.matches.filter((match: any) => {
        for (let i = 0; i < fetchNumbersOfDayMatch; i++) {
          if (match.date === nextDates[i]) {
            return true;
          }
        }
        return false;
      }),
    }))
    .filter((value: any) => value.matches.length > 0) : [];
};
