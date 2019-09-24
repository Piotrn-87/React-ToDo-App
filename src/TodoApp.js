import React from "react";

function TodoApp(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "green",
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">
      <input
        className="todo-item__input"
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      ></input>
      <p
        className="todo-item__paragraph"
        style={props.item.completed ? completedStyle : null}
      >
        {" "}
        {props.item.text}{" "}
      </p>
    </div>
  );
}

export default TodoApp;
