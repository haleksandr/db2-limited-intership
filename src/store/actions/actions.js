import * as types from '../types';

export const updateNewTaskAC = (newTaskText) => {
  return {
    type: types.UPDATE_NEW_TASK,
    payload: newTaskText,
  };
};

export const addNewTaskAC = (newTaskText) => {
  return {
    type: types.ADD_NEW_TASK,
    payload: newTaskText,
  };
};

export const toggleDoneTaskAC = (id) => {
  return {
    type: types.TOGGLE_DONE_TASK,
    payload: id,
  };
};

export const deleteTaskAC = (id) => {
  return {
    type: types.DELETE_TASK,
    payload: id,
  };
};
