import React from "react";

function useLocalStorage(itemName, itemInitialState) {
  const [item, setItem] = React.useState(itemInitialState);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const storagedStringItem = localStorage.getItem(itemName);
        let storagedParsedItem;

        if (!storagedStringItem) {
          localStorage.setItem(itemName, JSON.stringify(itemInitialState));
        } else {
          storagedParsedItem = JSON.parse(storagedStringItem);
          setItem(storagedParsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2500);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: "1st Task", completed: true },
//   {
//     text: "2nd Task",
//     completed: false,
//   },
//   { text: "3rd Task", completed: false },
//   { text: "4th Task", completed: false },
//   {
//     text: "TaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTask",
//     completed: false,
//   },
// ];

// localStorage.setItem("TODO_LIST", JSON.stringify(defaultTodos));
