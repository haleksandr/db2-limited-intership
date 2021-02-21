import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './NewTask.scss';
import { updateNewTaskAC, addNewTaskAC } from '../../../store/actions/actions';

const NewTask = () => {
  const dispatch = useDispatch();
  const newTaskText = useSelector((state) => state.todo.newTaskText);

  const handleChange = (e) => {
    let newTaskText = e.target.value;
    dispatch(updateNewTaskAC(newTaskText));
  };

  // e.keyCode === 13
  const addNewTask = (e) => {
    if (newTaskText.length < 1) {
      alert('FIELD IS EMPTY');
    } else {
      dispatch(addNewTaskAC(newTaskText));
      dispatch(updateNewTaskAC(''));
    }
  };

  const addNewTaskInp = (e) => {
    if (newTaskText.length === '') {
      alert('FIELD IS EMPTY');
    } else if (e.key === 'Enter' && newTaskText.length > 1) {
      dispatch(addNewTaskAC(newTaskText));
      dispatch(updateNewTaskAC(''));
    }
  };

  return (
    <div className="todo__new-task">
      <input
        required
        className="fieldNewTask"
        type="text"
        onChange={handleChange}
        placeholder="Enter your task here"
        value={newTaskText}
        // onKeyPress={(e) => addNewTaskInp(e)}
        onKeyPress={addNewTaskInp}
      />
      <button className="buttonNewTask" onClick={addNewTask}>
        ADD NEW TASK
      </button>
    </div>
  );
};

export default NewTask;
