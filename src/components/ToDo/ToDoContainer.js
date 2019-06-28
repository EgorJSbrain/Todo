import React from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo';
import { setText, setTitle, fetchTodos, addTodo, deleteTodo } from './action';
import { getTitle, getTodoList, getText } from './selector';


class ToDoContainer extends React.Component {

  componentDidMount() {
    if (!this.props.todos.length) {
      this.props.fetchTodos()
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      this.props.addTodo({ title: this.props.title, text: this.props.text });
      this.props.setTitle('')
      this.props.setText('')
    }
  }
  
  onOkHandler = () => {
    this.props.addTodo({ title: this.props.title, text: this.props.text });
    this.props.setTitle('')
    this.props.setText('')
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
  }
};

const mapDispatchToProps = ({
  setText,
  setTitle,
  addTodo,
  fetchTodos,
  deleteTodo
});

const ToDoContainerWithData = connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);
export default ToDoContainerWithData;