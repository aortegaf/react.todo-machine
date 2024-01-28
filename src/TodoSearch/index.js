function TodoSearch(props) {
  return (
    <input
      placeholder="Search..."
      value={props.searchValue}
      onChange={(event) => props.setSearchValue(event.target.value)}
    />
  );
}

export { TodoSearch };
