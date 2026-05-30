import { useEffect, useState } from "react"
import { useFetch } from "./hooks/useFetch"
 
function App() {
  const [currentPost,setCurrentPost] = useState(1);
  const {finalData,loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`);
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
    </div>
  )
}

export default App
