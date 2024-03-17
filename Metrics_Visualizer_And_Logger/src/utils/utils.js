export const timeMap = {
    0: "Live Logs",
    5: "Last 5 minutes",
    15: "Last 15 minutes",
    30: "Last 30 minutes",
    60: "Last 1 hour",
    180: "Last 3 hours",
    360: "Last 6 hours",
};

const timeWindowsList = [
    60 * 5,
    60 * 15,
    60 * 30,
    60 * 60,
    60 * 60 * 3,
    60 * 60 * 6,
    60 * 60 * 12,
    60 * 60 * 24,
    60 * 60 * 24 * 2,
    60 * 60 * 24 * 7,
    60 * 60 * 24 * 30,
];
const timeWindowToStepSizeMap = {
    [60 * 5]: 1,
    [60 * 15]: 5,
    [60 * 30]: 15,
    [60 * 60]: 30,
    [60 * 60 * 3]: 60,
    [60 * 60 * 6]: 300,
    [60 * 60 * 12]: 600,
    [60 * 60 * 24]: 900,
    [60 * 60 * 24 * 2]: 1800,
    [60 * 60 * 24 * 7]: 3600,
    [60 * 60 * 24 * 30]: 21600,
};
export const getStepSize = (startTs, endTs) => {
    const timeDiff = endTs - startTs;
    const matched =
        timeWindowsList.find((v) => v * 1000 > timeDiff) ||
        timeWindowsList[timeWindowsList.length - 1];
    const stepSize = timeWindowToStepSizeMap[matched];

    return stepSize;
};

export const adjustTime = (timeMilliSeconds) => {
    let date = new Date(timeMilliSeconds);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes}`;
};

export const adjustDate = (date) => {
    if (typeof date !== Date) date = new Date(date);

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

function createTimeStampLabels(start, end) {
    let list = [];
    const stepSize = getStepSize(start, end);
    for (let i = start; i <= end; i += stepSize * 1000) {
        list.push(adjustTime(i));
    }
    return list;
}

export async function preprocessMetricsData(metricsPromise, startTs, endTs) {
    const metrics = await metricsPromise;
    let plotDataList = [];

    try {
        for (let i = 0; i < metrics.length; i++) {
            let data = {
                title: metrics[i].name,
                labels: [],
                datasets: [],
            };

            data.labels = createTimeStampLabels(startTs, endTs);

            let graphData = metrics[i].graphLines;
            for (let j = 0; j < graphData.length; j++) {
                data.datasets.push({
                    id: j,
                    label: graphData[j].name,
                    data: graphData[j].values.map((item, idx) => {
                        return item.value;
                    }),
                });
            }
            plotDataList.push(data);
        }
        return plotDataList;
    } catch (error) {
        console.error(
            "An error occurred while processing metrics data:",
            error
        );
    }
}
