const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="SearchBox">
      <input type="text" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
