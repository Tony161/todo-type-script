import React, {useState} from "react";
import AppHeader from "./components/appHeader";
import ToDoList from "./components/toDoList";
import SearchPanel from "./components/searchPanel";
import ItemStatusFilter from "./components/itemStatusFilter";
import './App.css';
import ItemAddForm from "./components/itemAddForm";

function App() {
    const [toDoData, setData] =useState( [
        {id: 1, title:"Drink Coffee", important: false, done: false },
        {id: 2, title:"Learn React", important: true, done: false},
        {id: 3, title:"Sleep", important: false, done: false}
    ])

    const [search, changeSearch] = useState('')
    const [active, setActive]= useState('all')

    const visibleItems = toDoData.filter(({title}) => title.toLowerCase().includes(search.toLowerCase()))
    const filterItem =  active === 'all' ? visibleItems :
            active === 'done' ? visibleItems.filter(item=> item.done) :
            visibleItems.filter(item=> !item.done)
    const createToDoItem = (title) => ({
        id: toDoData.length +1,
        done: false,
        important: false,
        title
    })

    const changeData = (id)=> {
        const data = toDoData.filter(item=> item.id !== id)
        setData(data)
    }

    const addItem = (title) => {
        const newItem = createToDoItem(title)
        setData([...toDoData, newItem])
    }

    const toggleProperty = (id, prop) =>{
        const index = toDoData.findIndex(item=> item.id === id)
        const oldItem = toDoData[index]
        const newItem = {...oldItem, [prop]: !oldItem[prop]}

        setData([
            ...toDoData.slice(0, index),
            newItem,
            ...toDoData.slice(index+1),
        ])
    }

    const onToggleDone = (id) => {
        toggleProperty(id, "done")
    }

    const onToggleImportant = (id) => {
        toggleProperty(id, "important")
    }

    const doneCount = toDoData.filter(item=> item.done).length
    const todoCount = toDoData.length - doneCount;

  return (
    <div className="todo-app">
        12121
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
            <SearchPanel changeSearch={changeSearch} />
            <ItemStatusFilter setActive={setActive} active={active} />
        </div>

        <ToDoList
            todos={filterItem}
            changeData={changeData}
            onToggleDone={onToggleDone}
            onToggleImportant={onToggleImportant} />
        <ItemAddForm addItem={addItem} />
    </div>
  );
}

export default App;
