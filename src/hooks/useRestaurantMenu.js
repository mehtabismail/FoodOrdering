import { useEffect, useState } from "react";
import { MENUE_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState(null);

  const fetchResInfo = async () => {
    const response = await fetch(MENUE_API_URL + resId);
    const json = await response.json();
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    const categories_list =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (item) =>
          item?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setCategories(categories_list);
  };

  useEffect(() => {
    fetchResInfo();
  }, []);

  return { resInfo, categories };
};

export default useRestaurantMenu;
