import React from "react";
import { adjustDate } from "../utils/utils";

function LogEntry({ type, timeStamp, message }) {
    return <div className="flex w-full p-0.5">
        <span className="text-terminalTimeStampText m-2 mr-4">{`${adjustDate(timeStamp)}`}</span>
        {
            type != "" ?
            <span className="text-terminalTimeStampText m-2 mr-4">{`[${type}]`}</span> : null
        }
        <span className="text-terminalBodyText w-4/5 m-2 mr-4">{`${message}`}</span>
    </div>;
}

export default LogEntry;
