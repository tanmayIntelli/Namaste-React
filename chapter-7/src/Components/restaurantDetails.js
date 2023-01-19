import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import VegIcon from "../img/veg.png";
import NonVegIcon from "../img/nonVeg.png";
import Shimmer from "./shimmer";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const [restaurantDetails, setRestaurantDetail] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        resId
    );
    const json = await data.json();

    let menuItemList = Object.entries(json.data.menu.items).map((e) => ({
      [e[0]]: e[1],
    }));

    setMenuItems(menuItemList);
    setRestaurantDetail(json.data);
  }

  return restaurantDetails ? (
    <div className="restaurant-menu">
      <div className="restaurant-banner">
        <div className="rest-banner-image">
          <img
            src={
              `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` +
              restaurantDetails.cloudinaryImageId
            }
            alt="restaurant img"
            id="banner-img"
          />
        </div>
        <div className="rest-banner-content">
          <div className="rest-banner-details">
            <h3 id="rest-name">{restaurantDetails.name}</h3>
            <h3 id="rest-cuisines">
              {restaurantDetails?.cuisines?.join(", ")}
            </h3>
            <h3 id="rest-area">
              {restaurantDetails.locality + `, ` + restaurantDetails.area}
            </h3>
          </div>
          <div className="rest-banner-stats">
            <h6 id="rest-rating">
              <FaStar /> {restaurantDetails.avgRating}
            </h6>
            <h6 id="rest-time">
              {restaurantDetails.sla.slaString.toLowerCase()}
            </h6>
            <h6 id="rest-cost">{restaurantDetails.costForTwoMsg}</h6>
          </div>
        </div>
        <div className="rest-banner-offer">
          <div className="rest-offer-box">
            {restaurantDetails.aggregatedDiscountInfo.descriptionList?.map(
              (discount, index) => {
                return (
                  <div className="rest-offer-icon" key={index}>
                    <span>
                      <CiDiscount1 style={{ fontSize: "30px" }} />
                    </span>
                    {discount.meta}
                  </div>
                );
              }
            )}
          </div>
          <h3 id="offer-heading">Offers</h3>
        </div>
      </div>
      <div className="food-list-items">
        {menuItems.map((item) => {
          return (
            <div className="menu" key={Object.keys(item)[0]}>
              <div className="menu-details">
                <div className="menu-name">
                  <div>
                    {Object.values(item)[0].attributes.vegClassifier ==
                    "VEG" ? (
                      <img src={VegIcon} alt="veg" height={20} width={20} />
                    ) : (
                      <img src={NonVegIcon} alt="veg" height={20} width={20} />
                    )}
                  </div>
                  <div id="menu-name">{Object.values(item)[0].name}</div>
                  <div id="menu-price">
                    ₹{" "}
                    {(Object.values(item)[0].price == 0
                      ? Object.values(item)[0].defaultPrice
                      : Object.values(item)[0].price) / 100}
                  </div>
                  <div id="menu-description">
                    {Object.values(item)[0].description}
                  </div>
                </div>
                <div className="menu-img">
                  <img
                    src={
                      `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` +
                      Object.values(item)[0].cloudinaryImageId
                    }
                    alt="food ki photo"
                  />
                </div>
              </div>
              <div className="ending-div"></div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantDetails;
