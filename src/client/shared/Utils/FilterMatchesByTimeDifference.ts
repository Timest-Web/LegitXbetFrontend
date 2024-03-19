export const filterMatchesByTimeDifference = (matches: any, hourDifference: string) => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  return matches?.filter((match: any) => {
    const matchHour = parseInt(match.time.split(":")[0]);
    const matchMinute = parseInt(match.time.split(":")[1]);
    const totalCurrentMinutes = currentHour * 60 + currentMinute;
    const totalMatchMinutes = matchHour * 60 + matchMinute;
    const timeDifferenceInMinutes = totalMatchMinutes - totalCurrentMinutes;
    const timeDifferenceInHours = timeDifferenceInMinutes / 60;
    return timeDifferenceInHours + 1 <= Number(hourDifference) || hourDifference === "All";
  });
};
