import { useEffect, useState } from "react"

function App() {
  //conditional rendering
  const [counterVisible,setCounterVisible] = useState(true)

  useEffect(function(){
    setInterval(function(){
      setCounterVisible(c => !c)
    },5000)
  },[])

  return (
    <div>
      <b> Hi there </b>
      { counterVisible && <Counter></Counter>}
      <b> Hello </b>
    </div>
  )
}



function Counter(){
  const [count,setCount] = useState(0)

  useEffect(function(){
    console.log("on mount");
    
    let clock = setInterval(() => {
      console.log("from inside setInterval");
      setCount(count => count+1)
    }, 1000);
    
    return function(){
      console.log("on unmount");
      clearInterval(clock)
    }
  },[])

  
  // function increaseCount(){
  //   setCount(count+1)
  // }

  // function decreaseCount(){
  //   setCount(count-1)
  // }
  // function resetCount(){
  //   setCount(0)
  // }

  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={increaseCount}  >Increase Count</button>
      <br />
      <button onClick={decreaseCount} >Decrease Count</button>
      <br />
      <button onClick={resetCount} >Reset Count</button> */}
    </div>
  )
}

export default App
