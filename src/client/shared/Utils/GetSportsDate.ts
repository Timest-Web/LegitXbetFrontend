export const getNextThreeDates = () => {
    const today = new Date();
    const todayString = 'Today';
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + 1);
  
    const resultDates = [];
    for (let i = 0; i < 3; i++) {
        const formattedDate = formatDate(nextDate);
        resultDates.push(formattedDate);
        nextDate.setDate(nextDate.getDate() + 1);
    }

    resultDates.unshift(todayString); 
    return resultDates;
}

function formatDate(date: any) {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    return day + ' ' + monthNames[monthIndex];
}
