import React from 'react';
import PropTypes from 'prop-types';
import { MdAddCircle } from 'react-icons/md';
import styles from './Form.module.scss';

export default function Form({
  setCurrentTask,
  setTasks,
  currentTask,
  tasks,
  index,
  edit,
  setEdit,
  storeTasks,
}) {
  function handleChange(e) {
    setCurrentTask(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();

    if (tasks.indexOf(currentTask) !== -1) return;
    if (currentTask === '') return;

    const newTasks = [...tasks];

    if (edit) {
      newTasks[index] = currentTask;

      setTasks(newTasks);
      storeTasks(newTasks);
    } else {
      setTasks([currentTask, ...newTasks]);
      storeTasks([currentTask, ...newTasks]);
    }

    setEdit(false);
    setCurrentTask('');
  }

  return (
    <form className={styles.form__div}>
      <input
        type="text"
        value={currentTask}
        onChange={handleChange}
        className={styles.form__input}
      />
      <button className={styles.form__button} onClick={(e) => handleClick(e)}>
        <MdAddCircle className={styles.form__icon} />
      </button>
    </form>
  );
}

Form.propTypes = {
  setTasks: PropTypes.func.isRequired,
  currentTask: PropTypes.string,
  index: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired,
  edit: PropTypes.bool.isRequired,
  setCurrentTask: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
  storeTasks: PropTypes.func.isRequired,
};
