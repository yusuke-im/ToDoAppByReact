import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Todo.css'

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["todo1", "todo2"]);
  const [completeTodos, setCompleteTodos] = useState(["todo3", "todo4"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);  

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickDelte = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); 
  
    setIncompleteTodos(newTodos);
  }

  return (
    <>

    <div　className='input-area'>
      <input placeholder="Input Todo" value={todoText} onChange={onChangeTodoText}/>
      <button onClick={onClickAdd}>Add</button>
    </div>

    <div className='incomplete-area'>
      <p className='title'>Incomplete Todo</p>
      <ul>
        {incompleteTodos.map((todo, index) => (
            <li key={todo}>
            <div className='list-row'>
              <p className='todo-item'>{todo}</p>
              <button onClick={ () => onClickComplete(index)}>Done</button> 
              <button onClick={ () => onClickDelte(index)}>Delete</button>
            </div>  
          </li>
          )           
        )}
      </ul>
    </div>

    <div className='complete-area'>
    <p className='title'>complete Todo</p>
      <ul>
        {completeTodos.map((todo) => (
              <li key={todo}>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button>Restore</button>
              </div>  
            </li>
            )           
          )}
      </ul>
    </div>

    </>
  );
};
