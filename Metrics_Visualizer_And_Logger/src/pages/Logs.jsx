import React from 'react'
import Navbar from '../stories/Navbar'
import { getTimeStamps } from '../utils/utils';
import Logger from '../stories/Logger';

function Logs({ duration, setDuration }) {
    const timeStamps = getTimeStamps(duration);

    return (
        <div className="flex-col">
            <Navbar showMetrics={false} duration={duration} setDuration={setDuration} />
            <div className='bg-blue-50 w-full h-full'>
                <hr />
                <Logger timeStamps={timeStamps}/>
            </div>
        </div>
    )
}

export default Logs