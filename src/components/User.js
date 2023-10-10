import { useEffect, useState } from "react"

const User = ({Name,Location,About}) => {
 const[coutn,setCount] = useState(0)
 const[count2] = useState(1)

 useEffect(()=>{
  //API CALL
 },[])

 return(
  <div className="user-card">
   <h2>NAME : {Name}</h2>
   <h3>LOCATION : {Location}</h3>
   <h4>CONTACT : {About}</h4>
  </div>
 )
}

export default User