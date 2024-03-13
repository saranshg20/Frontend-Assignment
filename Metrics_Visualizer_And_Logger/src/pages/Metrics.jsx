import React, { useEffect, useState } from "react";
import Navbar from "../stories/Navbar";
import Plots from "../stories/Plots";
import { getTimeStamps, preprocessMetricsData } from "../utils/utils";
import { MimicMetrics } from "../../../Assignment/api-mimic";

function Metrics({ duration, setDuration }) {

    return (
        <div className="flex-col">
            <Navbar
                showMetrics={true}
                duration={duration}
                setDuration={setDuration}
            />
            <div className="bg-blue-50 w-full h-full">
                <hr />
                <Plots duration={duration}/>
            </div>
        </div>
    );
}

export default Metrics;
