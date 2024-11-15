import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../redux/slice';
import { useNavigate } from 'react-router-dom';
import styles from './todo_item.module.css';

function TodoItem({ index, task }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={styles["todo-item"]}>
      <div className={styles["todo-item_cell"]}>{index}</div>
      <div className={`${styles["todo-item_cell"]} ${styles["task-name"]}`}>{task.taskName}</div>
      <div className={`${styles["todo-item_cell"]} ${styles["status"]}`}>
        <span className={`${styles["status-button"]} ${styles[task.status.replace(' ', '-') || 'Todo']}`}>
          {task.status}
        </span>
      </div>
      <div className={styles["todo-item_cell"]}>
        <div onClick={() => navigate(`/edit/${task.id}`)} className={styles["btn-edit"]}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
      </div>
      <div className={styles["todo-item_cell"]}>
        <div onClick={() => dispatch(removeTask(task.id))} className={styles["btn-remove"]}>
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
