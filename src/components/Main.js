import React, { useEffect, useState } from 'react';
import Form from './Form';
import Tasks from './Tasks';
import styles from './Main.module.scss';

export default function Main() {
  const [tasks, setTasks] = useState([]);
  const [index, setIndex] = useState(0);
  const [edit, setEdit] = useState(false);
  const [currentTask, setCurrentTask] = useState('');

  function storeTasks(task) {
    window.localStorage.setItem('tasks', JSON.stringify(task));
  }

  function getTask() {
    const tasksStorage = window.localStorage.getItem('tasks');
    if (tasksStorage != 'undefined') setTasks(JSON.parse(tasksStorage));
  }

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className={styles.main__div}>
      <h1 className={styles.main__title}>TODO</h1>
      <Form
        setTasks={setTasks}
        tasks={tasks}
        index={index}
        edit={edit}
        currentTask={currentTask}
        setEdit={setEdit}
        setCurrentTask={setCurrentTask}
        storeTasks={storeTasks}
      />
      <Tasks
        setTasks={setTasks}
        tasks={tasks}
        index={index}
        setIndex={setIndex}
        setEdit={setEdit}
        setCurrentTask={setCurrentTask}
        storeTasks={storeTasks}
      />
    </div>
  );
}
