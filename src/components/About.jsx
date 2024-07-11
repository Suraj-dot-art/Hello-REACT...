//import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//     return (
//         <div>
//             <h1>Hello about</h1>
//             <h2>this the best coder in the world</h2>

//             <UserClass name={"gaurya"} location="satara class"/>
//         </div>
//     )
// }

class About extends React.Component {
    constructor (props){
        super(props);
         console.log("parent constructor")
    }

    render() {
        return (
            <div>
             
             <h2 className="bg-red-100 m-4 px-4 py-1 shadow-lg"> This the best coder in the world</h2>

            <UserClass name={"gaurya"} location="satara class"/>
         </div>
        );
    }
}


export default About;