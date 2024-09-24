import React from "react"
import { SlLike } from "react-icons/sl";

class Userclass extends React.Component{   //class componentname extends react.component{ constructor(props) {super(props)} }
    constructor(props){
        super(props);
         
        this.state={
            count:208,
        };
        
    }
    render(){
        const {name,location,email}=this.props;
       const {count} =this.state;
        return (
            <div className="userclass">
            <h1 style={{fontSize:"22px",color:"orangered"}}>{count}</h1>
            <div style={{fontSize:"22px",color:"red"}} onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}><SlLike/></div>
             <h2>Name : {name} </h2>
             <h2>Location : {location} </h2>
             <h2>e-mail : {email} </h2>
        </div>
        )
    }
}

export default Userclass