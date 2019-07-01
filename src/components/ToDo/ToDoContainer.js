import React from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo';
import { setText, setTitle, fetchTodos, addTodo, deleteTodo, editTodo } from './action';
import { getTitle, getTodoList, getText, getFromStateTodoForEdit } from './selector';


class ToDoContainer extends React.Component {

  componentDidMount() {
    if (!this.props.todos.length) {
      this.props.fetchTodos()
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      if (!!this.props.todo_for_edit) {
        this.props.editTodo({
          id: this.props.todo_for_edit._id,
          title: this.props.title, 
          text: this.props.text
        })
      } else {
      this.props.addTodo({ title: this.props.title, text: this.props.text });
    }}
  };
  
  onOkHandler = () => {
    if (!!this.props.todo_for_edit) {
      this.props.editTodo({
        id: this.props.todo_for_edit._id,
        title: this.props.title, 
        text: this.props.text
      })
    } else {
    this.props.addTodo({ 
      title: this.props.title, 
      text: this.props.text 
    });
    }
  };

  onChangeTitleHandler = (e) => {
    this.props.setTitle(e.target.value)
  };

  onChangeTextHandler = (e) => {
    this.props.setText(e.target.value)
  };

  render() {
    return(
      <ToDo {...this.props}
            onChangeTextHandler={this.onChangeTextHandler}
            onChangeTitleHandler={this.onChangeTitleHandler}
            onOkHandler={this.onOkHandler}
            handleKeyPress={this.handleKeyPress}/>
    ) 
  }
};

const mapStateToProps = state => {
  return {
    title: getTitle(state),
    text: getText(state),
    todos: getTodoList(state),
    todo_for_edit: getFromStateTodoForEdit(state)
  }
};

const mapDispatchToProps = ({
  setText,
  setTitle,
  addTodo,
  fetchTodos,
  deleteTodo,
  editTodo
});

const ToDoContainerWithData = connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);
export default ToDoContainerWithData;