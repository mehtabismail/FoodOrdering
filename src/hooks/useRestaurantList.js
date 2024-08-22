import { useEffect, useState } from "react";
import { RESTAURANT_API_URL } from "../utils/constants";

const useRestaurantList = (resId) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  const fetchData = async () => {
    const response = await fetch(RESTAURANT_API_URL);
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

  return { restaurantList, filteredRestaurantList, setFilteredRestaurantList };
};

export default useRestaurantList;
