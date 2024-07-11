import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo= useRestaurantMenu(resId);

    const [showIndex,setshowIndex]= useState(null);

    if (resInfo === null) return <Shimmer />;

    const {name,cuisines,locality,costForTwo,avgRating,totalRatings}= resInfo?.data?.cards[0]?.card?.card?.info;
 
    const categories = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c)=> 
        c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
     // console.log(categories);

    return (

        <div className="text-center">  
         
          <h1 className="font-bold text-4xl italic py-4">{name}</h1>
          <div className="menuList text-lg italic">
        
          <h3>{cuisines}</h3>
          <h3>locality: {locality}</h3>
          <h3>cost for two: {costForTwo/100}₹</h3>
          <h3>avgRating: {avgRating} ⭐</h3>
          <h3>totalRatings: {totalRatings}k</h3>
          </div>

          <div className="menuDiscounts text-lg italic py-3 m-2">
            <h2>{resInfo.data.cards[1].card.card.gridElements.infoWithStyle.offers[1].info.header}</h2>
          </div>

          {
            categories.map((category,index) => (
              <RestaurantCategory 
              key={category?.card?.card?.title}
               data={category?.card?.card}
               showItems={index ===showIndex ? true :false}
               setshowIndex={()=>setshowIndex(index)}
               />
            )
              ) 
          }
          
        
        </div>
    )
};

export default RestaurantMenu;
