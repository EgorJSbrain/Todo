import React from 'react';
import { connect } from 'react-redux';
import { format} from 'date-fns'
import styles from './styles/ToDoComponent.module.css';
import { deleteTodo } from '../ToDo/action';
import { getTodoforEdit } from '../ToDo/thunk';



class ToDoComponent extends React.Component {

  onEditTodoHendler = () => {
    this.props.getTodoforEdit((this.props.todoObject._id))
  }

  render() {
    let todo = this.props.todoObject
    return(
      <div className={styles.wrapper}>
       
        <div className={styles.ce_block}>
        <div className={styles.time}>
          Время создания: { format((todo.createdAt), 'DD.MM.YYYY') }
        </div>
          <div className={styles.edit}
               onClick={() => this.onEditTodoHendler()}>
            <img src={'img/pencil.svg'} alt=''/>
          </div>
          <div className={styles.close}
               onClick={() => this.props.deleteTodo(todo.id)}>
           <img src={'img/close.svg'} alt=''/>
          </div>
        </div>

        <div className={styles.text_block}>
          <div className={styles.title}>
            { (todo.title.length > 40) ? todo.title.substring(0, 40) + '...' : todo.title}
          </div>
          <div className={styles.description}>
            { (todo.text.length > 108) ? todo.text.substring(0, 108) + '...' : todo.text}
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    
  }
};

const mapDispatchToProps = ({
  deleteTodo,
  getTodoforEdit
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoComponent);