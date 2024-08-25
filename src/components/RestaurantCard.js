import { RESTAURANT_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, sla, cuisines, locality } = restaurant?.info;

  return (
    <div className='m-2 mb-4 p-4 rounded-lg  bg-gray-100 hover:bg-gray-200 hover:shadow-xl'>
      <img
        src={RESTAURANT_CDN_URL + cloudinaryImageId}
        className='res-logo rounded-lg h-[170px] w-full'
        alt='res-logo'
      />
      <div>
        <div style={{ marginBottom: 8, marginTop: 5 }}>
          <text className='font-bold text-lg'>{name}</text>
        </div>
        <div>
          <text className='font-semibold text-base'>{sla?.slaString}</text>
        </div>

        <div
          style={{
            marginTop: 5,
            marginBottom: 5,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <text className='font-semibold text-xs text-gray-500 text-nowrap'>
            {cuisines.join(", ")}
          </text>
        </div>
        <div>
          <text className='font-semibold text-xs text-gray-500 text-nowrap'>
            {locality ?? "---"}
          </text>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  console.log("found my card");
  return (props) => (
    <div>
      <label className='absolute bg-black text-white p-2 m-2 rounded-lg'>
        Promoted
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
