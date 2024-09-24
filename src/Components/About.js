import { useContext } from "react";
import User from "./User";
import Userclass from "./Userclass";
import UserContext from "../../utils/UserContext";

const About=()=>{
//................the createContext send the data,by useContext we can catch it.............................
    const {loggedIn}=useContext(UserContext); //useContext is object so object destructuring to get the value.....

    

//>>>.............. MAIN CODE ..........................................................................
    return (
        <div className="about">
            <h1 className="aboutus font-bold">About Us</h1>
            <div className="aboutcard font-bold text-xl">
                <User name={"Akshay Saini"} location={"New Delhi"} email={"sainiakshay19@gmail.com"}/>
                <Userclass name={loggedIn} location={"Bhopal"} email={"namdevanshul45@gmail.com"}/>
            </div>
        </div>
    );
};

export default About;