import { put, takeEvery, all } from 'redux-saga/effects';
import { FETCH, ADD_TODO, DELETE_TODO, EDIT_TODO } from './constants';
import { todoAPI } from './API/todoAPI';
import { setToDos, setTitle, setText } from './action';

function* watchFetchTodos() {
  yield takeEvery(FETCH, fetchTodosAsync);
  yield takeEvery(ADD_TODO, addTodoToServer);
  yield takeEvery(DELETE_TODO, deleteTodo);
  yield takeEvery(EDIT_TODO, editTodo);
};


function* fetchTodosAsync(action) {
    const data = yield todoAPI.getTodos(action)
    yield put(setToDos(data))
};

function* addTodoToServer(action) {
    yield todoAPI.addTodo(action)
    yield fetchTodosAsync()
    yield put(setTitle(''))
    yield put(setText(''))
};

function* editTodo(action) {
    yield todoAPI.edit(action)
    yield fetchTodosAsync()
    yield put(setTitle(''))
    yield put(setText(''))
};

function* deleteTodo(action) {
  yield todoAPI.delete(action)
  yield fetchTodosAsync()
};

export default function* rootSaga() {
  yield all([
    watchFetchTodos()
  ])
}