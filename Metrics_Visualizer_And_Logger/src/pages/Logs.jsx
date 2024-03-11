import React from 'react'
import Navbar from '../stories/Navbar'

function Logs({duration, setDuration}) {
    return (
        <div className="flex-col">
            <Navbar showMetrics={false} duration={duration} setDuration={setDuration}/>
        </div>
    )
}

export default Logs