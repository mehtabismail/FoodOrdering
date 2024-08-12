import { RESTAURANT_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, sla, cuisines, locality } = restaurant?.info;

  return (
    <div className='res-card'>
      <img
        src={RESTAURANT_CDN_URL + cloudinaryImageId}
        className='res-logo'
        alt='res-logo'
      />
      <div className='res-card-content'>
        <div style={{ marginBottom: 8, marginTop: 5 }}>
          <text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</text>
        </div>
        <div>
          <text style={{ fontSize: 14, fontWeight: "bolder" }}>
            {sla?.slaString}
          </text>
        </div>

        <div
          style={{
            marginTop: 5,
            marginBottom: 5,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <text
            style={{
              fontSize: 14,
              fontWeight: "initial",
              color: "grey",
              whiteSpace: "nowrap",
            }}
          >
            {cuisines}
          </text>
        </div>
        <div>
          <text
            style={{
              fontSize: 14,
              fontWeight: "initial",
              color: "grey",
              whiteSpace: "nowrap",
            }}
          >
            {locality}
          </text>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
