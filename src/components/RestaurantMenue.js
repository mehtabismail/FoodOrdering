import { useParams } from "react-router-dom";
import { RESTAURANT_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useRestaurantMenu } from "../hooks";

const RestaurantMenue = () => {
  const { resId } = useParams();
  const { resInfo, menueInfo } = useRestaurantMenu(resId);

  if (resInfo == null) {
    return <Shimmer />;
  }
  return (
    <div className='menue-top'>
      <div className='res-head'>
        <img
          src={RESTAURANT_CDN_URL + resInfo?.cloudinaryImageId}
          className='single-res-logo'
          alt='single-res-logo'
        />
        <div className='single-res-inside'>
          <h1>{resInfo?.name}</h1>
          <p>
            {resInfo?.cuisines.join(", ") + " - " + resInfo?.costForTwoMessage}
          </p>
        </div>
      </div>
      {!!menueInfo ? (
        <div className='menu-bottom'>
          <div className='menu-heading'>
            <h2>{menueInfo?.title}</h2>
            <h2>{` (${menueInfo?.itemCards?.length})`}</h2>
          </div>
          <div className='menu-items'>
            {menueInfo?.itemCards?.map((item, index) => (
              <div key={index} className='menu-sub'>
                <div>
                  <h3>{item?.card?.info?.name}</h3>
                  <p>
                    {!!item?.card?.info?.defaultPrice
                      ? "Rs. " + item?.card?.info?.defaultPrice / 100
                      : "Rs. " + item?.card?.info?.price / 100}
                  </p>
                  <p>{item?.card?.info?.description}</p>
                </div>
                <div>
                  <img
                    src={RESTAURANT_CDN_URL + item?.card?.info?.imageId}
                    className='menu-item-logo'
                    alt='menu-item-logo'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h3>Ooops Recommended Menu Not Found..!</h3>
      )}
    </div>
  );
};

export default RestaurantMenue;
