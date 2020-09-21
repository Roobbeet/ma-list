import React, {useState, useEffect} from 'react';
import './App.css';
import ListItem from './components/list/list.component';

const App = () =>{

 const [list, newList] = useState([{name: '', isDone: false}]);
 const [isDone, setDone] = useState(false);
 const [currentItem, setCurrent] = useState('');
 const [title, setTitle] = useState('')

 
 useEffect(() => {
  const lastList = localStorage.getItem('lastItem');
  if (lastList) {
    newList([...list, lastList]);
  }
  newList([])
  // localStorage.getItem('title')
 }, []) 

 useEffect(() => {  
    // localStorage.setItem('title', title)
 }, [])
 

 //handle add list
 const handleAddList = (event) => {
   event.preventDefault();
   event.target.reset();

   if (!list.includes(currentItem) && (!!currentItem)) {
    newList([
     ...list, {name: currentItem, isDone}
   ]) 
   } else {
    alert('List item is already exist / input field is blank')
   }
   console.log(list);
   setCurrent('');
   localStorage.setItem('lastItem', list)
 }

 //state sementara
 const handleChange = async event => {
   const {value} = await event.target
    setCurrent(value);
    // console.log(value)
 }
 //set done
 const handleDone = (item) => {
  list.filter(name => name.name !== item);
  newList([
    ...list.filter(name => name.name !== item), {name: item, isDone: true}
  ])
 }
//set Title
const handleTitle = async event => {
  event.preventDefault();
  const {value} = await event.target;
  setTitle(value)
}
 
 //RESET FIELD
 const resetField = () => {
  newList([]);
 }

    return (
      <div className="App">
        <h1 className="title">MA-Listo</h1>
      <form className="title-form">
        <label>
          <input className="title-field" type="text" name="name" onChange={handleTitle} defaultValue="" onSubmit={(event) => event.preventDefault()} placeholder="List Name Here"/>
        </label>
      </form>
      <form onSubmit={handleAddList} >
        <label>
          <input className="inputField" type="text" name="name" onChange={handleChange} defaultValue="" placeholder="New List Here!"/>
        </label>
        <input type="submit" value="Submit" className="btn"/>
      </form>
      
      <button className="reset-btn btn" onClick={resetField}>RESET ALL</button>
      
      <div className="List">
      <div className="New list-container">
      <h2 className="list-title">{title} List</h2>
      {
        list ?
          list.map(
          (item) => (<ListItem isDone={item.isDone} handleDone={handleDone}
            key={item.name} item={item.name}></ListItem>)) : null
      } 
      </div>
      </div>
      </div>
    )
    
}

export default App;


//index untuk nyari item
  /*
  const itemIndex = incomingList.findIndex(items => items === 'aaa')
  console.log(itemIndex);

  if(itemIndex >= 0) {
    doneItem([
      ...pastItem, incomingList[itemIndex]
    ])
    incomingList.filter(!incomingList[itemIndex]);
   
    console.log(incomingList);
  }
   */