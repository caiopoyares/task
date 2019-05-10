import React from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import uuid from "uuid";

class TodoList extends React.Component {
  state = {
    todos: []
  };

  handleSubmit = task => {
    const id = uuid();
    this.setState(state => ({
      todos: state.todos.concat([{ id, task }])
    }));
  };

  handleDelete = id => {
    this.setState(state => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  render() {
    return (
      <div className="TodoList_container">
        <h1>Tarefas</h1>
        <p className="subtitle">Just do it!</p>
        <AddTask handleSubmit={this.handleSubmit} />
        <ul className="TodoList">
          {this.state.todos.map(todo => {
            return (
              <Task key={todo.id} id={todo.id} handleDelete={this.handleDelete}>
                {todo.task}
              </Task>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
