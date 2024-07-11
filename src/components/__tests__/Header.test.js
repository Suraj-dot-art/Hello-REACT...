// import { render , screen } from "@testing-library/react"
// import Header from "../Header.jsx";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom"
// import { Provider } from "react-redux";





// it("Should render Header Component with a login button", ()=>{
//     render(
//         <BrowserRouter>
//         <Provider store={appStore}>
//         <Header/>
//         </Provider>
//         </BrowserRouter>
        
//     );

//     const loginButton = screen.getByRole("button", {name:"Login"});
//     expect(loginButton).toBeInTheDocument();

// }),

// it("Should render cart Component with cart items 0", ()=>{
//     render(
//         <BrowserRouter>
//         <Provider>
//         <Header/>
//         </Provider>
//         </BrowserRouter>
        
//     );

//     const cartItems = screen.getByText("Cart(0)");
//     expect(cartItems).toBeInTheDocument();

// });