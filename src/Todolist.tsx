import {FilterValueType, TaskType} from "./types/common"
import {Button} from "./components/Button";
import {ChangeEvent, KeyboardEvent, useState} from "react";

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

    const [taskTitle, setTaskTitle] = useState<string>("")

    const tasksElements: Array<JSX.Element> | JSX.Element = tasks.length !== 0
        ? tasks.map(task => {
            const removeTaskHandler = () => {
                removeTask(task.id)
            }
            return (
                <li>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <Button title={"x"} onClickHandler={removeTaskHandler}/>
                </li>
            )
        })
        : <span>Your taskslist is empty</span>

    const addTaskHandler = () => {
        addTask(taskTitle)
        setTaskTitle("")
    }

    const changeTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.currentTarget.value)

    const keyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && addTaskHandler()
    }

    const setAllTaskHandler = () => {
        changeFilter("all")
    }
    const setActiveTaskHandler = () => {
        changeFilter("active")
    }
    const setCompletedTaskHandler = () => {
        changeFilter("completed")
    }
    const isAddTaskButtonDisabled = !taskTitle || taskTitle.length > 25

    const userTaskLengthWarning = taskTitle.length > 15 && <div>Recomended task title is 15 chartes</div>

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input
                    value={taskTitle}
                    onChange={changeTaskTitleHandler}
                    onKeyDown={keyDownAddTaskHandler}
                />
                <Button
                    onClickHandler={addTaskHandler}
                    title={"+"}
                    disabled={isAddTaskButtonDisabled}
                />
                {userTaskLengthWarning}
            </div>
            <ul>
                {tasksElements}
            </ul>
            <div>
                <Button title={"All"} onClickHandler={setAllTaskHandler}/>
                <Button title={"Active"} onClickHandler={setActiveTaskHandler}/>
                <Button title={"Completed"} onClickHandler={setCompletedTaskHandler}/>
            </div>
        </div>
    )
} 
