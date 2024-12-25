import React from "react";

const SearchComponent = () => {
  const 
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchComponent;
