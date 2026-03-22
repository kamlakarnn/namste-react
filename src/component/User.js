import React from "react";
import About from "./about";


// when any class compoenent is created it will call the constructor method frist then renderand then componentdidmount component
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           userInfo:{
            name: "kamla",
            location: "delhi"
           }
        }
    }

    async componentDidMount(){
        //this we can make api call
        const data = await fetch("https://jsonplaceholder.typicode.com/users/1");  
        const json = await data.json();
        console.log(json); 

        this.setState({
            userInfo: json  
        })
        // it will call last after the render method is called whe ui is loaded on the screen
        console.log("component did mount");
    }
    render(){
        // const {name, location} = this.props;
        const {name, email} = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {email}</h3>
                {/* <h4>Count: {count}</h4>
                 <h4>Count2: {count2}</h4>  */}
                 <About />

            </div>
        );
    }
}

export default UserClass;