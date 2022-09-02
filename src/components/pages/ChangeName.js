import React, { useState } from 'react'

const ChangeName = ({ frosina }) => {
    const [caunt, setCaunt] = useState(frosina);
    const [name, setName] = useState();

    const startTimer = () => {
        setCaunt(caunt + 1);
    };
    const retartTimer = () => {
        setCaunt(0);
    };
    const changesName = (name) => {
        setName(name);
    };
    
    console.count('ChangeName');
    return (<>
        <div className='container1'>
            <h1> Name : <span>{name}</span></h1>
            <div className='contentbutton'>
                <button type='button' onClick={() => changesName("Hello Frosina")} className="ButName">Change Name</button>
                <button type='button' onClick={() => changesName("Hi Aleksandra!")} className="ButName">Change Name</button>
                <button type='button' onClick={() => changesName("Hi Elena!")} className="ButName">Change Name</button>
                <button type='button' onClick={() => changesName("Hi Mirjana!")} className="ButName">Change Name</button></div>
        </div></>

    )
}

export default ChangeName