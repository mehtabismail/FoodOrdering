import { useEffect, useState } from "react";
import { MENUE_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menueInfo, setMenueInfo] = useState(null);

  const fetchResInfo = async () => {
    const response = await fetch(MENUE_API_URL + resId);
    const json = await response.json();
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    if (
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    ) {
      setMenueInfo(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card
      );
    }
    if (
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.categories
    ) {
      setMenueInfo(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.categories[0]
      );
    }
  };

  useEffect(() => {
    fetchResInfo();
  }, []);

  return { resInfo, menueInfo };
};

export default useRestaurantMenu;
