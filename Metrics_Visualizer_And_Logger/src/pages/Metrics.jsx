import React from 'react'
import Navbar from '../stories/Navbar'

function Metrics({duration, setDuration}) {
    return (
        <div className="flex-col">
            <Navbar showMetrics={true} duration={duration} setDuration={setDuration}/>
        </div>
    )
}

export default Metrics