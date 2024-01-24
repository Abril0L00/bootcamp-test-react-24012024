import { useState } from "react";


export const Form = () => {
    const [search, setSearch] = useState('');
    /* const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(e.target.search.value)
    } */

    const handleInputChange = e => {
        setSearch(e.target.value);
    }

    if(search === 'flor') setSearch('Flora')

    return (
        <>
        <form>
            <input type="text" name="search" autoComplete="off" onChange={handleInputChange}
            value={search}
             />
            <button>Buscar</button>
            <br />
            <span>Busqueda: {search}</span>
        </form>
        </>
    );
}