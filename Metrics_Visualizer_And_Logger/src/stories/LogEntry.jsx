import React from "react";
import { adjustDate } from "../utils/utils";

function LogEntry({ type, timeStamp, message }) {
    const colorMap = {
        "error": "terminalErrorText",
        "success": "green-200",
        "info": "terminalBodyText"
    }

    return (
        <div className="flex w-full items-center p-0.5">
            <span className={`border-2 border-${colorMap[type]} h-7 mr-2`}></span>
            <span className="text-terminalTimeStampText m-2 mr-4">{`${adjustDate(
                timeStamp
            )}`}</span>

            <span className={`m-2 mr-4 text-${colorMap[type]}`}>{`[${type}]`}</span>

            <span className="text-terminalBodyText w-4/5 m-2 mr-4">{`${message}`}</span>
        </div>
    );
}

export default LogEntry;
