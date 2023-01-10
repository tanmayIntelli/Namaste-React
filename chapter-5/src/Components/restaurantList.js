import React, {useState} from "react"
import Card from "./card"
import {restaurantData} from '../config';

export default RestaurantList = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setfilteredRestaurant] = useState(restaurantData.cards);

    const searchHandler = ()=>{
        const searchResult = restaurantData.cards.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()))
        setfilteredRestaurant(searchResult);
    }
    
    return(
        <>
            <div className="search">
                <input type="text" name="search" id="search-input" value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder="Search for restaurants and foods" />
                <button id="search-btn" onClick={searchHandler}>Search</button>
            </div>
            <div className="restaurant-list">
                {filteredRestaurant.map((resData)=><Card key={resData.data.id} restaurant={resData}/>)}
            </div>
        </>
);
}