import { useState } from "react";
import { SlLike } from "react-icons/sl";

const User=({name,location,email})=>{
    const [count,setCount]=useState(264);
    return (
       
        <div className="user">
            <h1 style={{fontSize:"22px",color:"red"}}>{count}</h1>
            <div style={{fontSize:"22px",color:"red"}} onClick={()=>{
                setCount(count+1)
            }}><SlLike/></div>
             <h2>Name : {name}</h2>
             <h2>Location : {location} </h2>
             <h2>e-mail : {email}  </h2>
        </div>
    )
};
export default User;