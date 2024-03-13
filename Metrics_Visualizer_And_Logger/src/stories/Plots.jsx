import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import Subplots from "./Subplots";
import { getTimeStamps, preprocessMetricsData } from "../utils/utils";
import { MimicMetrics } from "../../../Assignment/api-mimic";

function Plots({ duration }) {
    const timeStamps = getTimeStamps(duration);
    ChartJS.register(CategoryScale);
    const [plotsData, setPlotsData] = useState([]);

    useEffect(() => {
        const startTs = Date.now() - parseInt(duration) * 60 * 1000;
        const endTs = Date.now();
        let temp = preprocessMetricsData(
            MimicMetrics.fetchMetrics({ startTs: startTs, endTs: endTs }),
            startTs,
            endTs
        );

        temp.then((arr) => {
            setPlotsData(arr);
        });
    }, [duration]);

    return (
        <div className="w-7/8 h-full border-[2px] m-4 border-gray-300 rounded-lg flex-col">
            <div className="flex items-center bg-white">
                <div className="font-semibold text-2xl p-4">Metrics</div>
                <div className="flex items-center">
                    <span className="p-1 text-sm text-gray-600">{`${timeStamps[0]}`}</span>
                    <img
                        src="/Sidepane/arrow-right.png"
                        className="w-4"
                        alt=""
                    />
                    <span className="p-1 text-sm text-gray-600">{`${timeStamps[1]}`}</span>
                </div>
            </div>
            <div className="border-[0.5px] border-gray-300" />
            <div className="flex-col w-full h-full p-4 bg-blue-100">
                {plotsData.length == 4 ? (
                    <div className="flex w-full h-full justify-center">
                        <Subplots
                            title={plotsData[0].title}
                            datasets={plotsData[0].datasets}
                            labels={plotsData[0].labels}
                        />
                        <Subplots
                            title={plotsData[1].title}
                            datasets={plotsData[1].datasets}
                            labels={plotsData[1].labels}
                        />
                    </div>
                ) : null}
                {}
                {plotsData.length == 4 ? (
                    <div className="flex w-full h-full justify-center">
                        <Subplots
                            title={plotsData[2].title}
                            datasets={plotsData[2].datasets}
                            labels={plotsData[2].labels}
                        />
                        <Subplots
                            title={plotsData[3].title}
                            datasets={plotsData[3].datasets}
                            labels={plotsData[3].labels}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Plots;
