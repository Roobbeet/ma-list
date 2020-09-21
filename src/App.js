import React, {useState, useEffect} from 'react';
import './App.css';
import ListItem from './components/list/list.component';

const App = () =>{

 const [incomingList, newList] = useState([{name: '', isDone: false}]);
 const [isDone, setDone] = useState(false);
 const [currentItem, setCurrent] = useState('');
 
 useEffect(() => {
  newList([])
 }, []) 
 

 //handle add list
 const handleAddList = (event) => {
   event.preventDefault();

   if (!incomingList.includes(currentItem) && (!!currentItem)) {
    newList([
     ...incomingList, {name: currentItem, isDone}
   ]) 
   } else {
    alert('List item is already exist / input field is blank')
   }
   console.log(incomingList);
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
  incomingList.filter(name => name.name !== item);
  newList([
    ...incomingList.filter(name => name.name !== item), {name: item, isDone: true}
  ])
 }

 
 //RESET FIELD
 const resetField = () => {
  newList([]);
 }

    return (
      <div className="App">
        <h1 className="title">MA-Listo</h1>
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