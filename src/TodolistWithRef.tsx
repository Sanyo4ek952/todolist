import {FilterValueType, TaskType} from "./types/common"
import {Button} from "./components/Button";
import {useRef} from "react";


type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (newFilterValue: FilterValueType) => void
    addTask: (title: string) => void
}

export const Todolist = (
    {
        title,
        tasks,
        removeTask,
        changeFilter,
        addTask

    }: TodolistPropsType) => {

    const taskInputRef = useRef<HTMLInputElement>(null)

    const tasksElements: Array<JSX.Element> | JSX.Element = tasks.length !== 0
        ? tasks.map(task => {
            return (
                <li>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <Button title={"x"} onClickHandler={() => removeTask(task.id)}/>
                </li>
            )
        })
        : <span>Your taskslist is empty</span>

    const addTaskHandler = () => {
        if (taskInputRef.current) {
            addTask(taskInputRef.current?.value)
            taskInputRef.current.value = ""
        }
    }

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input ref={taskInputRef}/>
                <Button onClickHandler={addTaskHandler} title={"+"}/>
            </div>
            <ul>
                {tasksElements}
            </ul>
            <div>
                <Button title={"All"} onClickHandler={() => changeFilter("all")}/>
                <Button title={"Active"} onClickHandler={() => changeFilter("active")}/>
                <Button title={"Completed"} onClickHandler={() => changeFilter("completed")}/>
            </div>
        </div>
    )
} 
