import { useState } from "react"

const User = ({Name,Location,About}) => {

const User = ({Name}) => {
 const[count,setcount] = useState(0)
 const[count2] = useState(1)
}



 return(
  <div className="user-card">
   <h2>NAME : {Name}</h2>
   <h3>LOCATION : {Location}</h3>
   <h4>CONTACT : {About}</h4>
  </div>
 )
}

export default User