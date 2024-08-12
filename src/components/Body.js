import { useEffect, useState } from "react";
import { RestaurantCard, Search } from "../components";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    console.log("calling api");
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setRestaurantList(
      data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='body'>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        setFilteredRestaurantList={setFilteredRestaurantList}
        restaurantList={restaurantList}
      />
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            setRestaurantList(
              restaurantList.filter((res) => res?.info?.avgRating > 4.3)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <h1>Restaurant Chains in Lahore</h1>
      <div className='res-card-container'>
        {filteredRestaurantList.length > 0 ? (
          filteredRestaurantList?.map((item, index) => (
            <RestaurantCard restaurant={item} key={item?.info?.id} />
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
