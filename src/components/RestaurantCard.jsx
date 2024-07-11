import { CDN_URL } from "../utils/contants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) =>{
    const {resData}= props;

    const {loggedInUser}= useContext(UserContext);
    const {cloudinaryImageId,name,cuisines,deliveryTime,avgRating} = resData?.info;

    return (
         
        <div className="m-4 p-4 w-[300px] h-[380px] bg-gray-100 border border-gray-300 hover:border-red-300 hover:bg-red-100 shadow-lg">
               <img className="w-[100%] h-[200px]" src={ CDN_URL + cloudinaryImageId }/>     
               <h2 className="py-2 font-semibold text-xl">{name}</h2>
            <div className="likhaHua overflow-hidden whitespace-normal">
               <h2>{cuisines.join(",")}</h2>
               {/* <h2>{deliveryTime}min</h2> */}
               <h3>{avgRating}⭐</h3>
               <h3>UserName :{" "}{loggedInUser}</h3>
               
            </div>  
        </div>
        
    )
};

// export const withPromotedCards = (RestaurantCard) => {
//     return(props) => {
//        return (
//         <div>
//             <label> Promoted</label>
//             <RestaurantCard {...props}/>
//         </div>
//        );
//     };
// lecture 11 starting }

export default RestaurantCard;