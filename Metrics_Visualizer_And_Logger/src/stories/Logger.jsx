import React from "react";
import LogEntry from "./LogEntry";

function Logger({ timeStamps, logs }) {
    return (
        <div className="w-7/8 p-4 flex-col justify-center relative">
            <div className="flex justify-end">
                {timeStamps[0] !== timeStamps[1] ? (
                    <div className="flex text-base text-gray-700 font-semibold p-2 mr-2">
                        <span className="mr-2">{`Showing logs for ${timeStamps[0]}`}</span>
                        <img
                            className="w-4"
                            src="Sidepane/arrow-right.png"
                            alt=""
                        />
                        <span className="ml-2">{`${timeStamps[1]}`}</span>
                    </div>
                ) : (
                    <div className="flex text-base text-gray-700 font-semibold p-2 mr-2">{`Showing Live logs from ${timeStamps[0]}`}</div>
                )}
            </div>
            <div className="w-full h-full overflow-auto justify-center bg-terminalHead rounded-lg">
                <div className="flex justify-center p-2">
                    <img src="Sidepane/Spinner.svg" alt="" />
                    <div className="ml-4 text-base text-terminalHeadText">
                        Loading previous 400 logs
                    </div>
                </div>
                <div className="border-black" />
                <div className="inset-0 w-full overflow-auto bg-terminalBody opacity-50">
                    {logs.map((log, index) => {
                        console.log(log.timestamp, Date.now());
                        return (
                            <LogEntry
                                key={index}
                                type={"info"}
                                timeStamp={log.timestamp}
                                message={log.message}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Logger;
