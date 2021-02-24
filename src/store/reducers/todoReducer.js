/* eslint-disable */
import * as types from '../types';

const initialState = {
  tasksData: [],
  newTaskText: '',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_NEW_TASK:
      return {
        ...state,
        newTaskText: action.payload,
      };
    case types.ADD_NEW_TASK:
      let newTask = {
        id: Math.floor(Math.random() * 1000),
        labelTask: action.payload,
        done: false,
      };
      return {
        ...state,
        tasksData: [...state.tasksData, newTask],
      };
    case types.TOGGLE_DONE_TASK:
      return {
        ...state,
        tasksData: state.tasksData.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo)),
      };
    case types.DELETE_TASK:
      const numIndex = parseInt(action.payload);
      return {
        ...state,
        tasksData: state.tasksData.filter((task) => {
          return task.id !== numIndex;
        }),
      };
    case types.SET_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
