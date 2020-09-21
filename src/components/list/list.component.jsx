import React from 'react';
import './list.styles.css'

const ListItem = ({item, isDone, handleDone}) => {
    return(
        <div className="item-container" onClick={() => handleDone(item)}>
            <h2 className={`item-name ${isDone ? 'done-task' : ''}`} >{item}</h2>
            <div className="remove-button" ><i className="far fa-times-circle"></i></div>
        </div>
    )
}

export default ListItem;