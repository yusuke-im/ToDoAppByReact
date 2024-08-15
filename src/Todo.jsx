import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Todo.css'

export const Todo = () => {
  return (
    <>
    <div>
      <input placeholder="Input Todo" />
      <button>Add</button>
    </div>

    <div>
      <p>Incomplete Todo</p>
      <ul>
        <li>
          <p>Todo</p>
          <button>Done</button>
          <button>Delete</button>
        </li>
        <li>
          <p>Todo</p>
          <button>Done</button>
          <button>Delete</button>
        </li>
      </ul>
    </div>

    <div>
    <p>complete Todo</p>
      <ul>
        <li>
          <p>Todo</p>
          <button>Restore</button>
        </li>
        <li>
          <p>Todo</p>
          <button>Restore</button>
        </li>
      </ul>
    </div>
    </>
  );
};
