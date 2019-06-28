import React from 'react';
import styles from './styles/ToDo.module.css'
import ToDoComponent from '../ToDoComponent/ToDoComponent'



class ToDo extends React.Component {

  
  render() {
    let {todos, text, title} = this.props
    let todosList = todos.map(todo => <ToDoComponent key={todo._id} title={todo.title} text={todo.text} id={todo._id} deleteTodo={this.props.deleteTodo}/>)
    
    return (<>
      <div className={styles.wrapped}>
        <div>
          <div className={styles.counter}>  
            <div>Заданий: {todos.length} </div>  
          </div>
          <div >
            <input type="text" 
                   name="title" 
                   className={styles.titleblock}
                   onChange={(e) => {this.props.onChangeTitleHandler(e)}}
                   placeholder="Введите имя"
                   value={title}
                   onKeyPress={(e) => this.props.handleKeyPress(e)}/>
          </div>
          <div>
            <textarea type="text" 
                      name="description"
                      className={styles.descriptionblock}
                      onChange={(e) => {this.props.onChangeTextHandler(e)}}
                      onKeyPress={(e) => this.props.handleKeyPress(e)}
                      placeholder="Введите описание"
                      value={text}/>
          </div>
        </div>
        <div>
          <div onClick={() => this.props.onOkHandler()}
               className={styles.buttonsend}
          >Отправить</div>
        </div>
      </div>
      <div className={styles.todoblock}>
        {todosList}
      </div>
    </>
    );
  }
};

export default ToDo;