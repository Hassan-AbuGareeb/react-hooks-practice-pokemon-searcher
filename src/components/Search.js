import React, { useState } from "react";

function Search({ onSearch }) {
  const [localSearch, setLocalSearch] = useState("");

  function handleSearchChange(event) {
    setLocalSearch(event.target.value);
  }

  function handleSearchBlur() {
    onSearch(localSearch);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          type="text"
          className="prompt"
          onChange={handleSearchChange}
          onBlur={handleSearchBlur}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
