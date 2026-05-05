
function App() {

  return (
    <div style={{backgroundColor:"#dfe6e9",height : "100vh"}} >
      <div style={{display:"flex",justifyContent:"center"}}>
        <div>
          <PostComponent
          name = {"deepesh"}
          subTitle={"20 followers"}
          time={"2m ago"}
          image={"https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg"}
          description={"want to know how to win big? check out how these folks won $6000 in bounties."}
          />
          <PostComponent
          name = {"deepesh"}
          subTitle={"Promoted"}
          image={"https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg"}
          description={"want to know how to win big? check out how these folks won $6000 in bounties."}
          />
        </div>
      </div>
    </div>
  )
}
// 
const style = {width:200, backgroundColor:"white",borderRadius:10,borderColor:"gray",borderWidth:1,padding:20,margin:20}

function PostComponent({name,subTitle,time,image,description}){
  return( 
  <div style={style}>
    <div style={{display:"flex"}} >
    <img src={image} style ={{
      width:30,
      height:30,
      borderRadius:20,
    }} />
    <div style={{fontSize:10,marginLeft:10}}>
      <b>{name}</b>
      <div>{subTitle}</div>
      {time && <div style={{display:"flex"}}>
        <div>{time}</div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpnI8Sc5HWqacwpAAYMTDIHDqVIcR6GCOeg&s" style={{height:15,width:15,paddingLeft:5}} />
      </div>}
    </div>
    </div>
    <div style={{fontSize:14}} >
      {description}
    </div>
  </div>
  )
}

export default App
