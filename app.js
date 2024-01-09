import React from "react";
import ReactDOM from "react-dom/client";

// This is how you create a element in core REACT
const heading = React.createElement("h1", {id: "heading1"}, "NAMASTE from suraj");

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);


// This is how you create a element in jsx (makes readable and easy than core REACT)
const jsxElement = <h2> HELLO FROM jsx element</h2>;
root.render(jsxElement);

// This is how you create a react functional componet in jsx

const FunctionalComponent = () => <h1>Hello from functionalComponent</h1>;

const Title = () => (<h1>
    <FunctionalComponent/>
    Hello from little stuart
    </h1>);

root.render(<Title/>);
 
