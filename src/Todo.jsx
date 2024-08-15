import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Todo.css'

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["todo1", "todo2"]);
  const [completeTodos, setCompleteTodos] = useState(["todo3", "todo4"]);

  return (
    <>

    <div　className='input-area'>
      <input placeholder="Input Todo" />
      <button>Add</button>
    </div>

    <div className='incomplete-area'>
      <p className='title'>Incomplete Todo</p>
      <ul>
        {incompleteTodos.map((todo) => (
            <li key={todo}>
            <div className='list-row'>
              <p className='todo-item'>{todo}</p>
              <button>Done</button>
              <button>Delete</button>
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
