import RestaurantCard from "./RestaurantCard";
import resObjList from "../utils/mockData";
import {useState} from "react";


const Body = () =>{
    const [resObjList2,setresObjList2] = useState(resObjList);
   
    // how to write this in javscript 
    // const arr = useState(resObjList);

    // const resObjList2 = arr[0];   or this same as const[resObjList2,setresObjList2]= arr;  
    // const seresObjList2 = arr[1];     this will also work   , it is just destructuring of arrays




    return (
      <div className="body" >
          <div className="filter">
               <button
                className="filterBtn" 
                onClick={() => {
                    const filteredList = resObjList2.filter( (x)=> x.data.avgRating >4  );
                    setresObjList2(filteredList);
                } }
               
               > Top rated Restaurant</button>
           </div>
          <div className="restaurantContainer">
              {
                  resObjList2.map(
                      (x) => (<RestaurantCard key={x.data.id} resData={x} />)  // x is the restaurantList basically
                  )
              }
          </div>
      </div>
     )
  };

  export default Body;