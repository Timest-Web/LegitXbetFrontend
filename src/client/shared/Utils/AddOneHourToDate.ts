export function addOneHourToTime(time: string) {
  const timeParts = time.split(":");
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);
  const dateObj = new Date();
  dateObj.setHours(hours);
  dateObj.setMinutes(minutes);
  dateObj.setHours(dateObj.getHours() + 1);
  const updatedHours = dateObj.getHours();
  const updatedMinutes = dateObj.getMinutes();

  const updatedTime =
    (updatedHours < 10 ? "0" : "") +
    updatedHours +
    ":" +
    (updatedMinutes < 10 ? "0" : "") +
    updatedMinutes;
  return updatedTime;
}

