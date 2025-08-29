import type { ITask } from "../type";
import "../css/todos.css";
import "../css/Form.css";
export interface ITaskProps  {
    data:ITask;
    handleDelete: (taskId:number) => void;
}
export const Todos = ({data, handleDelete}: ITaskProps) => {
 
  

  return (
    <div className="todos-container todo">
      <h3>Task: {data.taskName}</h3>
      <p>Due Date: {data.dueDate}</p>
       <button onClick={()=>handleDelete(data.id)}><span className="material-symbols-outlined">
       delete
       </span></button>
    </div>
  );
}
