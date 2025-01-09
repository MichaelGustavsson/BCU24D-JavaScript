const addToStorage = (grocery) => {
  const groceries = getFromStorage();

  groceries.push(grocery);

  localStorage.setItem('groceries', JSON.stringify(groceries));
};

const getFromStorage = () => {
  let items;

  if (localStorage.getItem('groceries') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('groceries'));
  }

  return items;
};

const removeFromStorage = (grocery) => {
  let groceries = getFromStorage();

  groceries = groceries.filter((item) => item !== grocery);
  localStorage.setItem('groceries', JSON.stringify(groceries));
};

const clearStorage = (key) => {
  localStorage.removeItem(key);
};
