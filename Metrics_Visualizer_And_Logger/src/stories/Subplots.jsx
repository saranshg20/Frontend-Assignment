import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarController,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import Zoom from "chartjs-plugin-zoom";

function Subplots({ title, datasets, labels }) {
    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        CategoryScale,
        LinearScale,
        BarElement,
        BarController,
        Zoom
    );

    const plotDatasets = datasets.map((item, idx) => {
        return {
            id: idx,
            label: item.label,
            data: item.data,
        };
    });

    const options = {
        responsive: true,
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: "x",
                },
                zoom: {
                    drag: {
                        enabled: true,
                        threshold: 2000,
                    },
                    mode: "x",
                },
            },
            tooltip: {
                enabled: false,
                position: "nearest",
            },
        },
    };

    return (
        <div className="flex-col w-1/2 p-2 mr-2 mt-2 justify-center bg-white border-[2px] border-gray-300 rounded-lg">
            <span className="text-lg text-gray-700 font-bold m-2">{`${title}`}</span>
            <Line
                datasetIdKey="id"
                data={{
                    labels: labels,
                    datasets: plotDatasets,
                }}
                options={options}
            />
        </div>
    );
}

export default Subplots;
