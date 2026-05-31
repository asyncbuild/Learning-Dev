import { useEffect, useState } from "react"
import { useFetch } from "./hooks/useFetch"
// import { usePrev } from "./hooks/usePrev";
 
function App() {
  const [currentPost,setCurrentPost] = useState(1);
  const {finalData,loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`);
  // const [count,setCount] = useState(0);
  // const prev = usePrev(count)
  if(loading){
    return <div>Loading......</div>
  }
  return (
    <div>
      {/*if u want to display an json object, JSON.stringify() it */ }
      {/* {JSON.stringify(post)} */}
      <button onClick={()=>setCurrentPost(1)} >1</button>
      <button onClick={()=>setCurrentPost(2)} >2</button>
      <button onClick={()=>setCurrentPost(3)} >3</button>
      <br />
      {finalData.title}
      <br />
      {/* <button onClick={()=>setCount(count+1)} >+</button>
      <h1>Current Count: {count}</h1>
      <h1>Previous Count: {prev}</h1> */}
    </div>
  )
}

export default App
