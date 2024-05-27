import {FilterValueType, TaskType} from "./types/common"
import {Button} from "./components/Button";


type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (newFilterValue: FilterValueType) => void
}

export const Todolist = (
    {
        title,
        tasks,
        removeTask,
        changeFilter

    }: TodolistPropsType) => {

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

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <Button  title={"+"}/>
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
