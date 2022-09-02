import React, { useEffect, useState } from 'react'

const Vezba = () => {
    const [name, setName] = useState();
    const changesName = (name) => {
        setName(name);
    };
    useEffect(() => {
        if(!name) return
        alert(`wellcome ${name}`)
    }, [name])
   

return (
    <div className='box3'>
        <h1 className='con3'>Wellcome : <span>{name}</span></h1>

        <button type='button' onClick={() => changesName("Frosina")} className="ButName1">Change Name</button>
        <button type='button' onClick={() => changesName("Aleksandra")} className="ButName1">Change Name</button>
        <button type='button' onClick={() => changesName("Mirjana")} className="ButName1">Change Name</button>
    </div>
)
    }

export default Vezba