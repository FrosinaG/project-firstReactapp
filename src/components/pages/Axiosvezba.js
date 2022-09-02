import axios from 'axios';
import React, { useEffect, useState } from 'react'



const Axiosvezba = () => {
    const [randomQuote, setRandomQuote] = useState();

    useEffect(() => {
        console.log(randomQuote);
        axios.get("https://dummyjson.com/quotes/random")
            .then((response) => {
                console.log(response.data);
                setRandomQuote(response.data);
            })
            .catch((error) => {
                console.log(error)
            });

    },[] );
    console.log("frosina")
    if (!randomQuote) return null;
    const { id, quote, author } = randomQuote;

    return (
        <div className="con2">
            
            <p>{quote}</p>
           <b> <p>{author}</p></b>
            
        </div>
    );
};

export default Axiosvezba;