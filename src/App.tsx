import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {FilterValueType, TaskType} from './types/common';

//Create
//Read (view mode, filter, sort, page, search)
//Update
//Delete


//CLI
//GUI
//VUI
//VRUI
//ARUI



function App() {
    const todolistTitle = "What to learn"
    //state


    const [tasks, setTasks] = useState<Array<TaskType>>(
        [
            {id: 1, title: "HTML", isDone: true},
            {id: 2, title: "CSS", isDone: true},
            {id: 3, title: "JS/TS", isDone: false},
            {id: 4, title: "REACT", isDone: false},
        ]
    )

    //UI

    const [filter, setFilter] = useState<FilterValueType>("all")
// Какие таски отдать в Todo на отрисовку? => смотри filter
    let filteredTasksForTodolist: Array<TaskType> = tasks
    if (filter === "active") {
        filteredTasksForTodolist = tasks.filter(t => !t.isDone)
    }
    if (filter === "completed") {
        filteredTasksForTodolist = tasks.filter(t => t.isDone)
    }
    //
    const removeTask = (taskId: number) => {
        const nextState = tasks.filter(t => t.id !== taskId)
        setTasks(nextState);
        console.log(tasks)
    }

    const changeFilter = (newFilterValue:FilterValueType)=>{
        setFilter(newFilterValue)
    }

    return (
        <div className="App">
            <Todolist
                changeFilter={changeFilter}
                removeTask={removeTask}
                title={todolistTitle}
                tasks={filteredTasksForTodolist}
            />
            {/* Todolist({title: "What to learn", tasks: tasks}) */}
        </div>
    );
}

export default App;
