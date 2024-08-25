import React, { useState } from "react";
import CategoryList from "./CategoryList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const hanleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className='rounded-lg w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
        <div className='flex justify-between' onClick={hanleClick}>
          <span className='font-bold text-lg cursor-pointer'>
            {data.title} ({data.itemCards.length})
          </span>
          <span className='cursor-pointer'>{!!showItem ? "⬆️" : "⬇️"}</span>
        </div>

        {!!showItem && <CategoryList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
