import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Todo.css'
import { InputTodo } from './components/inputTodo';
import { IncompleteTodos } from './components/incompleteTodos';
import { CompleteTodos } from './components/completeTodos';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); 
  
    setIncompleteTodos(newTodos);
  }

  const onClickRestore = (index) =>{
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);  
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo 
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos 
        completeTodos={completeTodos}
        onClickRestore={onClickRestore}
      />
    </>
  );
};
