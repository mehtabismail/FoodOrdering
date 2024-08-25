import { useState } from "react";
import { RestaurantCard, Search } from "../components";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus, useRestaurantList } from "../hooks";
import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const { restaurantList, filteredRestaurantList, setFilteredRestaurantList } =
    useRestaurantList();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you're offline!!! Please check your internet connection
        before trying again...
      </h1>
    );
  }

  return (
    <div className='body w-full'>
      <div className='flex m-4 p-4 items-center'>
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          setFilteredRestaurantList={setFilteredRestaurantList}
          restaurantList={restaurantList}
        />
        <div className='filter'>
          <button
            className='px-4 py-1 mx-10 rounded-md bg-gray-200'
            onClick={() => {
              setFilteredRestaurantList(
                restaurantList.filter((res) => res?.info?.avgRating > 4.3)
              );
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <h1 className='mx-4 font-semibold text-2xl text-grey-900'>
        Restaurant Chains in Lahore
      </h1>
      <div className='flex flex-wrap m-2'>
        {filteredRestaurantList.length > 0 ? (
          filteredRestaurantList?.map((item, index) => (
            <Link
              className='w-1/5'
              key={item?.info?.id}
              to={"restaurant/" + item?.info?.id}
            >
              {index === 2 ? (
                <RestaurantCardPromoted restaurant={item} />
              ) : (
                <RestaurantCard restaurant={item} />
              )}
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
