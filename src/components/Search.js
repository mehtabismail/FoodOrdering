const Search = ({
  searchText,
  setSearchText,
  restaurantList,
  setFilteredRestaurantList,
}) => {
  return (
    <div className='search'>
      <input
        className='input'
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className='search-btn'
        onClick={() => {
          setFilteredRestaurantList(
            restaurantList.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            )
          );
        }}
      >
        Search
      </button>
    </div>
  );
};
export default Search;
