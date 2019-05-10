import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div className="TodoList_container">
        <h1>Tarefas</h1>
        <p className="subtitle">Just do it!</p>
        <ul className="TodoList">
          <li>
            <input className="checkbox" type="checkbox" id="checkbox_1" />
            <label for="checkbox_1">Lavar carro</label>
            <span className="delete_btn">&times;</span>
          </li>
          <li>Fazer almoço</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
