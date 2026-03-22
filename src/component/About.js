import React from "react";


class About extends React.Component {
  constructor(props){
    super(props);
    console.log("constructor called");  
  }         
  render() {
    return (
      <div>
        <h2>this is about us compoent </h2>
      </div>
    );
  }
}

export default About;   
