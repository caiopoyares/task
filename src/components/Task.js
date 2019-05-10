import React from "react";

const Task = props => {
  return (
    <li>
      <input className="checkbox" type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.children}</label>
      <span
        className="delete_btn"
        onClick={props.handleDelete.bind(this, props.id)}
      >
        &times;
      </span>
    </li>
  );
};

export default Task;
