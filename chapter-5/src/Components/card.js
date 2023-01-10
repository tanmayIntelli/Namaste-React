import React from "react"

export default Card = ({restaurant}) => {
    const imageURL = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`+restaurant.data.cloudinaryImageId;
   
    return(
    <div className="card">
        <div>
           <img src={imageURL} alt="Restaurant Image" id="restaurant-img"/>
        </div>
        <div className="card-details">
           <h4 id="restaurant-name">{restaurant.data.name}</h4>
           <p id="restaurant-cuisines">{restaurant.data.cuisines.join(", ")}</p>
           <div id="restaurant-details">
            <div id="rating" style={ restaurant.data.avgRating == "--" ? {backgroundColor: "white", color:"#535665"}:
                restaurant.data.avgRating >=4 ? {backgroundColor: "#48c479"} : 
                    restaurant.data.avgRating >=2 ? {backgroundColor: "#db7c38"} : {backgroundColor: "#ff2401"}} >{restaurant.data.avgRating}</div>
            <div>.</div>
            <div id="delivery-time">{restaurant.data.slaString}</div>
            <div>.</div>
            <div id="cost-for-two">{restaurant.data.costForTwoString?restaurant.data.costForTwoString:`-`}</div>
           </div>
        </div> 
        <div className="card-discounts">
           {restaurant.data.aggregatedDiscountInfo.shortDescriptionList[0].meta}
        </div> 
    </div>
);
}