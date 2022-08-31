import React from 'react';
import { TodoContext } from '../TodoContext';
import './style.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input 
            className='TodoSearch'
            placeholder="Filtro de tareas..." 
            value={searchValue}
            onChange={onSearchValueChange}
        ></input>
    );
}

export { TodoSearch };