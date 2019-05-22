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
      todos: [{ id, task, completed: false }].concat(state.todos)
    }));
  };

  handleDelete = id => {
    this.setState(state => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  handleTaskClick = id => {
    this.setState(state => ({
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    }));
  };

  componentDidMount() {
    let todos;
    if (localStorage.tasks) {
      todos = localStorage.getItem("tasks");
      this.setState({ todos: JSON.parse(todos) });
    } else {
      todos = [];
      this.setState({ todos });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("tasks", JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <div className="TodoList_container">
        <h1>Tarefas</h1>
        <p className="subtitle">Just do it!</p>
        <AddTask handleSubmit={this.handleSubmit} />
        <ul className="TodoList">
          {this.state.todos.map(todo => {
            return (
              <Task
                key={todo.id}
                id={todo.id}
                handleDelete={this.handleDelete}
                completed={todo.completed}
                handleTaskClick={this.handleTaskClick}
              >
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
