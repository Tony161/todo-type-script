import React from "react";
import './toDoListItem.css'
// import {logDOM} from "@testing-library/react";

function ToDoListItem({title, changeData, id, onToggleDone, onToggleImportant, done, important}) {
    let classNames = important && done ? "todo-list-item done important" : done ? "todo-list-item done" : important ? "todo-list-item important" : "todo-list-item";

    const onTitleClick = () => {
        onToggleDone(id)
    }

    const onMarkImportant = () => {
        onToggleImportant(id)
    }

    return (
        <span className={classNames}>
      <span
          className="todo-list-item-label"
          onClick={onTitleClick}
      >
        {title}
      </span>

      <button type="button"
              onClick={()=>changeData(id)}
              className="btn btn-outline-success btn-sm float-sm-end">
        <i className="bi bi-bag-x"></i>
      </button>

      <button type="button"
              onClick={onMarkImportant}
              className="btn btn-outline-danger btn-sm float-sm-end">
        <i className="bi bi-exclamation-lg"></i>
      </button>
    </span>)

}

export default ToDoListItem