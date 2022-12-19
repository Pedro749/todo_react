import React from 'react';
import styles from './Tasks.module.scss';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';

export default function Tasks({
  tasks,
  setIndex,
  setCurrentTask,
  setEdit,
  setTasks,
  storeTasks,
}) {
  function handleEdit(e, index) {
    const tasksEdit = [...tasks];
    setEdit(true);
    setIndex(index);
    setCurrentTask(tasksEdit[index]);
  }

  function handleDelete(e, index) {
    const tasksDelete = [...tasks];
    tasksDelete.splice(index, 1);

    setTasks(tasksDelete);
    storeTasks(tasksDelete);
  }

  return (
    <div className={styles.tasks__div}>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <div>
                <p className={styles.tasks__text}>{task}</p>
                <span>
                  <MdModeEdit
                    onClick={(e) => handleEdit(e, index)}
                    className={styles.tasks__edit}
                  />
                  <MdDelete
                    onClick={(e) => handleDelete(e, index)}
                    className={styles.tasks__delete}
                  />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
  setCurrentTask: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
  storeTasks: PropTypes.func.isRequired,
};
