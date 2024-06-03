import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {FilterValueType, TaskType} from './types/common';
import {v1} from "uuid";

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
            {id: v1(), title: "HTML", isDone: true},
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "JS/TS", isDone: false},
            {id: v1(), title: "REACT", isDone: false},
        ]
    )

    const addTask = (title:string) => {
        const newTask: TaskType={
            id: v1(),
            title,
            isDone: false,
        }
        //Имутабельная работа
        const copyState =[...tasks]
        copyState.push(newTask)

        //Имутабельная работа тоже только короче
        setTasks([...tasks,newTask])
    }



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
    const removeTask = (taskId: string) => {
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
                addTask={addTask}            />
            {/* Todolist({title: "What to learn", tasks: tasks}) */}
        </div>
    );
}

export default App;
