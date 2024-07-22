import React , { useState } from 'react';
import styles from './Searchbar.module.css'


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
            <form onSubmit={handleSubmit} className={styles.form}>
    
                <div className={styles.search}>
                    <input type='text' value={term} onChange={handleTerm} />
                    <button type='submit'>Search</button>
                </div>
            </form>
        </>
    )
}