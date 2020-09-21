import React from 'react';
import './list.styles.css'

const ListItem = ({item, handlePastList}) => {
    return(
        <div className="item-container">
            <h3 className="item-name" >{item}</h3>
            <div className="remove-button" onClick={handlePastList}><i className="far fa-times-circle"></i></div>
        </div>
    )
}

export default ListItem;