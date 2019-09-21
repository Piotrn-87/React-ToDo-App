import React from "react";

function TodoApp(props) {
  return (
    <div className="todo-item">
      <input
        className="todo-item__input"
        type="checkbox"
        checked={props.item.completed}
        onChange={() => console.log("Change")}
      ></input>
      <p className="todo-item__paragraph"> {props.item.text} </p>
    </div>
  );
}

export default TodoApp;
