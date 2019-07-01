import {todoAPI} from './API/todoAPI'
import { setTodoForEdit, setTitle, setText } from './action';


export const getTodoforEdit = (id) => async (dispatch) => {
  let todos = await todoAPI.getTodos('/todos')
  let todoForEdit = todos.filter( todo => todo._id === id)[0]
  dispatch(setTodoForEdit(todoForEdit));
  dispatch(setTitle(todoForEdit.title));
  dispatch(setText(todoForEdit.text));
}