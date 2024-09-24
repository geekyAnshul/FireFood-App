import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useOnlinestatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";



const Header=()=>{
    const [log,setlog]=useState("login");
    const onlineStatus = useOnlinestatus();
    const cartItems = useSelector((store)=>store.cart.items);
    return ( 
        <div className='header sticky top-0 z-10' >
            <div className='logo'>
                <img src='https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-1536x1536.png'></img> 
                
            </div>

            <div className='menu'>
            <h2 className="online">Online Status: {(onlineStatus===true) ? "🟢":"🔴" }</h2>
                <Link className="link" to='/'><h1>Home</h1></Link>
                <Link className="link" to='/grocery'><h1>Grocery</h1></Link>
                {/* <Link className="link" to='/contact'><h1>Contact Us</h1></Link> */}
                <Link className="link" to='/about'><h1>About Us</h1></Link>
                <Link className="link flex" to='/cart'><FaShoppingCart className=" w-9 px-1"/> <h1 className="e text-xs">{cartItems.length} items</h1></Link>
                <div className="login" onClick={()=>{
                     log==="login" ?  setlog("LogOut") : setlog("Login")
                }}>{log}</div>
                
            </div>
            
        </div>
    )
}

export default Header;