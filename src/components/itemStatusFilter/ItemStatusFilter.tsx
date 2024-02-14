import React from "react";

const ItemStatusFilter =({active, setActive}) =>{
    const buttons = [
        {name: "all", label: "All"},
        {name: "active", label: "Active"},
        {name: "done", label: "Done"},
    ]

    return(
        <div className='btn-group'>
            {
                buttons.map(({name, label})=>{
                    const classNames = active === name ? "btn btn-sm btn-outline-success active" : "btn btn-sm btn-outline-success";
                   return (<button type="button" key={name} onClick={()=>setActive(name)} className={classNames}> {label} </button>)
                })
            }
        </div>
    )
}

export default ItemStatusFilter