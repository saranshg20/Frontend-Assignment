export const timeMap = {
    0: "Live Logs", 
    5: "Last 5 minutes",
    15: "Last 15 minutes",
    30: "Last 30 minutes",
    60: "Last 1 hour",
    180: "Last 3 hours",
    360: "Last 6 hours",
};

export const adjustDate = (date) => {

    if(typeof date !== Date)
        date = new Date(date);

    // Format the date and time
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // Months are zero-based
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Pad single digit month, day, hours and minutes with a leading zero
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export function getTimeStamps(duration) {
    // Get the current date and time
    let date = new Date();

    const endDate = adjustDate(date);

    // Subtract the duration from the current minutes
    date.setMinutes(date.getMinutes() - duration);

    const startDate = adjustDate(date);

    // Return the formatted date and time
    return [startDate, endDate];
}

