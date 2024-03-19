export const extractedMatchesArray = (data: any) => {
  return Array.isArray(data) && data.sort((a: any, b: any) => {
    const timeA = a.time?.split(":").map(Number);
    const timeB = b.time?.split(":").map(Number);
    if (timeA[0] !== timeB[0]) {
      return timeA[0] - timeB[0];
    }
    return timeA[1] - timeB[1];
  });
};
