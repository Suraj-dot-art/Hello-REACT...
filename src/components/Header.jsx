import { LOGO_URL } from "../utils/contants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import cartSlice from "../utils/cartSlice";


const Header = () => {
    const [buttonName , setbuttonName] = useState("login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
   
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems)
    

    return (
        

        <div className="flex justify-between bg-red-100 shadow-lg h-20" >
            <div className="logoContainer">
            <img src= {LOGO_URL} alt="Website Logo" className="w-20 "/>
            </div>
            <div className="flex items-center" >
                <ul className="flex p-5 m-5" >
                    <li className="px-10 ">Online Status : {onlineStatus ? "✅":"⭕" }</li>
                    <li className="px-10"> <Link to="/" >Home </Link>  </li>
                    <li className="px-10"> <Link to="/about" >About Us </Link> </li>
                    <li className="px-10"> <Link to="/contact" >Contact </Link> </li>
                    <li className="px-10 font-bold"> <Link to="/Cart">Cart({cartItems.length})</Link> </li>
                    <button className="login"   onClick={() => { 
                        buttonName === "login" ? setbuttonName("Logout") : setbuttonName("login")}} >
                     {buttonName}
                    </button>  
                    <li className="px-10 font-semibold">Default User: {loggedInUser} </li> 
                </ul>
            </div>
        </div>
    )
};

export default Header;