import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/ToDoComponent.module.css';
import { getTodo } from '../ToDo/selector';
import { deleteTodo } from '../ToDo/action';
import { getTodoforEdit } from '../ToDo/thunk';



class ToDoComponent extends React.Component {
  onEditTodoHendler = () => {
    this.props.getTodoforEdit((this.props.id))
  }
  render() {
    return(
      <div className={styles.wrapper}>
        <div className={styles.ce_block}>
          <div className={styles.edit}
               onClick={() => this.onEditTodoHendler()}>
            <img src={'img/pencil.svg'} alt=''/>
          </div>
          <div className={styles.close}
               onClick={() => this.props.deleteTodo(this.props.id)}>
           <img src={'img/close.svg'} alt=''/>
          </div>
        </div>

        <div className={styles.text_block}>
          <div className={styles.title}>
            { (this.props.title.length > 40) ? this.props.title.substring(0, 40) + '...' : this.props.title}
          </div>
          <div className={styles.description}>
            { (this.props.text.length > 108) ? this.props.text.substring(0, 108) + '...' : this.props.text}
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    todo: getTodo(state),
  }
};

const mapDispatchToProps = ({
  deleteTodo,
  getTodoforEdit
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoComponent);