import React from 'react';
import './add-bar.styles.css';

const AddBar = ({handleAddList, handleChange}) => {
    
    
    return (
        <form onSubmit={handleAddList}>
        <label>
          New Item
          <input type="text" name="name" onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
)
}

export default AddBar;