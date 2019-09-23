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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(xxx) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === xxx) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
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
      <TodoApp key={item.id} item={item} handleChange={this.handleChange} />
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
