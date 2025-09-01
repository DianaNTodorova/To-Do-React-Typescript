import type { ITask } from "../type";
import "../css/todos.css";
import "../css/Form.css";
export interface ITaskProps  {
    data:ITask;
    handleDelete: (taskId:number) => void;
    handleUp: (taskId:number) => void;
    handleDown: (taskId:number) => void;
}
export const Todos = ({data, handleDelete, handleUp, handleDown}: ITaskProps) => {
 
  

  return (
    <div className="todo-container todo">
      <h3>Task: {data.taskName}</h3>
      <p>Due Date: {data.dueDate}</p>
      <button onClick={()=>handleUp(data.id)}><span className="material-symbols-outlined arrow_up">
      arrow_upward
      </span></button>
      <button onClick={()=>handleDown(data.id)}><span className="material-symbols-outlined arrow_down">
       arrow_downward
       </span></button>
       <button onClick={()=>handleDelete(data.id)}><span className="material-symbols-outlined">
       delete
       </span></button>
    </div>
  );
}
