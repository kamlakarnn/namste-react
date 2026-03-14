import React from "react";
import resList from "../utils/mockData";  
import { IMG_CDN_URL } from "../utils/constant";  

const RestaurantCard = (props) => {
    const { resData } = props;

    if (!resData?.data) return null;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

    return (    
        <div className="res-card"
        style={{backgroundcolor:"#f0f0f0"}}>
        <img className="res-logo"
        src= {IMG_CDN_URL }
        
        alt="biryani" />

        <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
      </div>
        );
}

export default RestaurantCard;