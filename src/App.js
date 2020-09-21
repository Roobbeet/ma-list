import React, {useState} from 'react';
import './App.css';
import ListItem from './components/list/list.component';

const App = () =>{
 const [incomingList, newList] = useState(['Chika', '1234']);
 const [pastItem, doneItem] = useState(['dance', 'jessica']);
 const [currentItem, setCurrent] = useState('')
 
//  const [aaa] = incomingList;

 //handle add list
 const handleAddList = (event) => {
   event.preventDefault();

   if (!incomingList.includes(currentItem) && (!!currentItem)) {
    newList([
     ...incomingList, currentItem
   ]) 
   } else {
    alert('List item is already exist / input field is blank')
   }
   console.log(incomingList);
   setCurrent('');
 }

 //handle past list
 const handlePastList = event => {
  event.preventDefault();
  
  //index untuk nyari item
  const itemIndex = incomingList.findIndex(items => items === 'aaa')
  console.log(itemIndex);

  if(itemIndex >= 0) {
    doneItem([
      ...pastItem, incomingList[itemIndex]
    ])
    incomingList.filter(!incomingList[itemIndex]);
   
    console.log(incomingList);
  }
   

 }

 //state sementara
 const handleChange = async event => {
   const {value} = await event.target
    setCurrent(value);
    // console.log(value)
 }
 
 const getItem = () => {
  
 }

 //RESET FIELD
 const resetField = () => {
  newList([]);
  doneItem([]);
 }

    return (
      <div className="App">
        <h1 className="title">Ma-Listo</h1>
      <form onSubmit={handleAddList} >
        <label>
          <input className="inputField" type="text" name="name" onChange={handleChange} placeholder="New List Here!"/>
        </label>
        <input type="submit" value="Submit" className="btn"/>
      </form>
      
      <button className="reset-btn btn" onClick={resetField}>RESET ALL</button>
      
      <div className="List">
      <div className="New list-container">
      <h2 className="list-title">Incoming</h2>
      {
        incomingList ?
          incomingList.map(
          (item) => (<ListItem handlePastList={handlePastList}
            key={item} item={item}></ListItem>)) : null
      } 
      </div>
      <div className="Old list-container">
      <h2 className="list-title">Done</h2>
        {
          pastItem ?
          pastItem.map(
          (item) => (<h3 className="pastItem" key={item}>{item}</h3>)) : null
        }
      </div>
      </div>
      </div>
    )
    
}

export default App;
