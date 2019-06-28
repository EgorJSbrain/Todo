import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import styles from './App.module.css';
// import Home from './components/Home/HomeContainer';
import ToDo from './components/ToDo/ToDoContainer';


const App = (props) => {
  return (
    <div>
      <div>
        {/* <NavLink exact to='/'>На главную</NavLink> */}
        {/* <NavLink to='/about'>О нас</NavLink> */}
        {props.location.pathname !== '/todo' ? <div className={styles.wrapper}><NavLink to='/todo' className={styles.text}>Todo</NavLink></div> : null}
      </div>
      {/* <Route exact path='/' render={ () => <Home />} />
      <Route path='/about' render={ () => <About/>} /> */}
      <Route path='/todo' render={ () => <ToDo/>} />
    </div>
  );
}

export default withRouter(App);
