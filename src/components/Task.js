import React from "react";

const Task = props => {
  return (
    <li>
      <div>
        <input className="checkbox" type="checkbox" id={props.id} />
        <label htmlFor={props.id}>
          <span className="task__text">{props.children}</span>
        </label>
      </div>
      <div className="delete_box">
        <span
          className="delete_btn"
          onClick={props.handleDelete.bind(this, props.id)}
        >
          &times;
        </span>
      </div>
    </li>
  );
};

export default Task;
