import React from "react";

class UserClass extends React.Component {
constructor (props){
    super(props);
    
    
    this.state ={
        userInfo :{
            name: "neeraj",
            location: "pune",
            avatar_url: "avatar_url"
        }
    };
}

async componentDidMount()  {
    const Data = await fetch("https://api.github.com/users/Suraj-dot-art");
    const jsonData = await Data.json();

    this.setState({
        userInfo: jsonData,
    });
    console.log(jsonData);
}

    render () {
        const {login,id,avatar_url}= this.state.userInfo;
        
   
        return (

             <div className="nameCard">
              
              <h1>This is made using Class based component</h1>
              
              <h2>Name: { login}</h2>
              <h2>Id: {id}</h2>
              <h2>URL: {this.state.userInfo.avatar_url}</h2>
              <img className="p-4 m-4 w-3/12" src={avatar_url} alt="JIPI JIPI JAPA JAPA RUBI RUBI" />
            </div>
            
        )
    }
};

export default UserClass ;