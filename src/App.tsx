import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";


function App() {

    const todolistTitle_1="What to learn"
    const tasks: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS/TS', isDone: false},
        {id: 4, title: 'REACT', isDone: false},
    ]

    const todolistTitle_2="What to buy"
    const tasks_2: Array<TaskType> = [
        {id: 1, title: "Water", isDone: true},
        {id: 2, title: 'Beer', isDone: true},
        {id: 3, title: 'Meat', isDone: true},
        {id: 4, title: 'Cheeps', isDone: false},
    ]

    return (
        <div className="App">
            <Todolist tasks={tasks} title={todolistTitle_1}/>
            <Todolist tasks={tasks_2} title={todolistTitle_2}/>
            <Todolist tasks={tasks} title={"What to read"}/>
        </div>
    );
}

export default App;
