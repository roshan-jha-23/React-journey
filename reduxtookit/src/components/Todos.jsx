import React from 'react'
import { UseSelector, useDispatch } from 'react-redux';
import {removeTodos,updateTodo} from "../features/todo/todoSlice"

function Todos() {
    const todos = UseSelector((state) => state.todos);
    const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo)=>(
      <li key={todo.id}>
       {todo.msg}
       <button onClick={()=>dispatch(removeTodos(todo.id))}>X</button>
       <button onClick={()=>dispatch(updateTodo(todo.id))}>Edit</button>
      </li>
      
      ))}
    </>
  );
}

export default Todos
