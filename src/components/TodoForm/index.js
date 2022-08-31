import React from "react";
import { TodoContext } from '../TodoContext';
import './style.css';


function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false); 
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };

    return (
       <form className="TodoForm" onSubmit={onSubmit}>
            <label className="TodoForm-label">Escribe una nueva Tarea
            </label>
            <textarea
                className="TodoForm-textarea"  
                value={newTodoValue} 
                onChange={onChange}
                placeholder="Comprar la cebolla para el almuerzo...."
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button__cancel">
                        Salir
                </button>
                <button 
                    type="submit" 
                    className="TodoForm-button TodoForm-button__add">
                        Añadir
                </button>
            </div>
        
       </form> 
    );
}

export { TodoForm }