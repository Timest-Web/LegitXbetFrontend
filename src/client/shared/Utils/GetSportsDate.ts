const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const getNextThreeDates = () => {
    const today = new Date();
    const nextDate = new Date(today);

    const resultDates = [];
    for (let i = 0; i < 4; i++) {
        const formattedDate = formatDate(nextDate);
        resultDates.push(formattedDate);
        nextDate.setDate(nextDate.getDate() + 1);
    }
    return resultDates;
    };


function formatDate(date: any) {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    return monthNames[monthIndex] + " " + day;
}


export const getSingleDate = (inputDate: string) => {
	const currentDate = new Date();
	const inputDateObject = new Date(inputDate);

	if (
		inputDateObject.getDate() === currentDate.getDate() &&
		inputDateObject.getMonth() === currentDate.getMonth() &&
		inputDateObject.getFullYear() === currentDate.getFullYear()
	) {
		return "Today";
	} else {
		const day = inputDateObject.getDate();
		const month = monthNames[inputDateObject.getMonth()];
		return `${month} ${day}`;
	}
}

export const getTodayDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    return `${month} ${day}`;
}