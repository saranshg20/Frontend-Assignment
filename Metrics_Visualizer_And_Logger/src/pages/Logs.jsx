import React, { useState, useMemo, useEffect } from "react";
import Navbar from "../stories/Navbar";
import { getTimeStamps } from "../utils/utils";
import Logger from "../stories/Logger";
import { MimicLogs } from "../../../Assignment/api-mimic";

function Logs({ duration, setDuration }) {
    const timeStamps = getTimeStamps(duration);
    const [logsList, setLogsList] = useState([]);

    // Memoize the logsList to prevent unnecessary re-renders
    const memoizedLogsList = useMemo(() => logsList, [logsList]);

    useEffect(() => {
        setLogsList([]);
        if (duration === "0") {
            MimicLogs.subscribeToLiveLogs((log) => {
                setLogsList((prevLogs) => [...prevLogs, log]); // Update logsList with the new log at the beginning
            });
        } else {
            const intervalId = setInterval(() => {
                MimicLogs.fetchPreviousLogs({
                    startTs: 0,
                    endTs: Date.now(),
                    limit: 10,
                }).then((newLogs) => {
                    setLogsList((prevLogs) => [...prevLogs, ...newLogs]);
                });
            }, 5000); // Fetch new logs every 5 seconds
            console.log(intervalId);
            return () => clearInterval(intervalId); // Clean up on unmount
        }
    }, [duration]);

    return (
        <div className="flex-col">
            <Navbar
                showMetrics={false}
                duration={duration}
                setDuration={setDuration}
            />
            <div className="bg-blue-50 w-full h-full">
                <hr />
                {/* Pass memoized logsList to Logger component */}
                <Logger timeStamps={timeStamps} logs={memoizedLogsList} />
            </div>
        </div>
    );
}

export default Logs;
