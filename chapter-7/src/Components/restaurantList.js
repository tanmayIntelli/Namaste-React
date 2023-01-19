import React, { useState, useEffect } from "react";
import Card from "./card";
import Shimmer from "./shimmer.js";

export default RestaurantList = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantsList = await data.json();
    setAllRestaurants(restaurantsList.data.cards[2].data.data.cards);
    setfilteredRestaurant(restaurantsList.data.cards[2].data.data.cards);
  }

  const searchHandler = () => {
    const searchResult = allRestaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredRestaurant(searchResult);
  };

  if (!allRestaurants) return null;

  return allRestaurants.length > 0 ? (
    <>
      <div className="search">
        <input
          type="text"
          name="search"
          id="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for restaurants and foods"
        />
        <button id="search-btn" onClick={searchHandler}>
          Search
        </button>
      </div>
      {filteredRestaurant.length < 1 && <h1>No result found!</h1>}
      <div className="restaurant-list">
        {filteredRestaurant.map((resData) => (
          <Card
            restID={resData.data.id}
            key={resData.data.id}
            restaurant={resData}
          />
        ))}
      </div>
    </>
  ) : (
    <Shimmer />
  );
};
