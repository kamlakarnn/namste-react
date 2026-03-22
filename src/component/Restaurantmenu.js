import React from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestraunantMenu from "../utils/useRestraunantMenu";

const Restaurantmenu = () => {
  const { resid } = useParams();

  // console.log(resid);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     // const data = await fetch()

//     // const data = resList;
//     // setResInfo(data)

//     const data = resList.filter(
//       (restaurant) => restaurant.data.id === resid
//     );

//      console.log(data,"data of restaurant menu");
//      setResInfo(data );
//   };
   
    const resInfo = useRestraunantMenu(resid);

  if (resInfo === null) return <Shimmer />;

  const { name, slugs, cuisines, address, maxDeliveryTime } = resInfo[0].data;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{slugs.restaurant}</h2>
      <ul>
        <li>{cuisines.join(", ")}</li>
        <li>{address}</li>
        <li>{maxDeliveryTime} mins</li>
      </ul>
    </div>
  );
};

export default Restaurantmenu;
