import React , { useState } from 'react';



export default function SearchBar({onSearch}) {

    const [term, setTerm] = useState('');

    const handleTerm = ({target}) => {
        if (target.value === '') {
            return;
        } else {
            setTerm(target.value);
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        onSearch(term);
        setTerm('');
    }



    return (
        <>
            <form onSubmit={handleSubmit} >
                <h2>Ja<span>mmm</span>ing</h2>
                <input type='text' value={term} onChange={handleTerm} />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}