import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale } from 'chart.js/auto';

function Subplots({title, datasets, labels}) {
    const plotDatasets = datasets.map((item, idx) => {
        return {
            id: idx,
            label: item.label,
            data: item.data
        }
    });

    return (
        <div className="flex-col w-1/2 p-2 justify-center bg-white border-[2px] border-gray-300 rounded-lg">
            <span className="text-lg text-gray-700 font-bold m-2">{`${title}`}</span>
            <Line
                datasetIdKey="id"
                data={{
                    labels: labels,
                    datasets: plotDatasets,
                }}
            />
        </div>
    );
}

export default Subplots;
