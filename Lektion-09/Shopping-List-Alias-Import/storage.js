export default function addToStorage(grocery) {
  const groceries = getFromStorage();

  groceries.push(grocery);

  localStorage.setItem('groceries', JSON.stringify(groceries));
}

export const getFromStorage = () => {
  let items;

  if (localStorage.getItem('groceries') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('groceries'));
  }

  return items;
};

export const removeFromStorage = (grocery) => {
  let groceries = getFromStorage();

  groceries = groceries.filter((item) => item !== grocery);
  localStorage.setItem('groceries', JSON.stringify(groceries));
};

export const clearStorage = (key) => {
  localStorage.removeItem(key);
};
