import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos,setTodos] = useState([{
    title : " Go to gym",
    description : "Hit the gym regularly ",
    done : false 
  }])

  function addTodo(){
    let newArray = [];

    for(let i=0;i<todos.length;i++){
      newArray.push(todos[i])
    }

    newArray.push({
      title: document.getElementById('title').value,
      description: document.getElementById('Description').value,
      done:true,
    })
    setTodos(newArray)
  }

    return (
    <div>
      <input id='title' type='text' placeholder='Title'></input>
      <input id='Description' type='text' placeholder='Description'></input>
      <br/>
      <button onClick={addTodo}>Add Todo</button>
      <br/>
      {todos.map((todo) =>( <Todo title={todo.title} description={todo.description} done={todo.done} />))}
    </div>
  );
}

function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2> {props.description} </h2>
      <h1> {props.done} </h1>
    </div>
  )
}
export default App;
