import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import About from "./src/component/about";
import Contact from "./src/component/Contact";
import Footer from "./src/component/Footer";
import Restaurantmenu  from "./src/component/Restaurantmenu";
import Error from "./src/component/Error";
// import Grocery from "./src/component/Grocery"



//this is component of react-router 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

// // This is JSX - it needs a build step to work!
// const heading = <h1>Namaste React using JSX</h1>;

// //react functional component
// const HeadingComponent = () => {
//   return <h1>Namaste React using Functional Component</h1>;
// };

// this is componet
const Title = () => (
  <h1 className="head" tabIndex="5">
    HI i am title component
  </h1>
);

const Grocery =lazy(() => import("./src/component/Grocery"))

// this is another component in that i am using title component this is called composition of component.
const HeadingComponet = () => (
  <div id="container">
    <Title />
    <h1 className="head" tabIndex="5">
      HI i am heading component
    </h1>
  </div>
);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body />
      <Footer /> */}
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
     path: "/",
     element: <AppLayout />,
    children:[
       {
    path: "/",
    element: <Body/>,
  
  },  
      {
    path: "/about",
    element: <About />,
  
  },
   {
    path: "/contact",
    element: <Contact />,
 
  },
   {
    path: "/grocery",
    element: 
      <Suspense fallback={<h1>Loading...</h1>}> <Grocery/> </Suspense>
    ,
  
  },
  {
    path: "/restaurant/:resid",
    element: <Restaurantmenu />,
 
  }
    ],
    errorElement:<Error/>
  }


]); 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
