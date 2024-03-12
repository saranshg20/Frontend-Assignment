import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale } from 'chart.js/auto';

function Plots({timeStamps}) {
    ChartJS.register(CategoryScale);

    return (
        <div className='w-7/8 h-full border-[2px] m-4 border-gray-300 rounded-lg flex-col'>
            <div className='flex items-center bg-white'>
                <div className='font-semibold text-2xl p-4'>Metrics</div>
                <div className='flex items-center'>
                    <span className='p-1 text-sm text-gray-600'>{`${timeStamps[0]}`}</span>
                    <img src="/Sidepane/arrow-right.png" className='w-4' alt="" />
                    <span className='p-1 text-sm text-gray-600'>{`${timeStamps[1]}`}</span>
                </div>
            </div>
            <div className='border-[0.5px] border-gray-300' />
            <div className='flex-col w-full h-full p-4 bg-blue-100'>
                <div className='flex w-full h-full justify-center'>
                    <div className='flex w-1/2 p-2 bg-white border-[2px] border-gray-300 rounded-lg'><Line
                        datasetIdKey='id'
                        data={{
                            labels: ['Jun', 'Jul', 'Aug'],
                            datasets: [
                                {
                                    id: 1,
                                    label: '',
                                    data: [5, 6, 7],
                                },
                                {
                                    id: 2,
                                    label: '',
                                    data: [3, 2, 1],
                                },
                            ],
                        }}
                    /></div>
                    <div className='flex w-1/2 p-2 bg-white border-[2px] border-gray-300 rounded-lg'><Line
                        datasetIdKey='id'
                        data={{
                            labels: ['Jun', 'Jul', 'Aug'],
                            datasets: [
                                {
                                    id: 1,
                                    label: '',
                                    data: [5, 6, 7],
                                },
                                {
                                    id: 2,
                                    label: '',
                                    data: [3, 2, 1],
                                },
                            ],
                        }}
                    /></div>
                </div>
                <div className='flex w-full h-full justify-center'>
                    <div className='flex w-1/2 p-2  bg-white border-[2px] border-gray-300 rounded-lg'><Line
                        datasetIdKey='id'
                        data={{
                            labels: ['Jun', 'Jul', 'Aug'],
                            datasets: [
                                {
                                    id: 1,
                                    label: '',
                                    data: [5, 6, 7],
                                },
                                {
                                    id: 2,
                                    label: '',
                                    data: [3, 2, 1],
                                },
                            ],
                        }}
                    /></div>
                    <div className='flex w-1/2 p-2 bg-white border-[2px] border-gray-300 rounded-lg'><Line
                        datasetIdKey='id'
                        data={{
                            labels: ['Jun', 'Jul', 'Aug'],
                            datasets: [
                                {
                                    id: 1,
                                    label: '',
                                    data: [5, 6, 7],
                                },
                                {
                                    id: 2,
                                    label: '',
                                    data: [3, 2, 1],
                                },
                            ],
                        }}
                    /></div>
                </div>

            </div>
        </div>
    )
}

export default Plots;

