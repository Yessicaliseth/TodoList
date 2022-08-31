import React from 'react';
import './style.css'; 

function TodoList(props) {
    return (
        <section className='TodoList'>
            <ul className='TodoList-ul'>
              {props.children}
            </ul>
        </section> 
    );
}

export { TodoList };
