import React from "react";
import { adjustDate } from "../utils/utils";

function LogEntry({ type, timeStamp, message }) {
    return (
        <div className="flex w-full items-center p-0.5">
            <span
                className={`border-2 h-8 mr-2 ${
                    type === "error"
                        ? "border-red-400"
                        : type === "success"
                        ? "border-green-600"
                        : "border-terminalBodyText"
                }`}
            ></span>
            <span className="text-terminalTimeStampText m-2 mr-4">{`${adjustDate(
                timeStamp
            )}`}</span>
            <span
                className={`m-2 mr-4 ${
                    type === "error"
                        ? "text-red-400"
                        : type === "success"
                        ? "text-green-600"
                        : "text-terminalBodyText"
                }`}
            >{`[${type}]`}</span>
            <span
                className={`text-terminalBodyText w-4/5 m-2 mr-4`}
            >{`${message}`}</span>
        </div>
    );
}

export default LogEntry;
