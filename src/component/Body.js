import React from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import useOnLineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setListOfRestaurants(resList);
    setFilteredRestaurants(resList);
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6448&lng=77.216721&offset=0&sortBy=RELEVANT&sortType=DESC"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }

  //conditiong rendering  ;- render the compponent baseed on the condition
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  // used ternerary operator for conditional rendering

  const onlineStatus = useOnLineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline, Please check your internet connection!!
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredRestaurants.filter(
              (res) => res.data.avgRating > 4,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          top rated button
        </button>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Food or Restaurant"
        />
        <button
          onClick={() => {
            //filter the restaurant cards and update the ui
            console.log(searchText);
            //we filter the restaurant from listofrestaurants
            const filteredRestaurants = listOfRestaurants.filter((res) => {
              const name = res?.data?.name;
              if (!name) return false;
              return name.toLowerCase().includes(searchText.toLowerCase());
            });

            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} />
        <RestaurantCard resData={resList[10]} />
        <RestaurantCard resData={resList[11]} />
        <RestaurantCard resData={resList[12]} /> */}

        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurant/" + restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}

        {/* // * or */}

        {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}

        {resList.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}

        {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
         */}
      </div>
    </div>
  );
};

export default Body;
