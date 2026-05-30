import { useEffect, useState } from "react"
import { useFetch, usePost } from "./hooks/useFetch"
 
function App() {
  const post = useFetch('https://jsonplaceholder.typicode.com/posts/3');
  return (
    <div>
      {/*if u want to display an json object, JSON.stringify() it */ }
      {/* {JSON.stringify(post)} */}
      {post.title}
    </div>
  )
}

export default App
