import React, {useState} from "react";
import "./itemAddForm.css"

const ItemAddForm = ({addItem}) =>{
    const [title, changeTitle] =useState('')
    const onTitleChangeHandler=(e)=> {
        changeTitle(e.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        addItem(title);
        changeTitle("")
    }

    return(
        <form className='item-add-form d-flex' onSubmit={onSubmit}>
            <input
                type="text"
                className="form-control"
                onChange={onTitleChangeHandler}
                placeholder="What needs to be done"
                value={title}
            />
            <button type="submit" className='btn btn-sm btn-outline-secondary'> Add item </button>
        </form>
    )
}

export default ItemAddForm