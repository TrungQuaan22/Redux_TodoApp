import React from 'react';
import { useNavigate } from 'react-router-dom';
import TodoItem from '../TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import styles from './todo_list.module.css';

function TodoList() {
  const navigate = useNavigate();
  const tasks = useSelector(state => state.tasks);

  return (
    <div className={styles["todo-list"]}>
      <div className={styles["button-add-task-wrapper"]}>
        <button className={styles["button-add-task"]} onClick={() => navigate('/add')}>
          Add Task
        </button>
      </div>

      <div className={styles["todo-table_header"]}>
        <div className={styles["todo-table_header-cell"]}>#</div>
        <div className={`${styles["todo-table_header-cell"]} ${styles["task-name"]}`}>Task Name</div>
        <div className={`${styles["todo-table_header-cell"]} ${styles["status"]}`}>Status</div>
        <div className={styles["todo-table_header-cell"]}>Edit</div>
        <div className={styles["todo-table_header-cell"]}>Remove</div>
      </div>

      {tasks.length ? tasks.map((task, index) => (
        <TodoItem
          key={task.id}
          index={index + 1}
          task={task}
        />
      )) : 'No Activity'}
    </div>
  );
}

export default TodoList;
