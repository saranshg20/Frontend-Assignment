import React from 'react'
import Navbar from '../stories/Navbar'
import Plots from '../stories/Plots'
import { getTimeStamps } from '../utils/utils'

function Metrics({ duration, setDuration }) {
    const timeStamps = getTimeStamps(duration);

    return (
        <div className="flex-col">
            <Navbar showMetrics={true} duration={duration} setDuration={setDuration} />
            <div className='bg-blue-50 w-full h-full'>
                <hr />
                <Plots timeStamps={timeStamps}/>
            </div>
        </div>
    )
}

export default Metrics