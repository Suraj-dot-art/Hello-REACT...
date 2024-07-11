import { useState,useEffect } from "react";
import { MENU_URL } from "../utils/contants";

const useRestaurantMenu = (resId) => {

    const [resInfo,setresInfo] = useState(null);

    useEffect(() => {
         fetchData();
    }, []);
 
    const fetchData = async() => {
    const data = await fetch(MENU_URL+ resId);
    const jsonData = await data.json();

    setresInfo(jsonData);
    //console.log(jsonData);
};

    return resInfo;
};

export default useRestaurantMenu;