import React from "react";

function useLocalStorage(itemName, itemInitialState) {
  const storagedStringItem = localStorage.getItem(itemName);
  let storagedParsedItem;

  if (!storagedStringItem) {
    localStorage.setItem(itemName, JSON.stringify(itemInitialState));
    storagedParsedItem = [];
  } else {
    storagedParsedItem = JSON.parse(storagedStringItem);
  }

  const [item, setItem] = React.useState(storagedParsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
    console.log("saving: " + JSON.stringify(newItem));
  };

  return [item, saveItem];
}

export { useLocalStorage };
