
import { useEffect, useState } from "react";

const handleFetchRandomNumber = async() => {
    const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

    const response = await fetch(url);
    const data = await response.text();

    //throw new Error('500 internal server error');
    
    return +data;//con el más se hace conversión de string a número
}

export const RandomNumber = () =>{

    const [number,setNumber] = useState(0);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState();

    useEffect(() => {
        /* handleFetchRandomNumber().then(number => setNumber(number)); */
        handleFetchRandomNumber().then(setNumber)
        .catch(error => setIsError(error.message))
    },[]);

    useEffect(() => {
        if (number) {
            setIsLoading(false);
        }
    },[number]);

    useEffect(() => {
        if (isError) {
            setIsLoading(false);
        }
    },[isError]);

    return (
        <>
        {isLoading
        ? <h1>Loading ...</h1>
        : (
            <>
            <h1>Random Number</h1>
            <hr />
            <span>{number}</span>
            </>
        )
        }
        {
            !isLoading && isError && <h1>{isError}</h1>
        }
        </>
    )
}