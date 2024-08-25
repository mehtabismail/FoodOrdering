import React from "react";
import { RESTAURANT_CDN_URL } from "../utils/constants";

const CategoryList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className='flex justify-between p-2 m-2 border-gray-300 border-b-2 text-left'
        >
          <div className='flex flex-col pt-2 pr-6 w-9/12'>
            <span>{item.card.info.name}</span>
            <span className='pb-2'>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <div className='text-xs text-gray-400 mb-4'>
              <p>{item.card.info.description}</p>
            </div>
          </div>
          <div className='w-3/12 p-4'>
            <img
              src={RESTAURANT_CDN_URL + item.card.info.imageId}
              className='w-full rounded-sm'
            />
            <div className='absolute -mt-4'>
              <button className='mx-16 p-2 rounded-lg shadow-lg bg-black text-white '>
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
