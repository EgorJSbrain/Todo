import { SET_TEXT,
         SET_TITLE,
         DELETE_TODO,
         SET_TODOS } from './constants';




const initialState = {
  todos: [],
  todo_for_edit: null,
  title: '',
  text: ''
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.title,
      }

    case SET_TODOS:
      return {
        ...state,
        todos: action.todos,
      }

    case SET_TEXT:
      return {
        ...state,
        text: action.text
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.id)]
      }

    default:
      return state
  }
}

export default todoReducer;