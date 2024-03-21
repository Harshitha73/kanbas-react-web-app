import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
function TodoItem({ todo}:{todo: any}) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      {todo.title}
      <button onClick={() => dispatch(setTodo(todo))} className="btn btn-primary"> Edit </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-danger"> Delete </button>  
    </li>
  );
}
export default TodoItem;