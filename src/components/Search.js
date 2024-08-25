const Search = ({
  searchText,
  setSearchText,
  restaurantList,
  setFilteredRestaurantList,
}) => {
  return (
    <div className='search'>
      <input
        className='border border-solid border-black rounded-lg px-2'
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className='search-btn px-4 m-4 py-1 rounded-lg bg-gray-200'
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
