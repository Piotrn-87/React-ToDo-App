import React from "react";
import TodoApp from "./TodoApp";
import "./MyApp.css";
import todosData from "./todosData";

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfday;

    if (hours >= 9 && hours <= 11) {
      timeOfday = "Morning";
    } else if (hours >= 12 && hours < 20) {
      timeOfday = "Aternoon";
    } else {
      timeOfday = "Night";
    }

    const todoItems = this.state.todos.map(item => (
      <TodoApp key={item.id} item={item} />
    ));

    return (
      <div className="todo-list">
        {todoItems}
        <h1 className="todo-list__text"> It is {timeOfday}</h1>
      </div>
    );
  }
}

export default MyApp;
