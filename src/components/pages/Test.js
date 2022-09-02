import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Test = () => {
    const [name, setName] = useState();
    const [city, setCity] = useState();

    const changesName = (name, e) => {
        setName(name);
    };
    useEffect(() => {
        randomMath();
    }, [name]);

    useEffect(() => {
        randomMath();
        return () => {
            console.log('Exit');
        }
    }, []);
    const randomMath = () => {
        console.log(Math.random());
    };
    return (<>
        <Link to="/home">Hello</Link>
        <div className='container1'>
            <h1> Name : <span>{name}</span></h1>
            <div className='contentbutton'>
                <button type='button' onClick={(e) => changesName(" Frosina")} className="ButName">Change Name</button>
                <button type='button' onClick={(e) => changesName("Aleksandra!")} className="ButName">Change Name</button>
                <button type='button' onClick={(e) => changesName("Bitola")} className="ButName">Change city</button>
                <button type='button' onClick={(e) => changesName("Prilep")} className="ButName">Change city</button></div>
        </div></>

    )
}

export default Test