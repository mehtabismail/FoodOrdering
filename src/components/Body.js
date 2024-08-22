import { useState } from "react";
import { RestaurantCard, Search } from "../components";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus, useRestaurantList } from "../hooks";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const { restaurantList, filteredRestaurantList, setFilteredRestaurantList } =
    useRestaurantList();

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you're offline!!! Please check your internet connection
        before trying again...
      </h1>
    );
  }

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
            setFilteredRestaurantList(
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
            <Link key={item?.info?.id} to={"restaurant/" + item?.info?.id}>
              <RestaurantCard restaurant={item} />
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
