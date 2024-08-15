import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Todo.css'

export const Todo = () => {
  return (
    <>
    <div　className='input-area'>
      <input placeholder="Input Todo" />
      <button>Add</button>
    </div>

    <div className='incomplete-area'>
      <p className='title'>Incomplete Todo</p>
      <ul>
        <li>
          <div className='list-row'>
            <p className='todo-item'>Todo</p>
            <button>Done</button>
            <button>Delete</button>
          </div>

        </li>
  
        <li>
          <div className='list-row'>
            <p className='todo-item'>Todo</p>
            <button>Done</button>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </div>

    <div className='complete-area'>
    <p className='title'>complete Todo</p>
      <ul>
        <li>
          <div className='list-row'>
            <p className='todo-item'>Todo</p>
            <button>Restore</button>
          </div>
        </li>
        <li>
          <div className='list-row'>
            <p className='todo-item'>Todo</p>
            <button>Restore</button>
          </div>        
        </li>
      </ul>
    </div>
    </>
  );
};
