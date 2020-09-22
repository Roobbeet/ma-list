import React, {useState, useEffect} from 'react';
import './App.css';
import ListItem from './components/list/list.component';

const App = () =>{

 const [list, newList] = useState([{name: '', isDone: false}]);
 const [past, newPast] = useState([{name: '', isDone: true}])
 const [isDone, setDone] = useState(false);
 const [currentItem, setCurrent] = useState('');
 const [title, setTitle] = useState('')

 
 useEffect(() => {
  const lastItems = JSON.parse(localStorage.getItem('listItem'));
  const lastTitle = JSON.parse(localStorage.getItem('listTitle'));
  console.log(lastItems);
  if(lastItems && lastTitle) {
    newList(lastItems, [...list]);
    setTitle(lastTitle);
  }
  console.log(list);
 }, []) 

 /*
 useEffect(() => {
  alert('ComponentDidMount');
  return () => {
    
    localStorage.setItem('listItem', JSON.stringify(list));
  }
 }, []) */

 //handle add list
 const handleAddList = async event => {
   event.preventDefault();
   await event.target.reset();

   if (!list.includes(currentItem) && !past.includes(currentItem) && (!!currentItem)) {
    newList([
      {name: currentItem, isDone}, ...list, 
   ]) 
   } else {
    alert('List item is already exist / input field is blank')
   }
   console.log(list);
   setCurrent('');
 }

 //state sementara
 const handleChange = async event => {
   const {value} = await event.target
    setCurrent(value);
    // console.log(value)
 }
 //set done
 const handleDone = (item) => {
  newPast([...past, {name: item, isDone: true}])
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
  localStorage.clear();
  newList([]);
  console.log(list);
  }
  
 //SAVE LIST {
 const saveList = () => {
   alert('Your list is saved on the local storage, dont worry');
   console.log(list)
   localStorage.setItem('listItem', JSON.stringify(list));
   localStorage.setItem('listTitle', JSON.stringify(title));
 }  

    return (
      <div className="App">
        <h1 className="title">MA-Listo</h1>
      <form className="title-form">
        <label>
          <input className="title-field" type="text" name="name" onChange={handleTitle} defaultValue="" onSubmit={(event) => event.preventDefault()} placeholder="List Title Here e.g. PC Build"/>
        </label>
      </form>
      <form onSubmit={handleAddList} >
        <label>
          <input className="inputField" type="text" name="name" onChange={handleChange} defaultValue="" placeholder="New Item Here! e.g. RTX 3080"/>
        </label>
        <input type="submit" value="Submit" className="btn"/>
      </form>
      
      <button className="reset-btn btn" onClick={resetField}>RESET</button>
      <button className="reset-btn btn" onClick={saveList}>SAVE LIST</button>
      
      
      <div className="List">
      <div className="New list-container">
      <h2 className="list-title">{title} List</h2>
      {
        list ?
          list.map(
          (item) => (item.name ? <ListItem isDone={item.isDone} handleDone={handleDone}
            key={`${item.name}`} item={item.name}></ListItem> : null)) : null
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