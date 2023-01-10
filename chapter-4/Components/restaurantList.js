import React from "react"
import Card from "./card"
import {restaurantData} from '../config';

export default RestaurantList = () => {
    return(
    <div className="restaurant-list">
        {restaurantData.cards.map((resData)=><Card key={resData.data.id} restaurant={resData}/>)}
    </div>
);
}