import React from 'react'
import './Watch.css'
import { useTimer } from 'use-timer'

function Watch() {
    const { time, start, pause, reset, status } = useTimer();
    return (
        <div>
            <div className='watch-btn'>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
            <p className='Timer'>

                <b>Start Timer :- </b>{time}

                {status === 'RUNNING' && <p><b>Running...</b></p>}
            </p>
        </div>
    )
}

export default Watch