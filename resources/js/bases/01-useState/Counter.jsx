
import { useState } from "react";

export const Counter = () => {
    const [counter,setCounter] = useState(0);

    //* Estándares de nombre de funciones
    //? const handleIncrement
    const handleIncrement = () => setCounter(counter + 1);
    const handleDecrease = () => setCounter(counter - 1);
    const handleReset = () => setCounter(0);
    const handleIncrementBy = (value) => setCounter(counter + value);

    return (
        <>
        <h1>Use state</h1>
        <hr />

        <div className="d-flex">
            <h2>Valor:</h2>
            <span
            style={{
                color: '#AF9098',
                marginLeft: '1rem',
                marginTop: '5px'
            }}
            >
                El valor de mi contador {counter}
            </span>
        </div>
        <div>
            <button 
            className="btn btn-success"
            onClick={handleIncrement}
            >Incrementar</button>
            <button 
            className="btn btn-warning"
            onClick={handleDecrease}
            >Restar</button>
            <button 
            className="btn btn-danger"
            onClick={handleReset}
            >Reset</button>
            <button 
            className="btn"
            onClick={() => handleIncrementBy(10)}
            >Increment By 10</button>
        </div>
        </>
    )
}