import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        dispatch(addItem(item));
    }

    
    return (
    <div>
        {items.map((item)=>(
            <div key={item.card.info.id} className="p-2 border-gray-200 border-b-2 text-left flex " >
           
           <div className="w-9/12"> 
            <div className="  py-2">
               <span>{item.card.info.name}</span> 
               <span> 
                {" "}
                ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }
                </span>
                
            </div>
            <p className="text-xs font-sans">{item.card.info.description}</p>
           
        </div>
        <div  className="w-3/12 p-4">
        <div className="absolute">
                   <button className="p-1 mx-24 rounded-lg bg-black text-white shadow-lg m-auto "
                          onClick={() =>handleAddItem(item)}
                   >
                    Add +
                   </button>
                </div>
                <img src={CDN_URL+ item.card.info.imageId} className="w-full h-20" />
            </div>
        </div>
        ))}
            
    </div>
    )
}

export default ItemList;