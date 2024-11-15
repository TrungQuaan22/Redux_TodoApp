import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTask, editTask } from "../../redux/slice";
import styles from './add_edit.module.css';

function AddEditTask({ status }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const task = tasks.find((task) => task.id == id);
  const [taskName, setTaskName] = useState(task ? task.taskName : "");
  const [taskStatus, setTaskStatus] = useState(task ? task.status : "Todo");
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!taskName.trim()) {
      setError("Task name cannot be empty");
      return;
    }

    const newTask = {
      id: task ? task.id : Date.now(),
      taskName: taskName,
      status: taskStatus,
    };
    
    if (status === 'edit') {
      dispatch(editTask(newTask));
    } else {
      dispatch(addTask(newTask));
    }
    navigate("/");
  };

  return (
    <div className={styles["add-edit-task"]}>
      <h2>{status === "edit" ? "Edit Task" : "Add Task"}</h2>
      <div className={styles["input-wrapper"]}>
        <div>
          <label htmlFor="task">Task:</label>
          <input
            id="task"
            type="text"
            value={taskName}
            required
            onChange={(e) => {
              setTaskName(e.target.value);
              setError("");
            }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
      </div>
      <button onClick={handleSave}>
        {status === "edit" ? "Edit Task" : "Add Task"}
      </button>
    </div>
  );
}

export default AddEditTask;
