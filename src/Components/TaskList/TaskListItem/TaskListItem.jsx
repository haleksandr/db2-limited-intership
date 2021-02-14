import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import './TaskListItem.scss';
import { toggleDoneTaskAC, deleteTaskAC } from '../../../store/actions/actions';

const TaskListItem = (props) => {
  const dispatch = useDispatch();

  const toggleStatusTask = () => {
    dispatch(toggleDoneTaskAC(props.id));
  };

  const deleteTask = () => {
    dispatch(deleteTaskAC(props.id));
  };

  return (
    <div className="todo__task-list-item">
      <p className={classNames(props.className, { done: props.done })}>
        {props.labelTask}
      </p>
      <div>
        <button className="btn btn-done" onClick={toggleStatusTask}>
          DONE
        </button>
        <button className="btn btn-delete" onClick={deleteTask}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TaskListItem;
