import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUI(){
  const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,

      } = React.useContext(TodoContext)
    return(
    <div className='mainContainer'>
      <div className='mainContent'>
        <TodoCounter />
        
        <TodoSearch />
        
        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
        
        <TodoList>
          {loading && <p>Estamos cargando, No te desesperes................</p>}
          {error && <p>Desesperate, Hubo un error................</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer Tarea</p>}

          {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            complete={todo.complete}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

        

      </div>
      
        
    </div>
    );
}

export { AppUI };