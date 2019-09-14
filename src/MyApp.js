import React from "react"

import TodoApp from './TodoApp'
import './MyApp.css'

function MyApp() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfday;

    if (hours >= 9 && hours < 12) {
        timeOfday = "Morning";
    } else if (hours >= 13 && hours < 20) {
        timeOfday = "Aternoon";
    } else {
        timeOfday = "Night";
    }
    return (
        <div className="todo-list" >
            <TodoApp />
            <TodoApp />
            <TodoApp />
            <TodoApp />
            <h1 className="todo-list__text" > It is {timeOfday}</h1>
        </div >
    )
}

export default MyApp