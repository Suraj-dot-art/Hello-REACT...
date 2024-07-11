import RestaurantCard from "./RestaurantCard";                                                                       
import {useEffect, useState,useContext} from "react";   
import Shimmer from "./Shimmer";   
import { Link } from "react-router-dom";            
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

                                                                                                                     
const Body = () =>{
    const [resObjList2,setresObjList2] = useState([]);
    const [filteredObjList2, setfilteredObjList2 ] = useState([]);

    const [searchText,setSearchText] = useState([]);


    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        //const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        setresObjList2(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);//optional chaining
        setfilteredObjList2(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const { setuserName} = useContext(UserContext);
    
    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false){
      return (
        <h1>
          looks like you're offline!! PLEASE CHECK YOUR CONNECTION!!!!!
        </h1>
      )
    };
    
    return resObjList2.length === 0 ? (<Shimmer />) : (    //6V 1:17:10
      <div className="body" >

        <div className="flex m-4 px-40">
             <div className="searchDiv m-4 px-4  ">
                <input type="text" className=" border border-solid border-black w-60 shadow-lg hover:border-red-300" placeholder="KFC" value={searchText} onChange={(e)=> {setSearchText(e.target.value);} } />
                <button className="bg-red-100 m-2 px-10 py-1 shadow-lg " onClick={ () => {
                   const filteredRest= resObjList2.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                   setfilteredObjList2(filteredRest);
                 }} 
                 
                >Search</button>
             </div>
                 <button
                className= "border border-solid border-gray-300 bg-red-100 m-5 w-[400px] h-[50px] shadow-lg hover:border-red-300" 
                onClick={() => {            
                    const filteredList = resObjList2.filter( (x)=> x.info.avgRating >4.5  );
                    setfilteredObjList2(filteredList); 
                } }
               > Top rated Restaurant
                 </button>
                 <input type="text" className="bg-red-100 m-4 px-4 py-1 shadow-lg  w-[200px] h-[45px] " 
                 value={setuserName}
                 onChange={(e)=>setuserName(e.target.value)}
                 />
        </div>
          
        <div className=" m-10 pl-12 flex flex-wrap">
              {
                 filteredObjList2.map((res) => (
                   <Link
                      key={res.info.id} 
                      to={"/restaurants/"+res.info.id}>
                      

                    <RestaurantCard  resData={res} /></Link> )  // res is the restaurantList basically and whenever u r looping to anything any list u have to give a key property
                  )
              }
        </div>
      </div>
     ) 
  };

  export default Body;




 
