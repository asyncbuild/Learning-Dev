import { useState } from "react"
import { PostComponent } from "./Post"

function App() {

  const [posts,setPosts] = useState([])
  
  // const posts = [{
  //   name:"kirat",
  //   subTitle:"100 followers",
  //   time:"2m ago",
  //   image:"https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg",
  //   description:"Want to know how to win big? check out how these folks won $6000 in bounties."
  // }]

  const postComponents = posts.map(post => 
    <PostComponent
        name = {post.name}
        subTitle={post.subTitle}
        time={post.time}
        image={post.image}
        description={post.description}
      />
  )

  function addPost(){
    setPosts([...posts,{
      name:"kirat",
      subTitle:"100 followers",
      time:"2m ago",
      image:"https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg",
      description:"Want to know how to win big? check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{backgroundColor:"#dfe6e9",height : "100vh"}} >
      <button onClick={addPost} >Add Post</button>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}

export default App
