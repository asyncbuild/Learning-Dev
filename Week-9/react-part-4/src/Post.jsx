
const style = {width:200, backgroundColor:"white",borderRadius:10,borderColor:"gray",borderWidth:1,padding:20,margin:20}

export function PostComponent({name,subTitle,time,image,description}){
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