import React, { useState, type ReactElement } from "react";
import "../css/Form.css";
import "../css/Todos.css";
import type { ITask } from "../type";
import { Todos } from "./todos";

export const Form = () :ReactElement => {
  const [task, setTask] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const { name, value } = e.target;  //destracturing the event target
    if(name === "taskInput"){
      setTask(value);
    } else if(name === "dueDate"){
      setDueDate(value);
    }
  
  }
const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
  e.preventDefault();
  const newTask={ taskName: task, dueDate: dueDate, id: Date.now() };
  setTodoList([...todoList, newTask]);
  console.log(todoList);
  setTask("");  
  setDueDate("");
}
const handleDelete = (taskId:number):void => {
  const newTodoList = todoList.filter((task) => task.id !== taskId);
  setTodoList(newTodoList);
}
const handleUp = (taskId:number):void => {
  const index = todoList.findIndex((task) => task.id === taskId); 
  if (index > 0) {
    const newTodoList = [...todoList];
    const up = newTodoList[index - 1];
    newTodoList[index - 1] = newTodoList[index];
    newTodoList[index] = up;
    setTodoList(newTodoList);

  }
}
const handleDown = (taskId:number):void => {
  const index = todoList.findIndex((task) => task.id === taskId); 
  if (index >= 0) {
    const newTodoList = [...todoList];
    const down = newTodoList[index + 1];
    newTodoList[index + 1] = newTodoList[index];
    newTodoList[index] = down;
    setTodoList(newTodoList);

  }
}
  return (
    <div>
    <div className="todo-container">
      <h2>To Do List</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="taskInput">New Task:</label>
        <input type="text" id="taskInput" name="taskInput" value={task} onChange={handleChange}/>
        <label htmlFor="dueDate">Due Date:</label>
        <input type="date" id="dueDate" name="dueDate" value={dueDate} onChange={handleChange}/>
        <button type="submit" >Add</button>
      </form>
    </div>
    <div>
      {todoList.map((task: ITask) => (
        <Todos key={task.id} data={task} handleDelete={handleDelete} handleDown={handleDown} handleUp={handleUp} />
      ))}
    </div>
    </div>
  );
}
