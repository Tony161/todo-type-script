import React from "react";
import './searchPanel.css'

const SearchPanel = ({changeSearch})=>{
    const searchChangeHandler = (e) => {
        changeSearch(e.target.value)
    }
    return (<input className='search-input' onChange={searchChangeHandler} placeholder={"search"}/>)
}

export default SearchPanel