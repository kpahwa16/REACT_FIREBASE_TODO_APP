import React,{useState , useEffect} from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import ToDo  from './ToDo';
import db from "./firebase";
import firebase from 'firebase/compat/app';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc' ).onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id : doc.id,  text: doc.data().text})))
    })
  },[]);
 
  const addToDo = (event) => {
    event.preventDefault();
    db.collection('todos').add(
      {
        text : input ,
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
      }
    )

    
    setTodos([...todos, input]);
    setInput('');
    console.log(todos);
  }

  // when the app loads, we need to listen to the database and fetch new todos  as they get added / removed 
  
  

  return (
    <div className="App">
      <h1> Hello Hustlers!!! 🤖  </h1> 
      <form> 
        <FormControl>
          <InputLabel> ✔ Write a ToDo </InputLabel>
          <Input value = {input} onChange = {event => setInput(event.target.value)} />
        </FormControl>
        
        <Button disabled = {!input} type = "submit" onClick = {addToDo} variant="contained" color="primary">
          Add ToDO Item
        </Button>
        {/* <button type = "submit" onClick = {addToDo}> Add ToDO Item </button> */}
     
      </form>
      <ul>
        {todos.map(todo => (
          <ToDo text = {todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
