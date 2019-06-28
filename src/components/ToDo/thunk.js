import { axios } from '../../axios';
import { setToDos } from './action';
import {todoAPI} from './API/todoAPI'


// export const setData = (title, text) => async (dispatch) => {
//   await todoAPI.addTodo(title, text)
//   await dispatch(getToDos())
// };

// export const getToDos = () => async (dispatch) => {
//   let todos = await todoAPI.getTodos()
//   await dispatch(setToDos(todos))
// };

export const deleteTodo = (id) => dispatch => {
  debugger
  axios.delete('/delete', {id: id})
}