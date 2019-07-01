import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import todoReducer from './components/ToDo/toDoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './components/ToDo/saga';


const rootReducer = combineReducers({
  todo: todoReducer,
});

const sagaMiddleware = createSagaMiddleware();
const midlewares = [sagaMiddleware, thunk];
const store = createStore(rootReducer, composeWithDevTools((applyMiddleware(...midlewares))));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>, 
  document.getElementById('root'));












// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
