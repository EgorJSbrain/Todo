import { SET_TEXT,
         SET_TITLE,
         SET_TODOS,
         FETCH,
         ADD_TODO,
         DELETE_TODO,
         EDIT_TODO,
         SET_TODO_FOR_EDIT } from './constants';


export const setTitle = title => ({ type: SET_TITLE, title })
export const setText = text => ({ type: SET_TEXT, text })
export const setToDos = (todos) => ({ type: SET_TODOS, todos: todos })
export const fetchTodos = () => ({ type: FETCH})
export const addTodo = (payload) => ({ type: ADD_TODO, payload})
export const deleteTodo = (id) => ({ type: DELETE_TODO, id})
export const setTodoForEdit = (todoForEdit) => ({ type: SET_TODO_FOR_EDIT, todoForEdit})
export const editTodo = (value) => ({ type: EDIT_TODO, value})