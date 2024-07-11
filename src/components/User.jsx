import { useState } from "react";

const User = (props) => {
    
    const [useCount]= useState([0]);
    const [useRatio]= useState([1/2]);

    return ( 
        <div className="nameCard">
            <h1>Functional based component</h1>
            <h2>Count:{useCount}</h2>
            <h2>Rato:{useRatio}</h2>
            <h2>{props.name}</h2>
        </div>
        
    );
};

export default User;