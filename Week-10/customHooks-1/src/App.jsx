import { useEffect, useState } from "react"
import { usePost } from "./hooks/useFetch"
 
function App() {
  const post = usePost();
  return (
    <div>
      {post.title}
    </div>
  )
}

export default App
