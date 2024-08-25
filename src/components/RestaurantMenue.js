import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useRestaurantMenu } from "../hooks";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenue = () => {
  const [showItem, setShowItem] = useState(null);

  const { resId } = useParams();
  const { resInfo, categories } = useRestaurantMenu(resId);

  if (resInfo == null) {
    return <Shimmer />;
  }
  return (
    <div className='text-center'>
      <div className=''>
        <div className='single-res-inside'>
          <h1 className='font-bold text-2xl text-center my-6'>
            {resInfo?.name}
          </h1>
          <p className='font-semibold text-lg text-center'>
            {resInfo?.cuisines.join(", ") + " - " + resInfo?.costForTwoMessage}
          </p>
        </div>
      </div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItem={index === showItem ? true : false}
          setShowIndex={() => setShowItem(index !== showItem ? index : null)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenue;
