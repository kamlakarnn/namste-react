import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import Footer  from "./src/component/footer";

// // This is JSX - it needs a build step to work!
// const heading = <h1>Namaste React using JSX</h1>;

// //react functional component
// const HeadingComponent = () => {
//   return <h1>Namaste React using Functional Component</h1>;
// };


// this is componet 
const Title =()=>
(<h1 className="head" tabIndex="5">HI i am title component</h1>)

// this is another component in that i am using title component this is called composition of component.
const HeadingComponet = () =>(
    <div id="container">
        <Title/>
        <h1 className="head" tabIndex="5">HI i am heading component</h1>
    </div>
)

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
