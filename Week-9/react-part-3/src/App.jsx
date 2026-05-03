
function App() {

  return (
    <div style={{backgroundColor:"#dfe6e9",height : "100vh"}} >
      <div style={{display:"flex",justifyContent:"center"}}>
        <div>
          <PostComponent/>
          <PostComponent/>
        </div>
      </div>
    </div>
  )
}

const style = {width:200, backgroundColor:"white",borderRadius:10,borderColor:"gray",borderWidth:1,padding:20,margin:20}

function PostComponent(){
  return( 
  <div style={style}>
    <div style={{display:"flex"}} >
    <img src={"https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg"} style ={{
      width:30,
      height:30,
      borderRadius:20,
    }} />
    <div style={{fontSize:10,marginLeft:10}}>
      <b>100xdevs</b>
      <div>23,888 followers</div>
      <div>12m</div>
    </div>
    </div>
    <div style={{fontSize:14}} >
      want to know how to win big? check out how these folks won $6000 in bounties.
    </div>
  </div>
  )
}

export default App
