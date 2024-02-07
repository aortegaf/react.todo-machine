import React from "react";
import { CiSearch } from "react-icons/ci";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <>
      <div className="search-container">
        <input
          placeholder="Search..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <CiSearch className="icon" />
      </div>
    </>
  );
}

export { TodoSearch };
