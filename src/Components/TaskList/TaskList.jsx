/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';

import './TaskList.scss';
import TaskListItem from './TaskListItem/TaskListItem';
import NewTask from './NewTask/NewTask';

const TaskList = (props) => {
  const tasksData = useSelector((state) => state.todo.tasksData);

  return (
    <div>
      <NewTask />
      <ul className="todo__tasks">
        {tasksData.map((item, index) => (
          <li key={index}>
            <TaskListItem labelTask={item.labelTask} id={item.id} done={item.done} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
