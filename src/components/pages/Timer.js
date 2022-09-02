import React, { useState } from 'react'


const Timer = ({frosina}) => {
    const [count, setCaunt] = useState(frosina);
    const startTimer = () => {
        setCaunt(count + 1);
    };
    const ResetInterval = () => setCaunt(0);


    return (<>
        <div >
            <h4> Count:<span>{count}</span></h4>
            <div className="ButtonHolder">
                <button className='button1' onClick={startTimer}>Start!</button>
                <button className="button1">Stop!</button>
                <button className="button1" onClick={ResetInterval}>Reset!</button>
            </div>

        </div></>
    );

}



export default Timer