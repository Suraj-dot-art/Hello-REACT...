import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) =>{
    const {resData}= props;

    const {imageId,name,cuisines,deliveryTime,avgRating} = resData?.data;

    return (
        <div className="resCard">
            <img 
            id="box8image" 
            alt="box8 meal"
            src={ CDN_URL
            + imageId  }/> 
                    
            <h2>{name}</h2>
            <h2>{cuisines.join(",")}</h2>
            <h2>{deliveryTime}min</h2>
            <h3>{avgRating}⭐</h3>

        </div>
    )
};

export default RestaurantCard;