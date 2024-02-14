import React from "react";
import ToDoListItem from "../toDoListItem/ToDoListItem";
import './toDoList.css'

const ToDoList = ({todos, changeData, onToggleDone, onToggleImportant}) => {
    const buildToDoList =(todos) =>{
      return todos.map(({id, ...itemProps}) => <li className="list-group-item todo-list-group-item" key={id}>
          <ToDoListItem
              {...itemProps}
              changeData={changeData}
              onToggleDone={onToggleDone}
              onToggleImportant={onToggleImportant}
              id={id}
          />
      </li>
        )
    }
    return (<ul className="list-group todo-list">
        {buildToDoList(todos)}
    </ul>)
}

export default ToDoList