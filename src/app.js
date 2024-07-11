import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx"; 
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.jsx";


const AppLayout = () => {

    const [userName, setuserName]= useState();

     useEffect(() =>{
     const data = {name: "SURAJ",};
     setuserName(data.name);
     },[]);  

    return (
        <Provider store={appStore}>    
        <UserContext.Provider value={{loggedInUser: userName ,setuserName}}>
            <div className="app" >
            <Header/>
            <Outlet/>
            </div>
        </UserContext.Provider>
        </Provider>

    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path: "/Cart",
                element: <Cart/>,
            }
        ],
        errorElement: <Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);