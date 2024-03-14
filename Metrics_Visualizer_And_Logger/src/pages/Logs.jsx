import React, { useState, useMemo, useEffect } from "react";
import Navbar from "../stories/Navbar";
import { getTimeStamps } from "../utils/utils";
import Logger from "../stories/Logger";
import { MimicLogs } from "../../../Assignment/api-mimic";

function Logs({ duration, setDuration, timeStamps }) {
    const [logsList, setLogsList] = useState([]);
    const [shouldFetchLogs, setShouldFetchLogs] = useState(true);

    useEffect(() => {
        let unsubscribe;

        if (duration == "0") {
            unsubscribe = MimicLogs.subscribeToLiveLogs((log) => {
                setLogsList((prevLogs) => [log, ...prevLogs]);
            });
        } else {
            MimicLogs.fetchPreviousLogs({
                startTs: Date.now() - (parseInt(duration)) * 60 * 1000,
                endTs: Date.now(),
                limit: parseInt(duration) * 12,
            }).then((newLogs) => {
                setLogsList([...newLogs].reverse());
                setShouldFetchLogs(false);
            });
        }

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [duration, shouldFetchLogs]);

    useEffect(() => {
        setShouldFetchLogs(true);
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
                {console.log(logsList)}
                <Logger timeStamps={timeStamps} logs={logsList} duration={duration}/>
            </div>
        </div>
    );
}

export default Logs;
