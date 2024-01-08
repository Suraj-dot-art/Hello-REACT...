const heading = React.createElement("h1", 
{id: "headingOne"} ,  
React.createElement("h3", {} , "This is my third Heading"));

console.log(heading);




const root = ReactDOM.createRoot(document.querySelector("#firstDiv"));

root.render(heading);