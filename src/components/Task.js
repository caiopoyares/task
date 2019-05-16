import React from "react";
import classnames from "classnames";

const Task = props => {
  return (
    <li>
      <div
        className="task__container"
        onClick={props.handleTaskClick.bind(this, props.id)}
      >
        <div
          className={classnames("task__box", { completed: props.completed })}
        >
          {props.completed ? "✔" : null}
        </div>
        <span className="task__text">{props.children}</span>
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
