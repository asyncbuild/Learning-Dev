import React from 'react';

const App = () => {
  const todos =[
    {
      id:1,
      title : "Hit the gym",
      done : false 
    },
    {
      id:2,
      title : "Eat Breakfast",
      done : true 
    }
  ]
  const todoComponents = todos.map(todo => <Todo title = {todo.title} done = {todo.done} /> )
    return (
        <div>
          {todoComponents}
        </div>
    );
};

function Todo({title,done}){
  return (
    <div>
      {title} - {done ? "Done!" : "Not Done" }
    </div>
  )
}

export default App;
